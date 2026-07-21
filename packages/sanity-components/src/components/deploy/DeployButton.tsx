/**
 * Fil's Hosted Deploy Button
 * Dependencies: React, @sanity/ui, @sanity/icons, @sanity/studio-secrets
 * Recommended to use inside the dashboard
 * Uses studio secrets to store Github token
 */

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Button, Card, Stack, Text, Spinner, Flex } from '@sanity/ui';
import { PlayIcon } from '@sanity/icons/Play';
import { CheckmarkIcon } from '@sanity/icons/Checkmark';
import { CloseIcon } from '@sanity/icons/Close';
import { useSecrets, SettingsView } from '@sanity/studio-secrets';

export interface DeployButtonConfig {
  owner: string;
  repo: string;
  token?: string;
  branch?: string;
  eventType?: string;
}

export interface DeployButtonProps {
  config: DeployButtonConfig;
  title?: string;
  deploymentUrl?: string;
  environment?: string;
  secretsNamespace?: string;
  secretKey?: string;
}

type DeployState = 'idle' | 'triggering' | 'deploying' | 'success' | 'error';

interface WorkflowRun {
  id: number;
  status: string;
  conclusion: string | null;
  created_at: string;
  run_started_at?: string;
  event: string;
}

interface WorkflowRunsResponse {
  workflow_runs: WorkflowRun[];
}

export const DeployButton = ({ 
  config,
  title = "🚀 Site Deployment",
  deploymentUrl,
  environment = "production",
  secretsNamespace = "deployButton",
  secretKey = "github_token"
}: DeployButtonProps) => {
  // ... rest of code
  // ALL HOOKS MUST BE CALLED FIRST - NEVER CONDITIONALLY
  const [deployState, setDeployState] = useState<DeployState>('idle');
  const [message, setMessage] = useState<string>('');
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const monitoringRef = useRef<boolean>(false);

  // Use Sanity secrets - ALWAYS call this hook
  const { secrets } = useSecrets(secretsNamespace);
  const token = (secrets as Record<string, string | undefined>)?.[secretKey];

  // Get the effective token (secrets take priority over config)
  const effectiveToken = token || config?.token;

  // Only show settings if we don't have a token AND we have valid config
  useEffect(() => {
    if (!effectiveToken && config?.owner && config?.repo && !showSettings) {
      setShowSettings(true);
    } else if (effectiveToken && showSettings) {
      // Close settings if we now have a token
      setShowSettings(false);
    }
  }, [effectiveToken, config?.owner, config?.repo, showSettings]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // Plugin config for secrets
  const pluginConfigKeys = [
    {
      key: secretKey,
      title: `GitHub Token for ${environment}`,
      description: `Personal access token for ${config?.owner}/${config?.repo} deployment`,
      type: 'string' as const,
      inputType: 'password' as const
    }
  ];

  // Poll workflow status
  const pollWorkflowStatus = async (runId: number): Promise<void> => {
    try {
      console.log('Polling workflow:', runId);
      
      const cacheBuster = `_=${Date.now()}`;
      const response = await fetch(
        `https://api.github.com/repos/${config.owner}/${config.repo}/actions/runs/${runId}?${cacheBuster}`,
        {
          headers: {
            'Authorization': `token ${effectiveToken}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const run: WorkflowRun = await response.json();
      console.log('Run status:', run.status, 'conclusion:', run.conclusion);
      
      if (run.status === 'completed') {
        // Stop polling
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        monitoringRef.current = false;
        
        if (run.conclusion === 'success') {
          setDeployState('success');
          setMessage('🎉 Deployment completed successfully!');
        } else {
          setDeployState('error');
          setMessage(`❌ Deployment failed: ${run.conclusion}`);
        }
      } else if (run.status === 'in_progress' || run.status === 'queued') {
        const startTime = new Date(run.run_started_at || run.created_at);
        const elapsed = Math.floor((Date.now() - startTime.getTime()) / 1000);
        setDeployState('deploying');
        setMessage(`🔄 Deployment running... (${elapsed}s)`);
      }
    } catch (error) {
      console.error('Polling error:', error);
    }
  };

  // Find the workflow run with retry logic
  const findWorkflowRun = async (retryCount = 0): Promise<void> => {
    const maxRetries = 6; // Try for 30 seconds (5s * 6)
    
    try {
      console.log(`Looking for workflow run... (attempt ${retryCount + 1}/${maxRetries})`);
      
      const cacheBuster = `_=${Date.now()}`;
      const response = await fetch(
        `https://api.github.com/repos/${config.owner}/${config.repo}/actions/runs?per_page=10&${cacheBuster}`,
        {
          headers: {
            'Authorization': `token ${effectiveToken}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data: WorkflowRunsResponse = await response.json();
      console.log('Found runs:', data.workflow_runs.length);
      
      // Find the most recent run (within last 90 seconds)
      const recentRun = data.workflow_runs.find(run => {
        const ageInSeconds = (Date.now() - new Date(run.created_at).getTime()) / 1000;
        console.log(`Run ${run.id}: age ${ageInSeconds}s, event: ${run.event}, status: ${run.status}`);
        return ageInSeconds < 90;
      });
      
      if (recentRun) {
        console.log('Found recent run:', recentRun.id, 'Event:', recentRun.event);
        setDeployState('deploying');
        setMessage('🚀 Deployment started...');
        
        // Start polling every 3 seconds (faster response)
        intervalRef.current = setInterval(() => {
          pollWorkflowStatus(recentRun.id);
        }, 3000);
        
        // Initial poll
        pollWorkflowStatus(recentRun.id);
        
      } else if (retryCount < maxRetries) {
        // Retry after 5 seconds
        console.log(`Workflow not found yet, retrying in 5s... (${retryCount + 1}/${maxRetries})`);
        setMessage(`⏳ Waiting for workflow to start... (${retryCount + 1}/${maxRetries})`);
        setTimeout(() => {
          findWorkflowRun(retryCount + 1);
        }, 5000);
        
      } else {
        console.log('No recent workflow found after retries');
        setDeployState('error');
        setMessage('❌ Could not find workflow run - check if workflow exists');
        monitoringRef.current = false;
      }
    } catch (error) {
      console.error('Error finding workflow:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      
      if (retryCount < maxRetries) {
        console.log(`Error finding workflow, retrying... (${retryCount + 1}/${maxRetries})`);
        setTimeout(() => {
          findWorkflowRun(retryCount + 1);
        }, 5000);
      } else {
        setDeployState('error');
        setMessage(`❌ Error finding workflow: ${errorMessage}`);
        monitoringRef.current = false;
      }
    }
  };

  const triggerDeploy = async (): Promise<void> => {
    // Prevent multiple deployments
    if (deployState !== 'idle' && deployState !== 'success' && deployState !== 'error') return;
    
    setDeployState('triggering');
    setMessage('⚡ Triggering deployment...');
    
    try {
      console.log('Triggering deployment...');
      
      const response = await fetch(
        `https://api.github.com/repos/${config.owner}/${config.repo}/dispatches`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${effectiveToken}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            event_type: config.eventType || 'deploy-site',
            client_payload: {
              environment: environment,
              triggered_by: 'sanity_studio',
              timestamp: new Date().toISOString()
            }
          })
        }
      );

      if (response.ok) {
        console.log('Deployment triggered successfully');
        setMessage('✅ Deployment triggered! Looking for workflow...');
        
        // Wait 5 seconds then look for the workflow
        setTimeout(() => {
          if (!monitoringRef.current) {
            monitoringRef.current = true;
            findWorkflowRun();
          }
        }, 5000);
        
      } else {
        const error = await response.json();
        throw new Error(error.message || `HTTP ${response.status}`);
      }
      
    } catch (error) {
      console.error('Deploy trigger failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setDeployState('error');
      setMessage(`❌ Failed to trigger: ${errorMessage}`);
    }
  };

  type IconComponent = React.ComponentType<any>;

  const getButtonProps = (): { 
    tone: 'primary' | 'positive' | 'critical'; 
    disabled: boolean; 
    icon: IconComponent; 
    text: string;
  } => {
    switch (deployState) {
      case 'triggering':
        return { tone: 'primary', disabled: true, icon: Spinner, text: 'Triggering...' };
      case 'deploying':
        return { tone: 'primary', disabled: true, icon: Spinner, text: 'Deploying...' };
      case 'success':
        return { tone: 'positive', disabled: false, icon: CheckmarkIcon, text: 'Deploy Again' };
      case 'error':
        return { tone: 'critical', disabled: false, icon: CloseIcon, text: 'Try Again' };
      default:
        return { tone: 'primary', disabled: false, icon: PlayIcon, text: 'Deploy Site' };
    }
  };

  // NOW WE CAN HANDLE CONDITIONAL RENDERING AFTER ALL HOOKS
  
  // Check for missing config
  if (!config || !config.owner || !config.repo) {
    return (
      <Card padding={4} radius={2} shadow={1} tone="critical">
        <Stack space={3}>
          <Text size={2} weight="semibold">
            ❌ Deploy Button Configuration Error
          </Text>
          <Text size={1}>
            Missing required config: owner and repo are required
          </Text>
        </Stack>
      </Card>
    );
  }

  // If showing settings, render the settings view
  if (showSettings && !effectiveToken) {
    return (
      <Card padding={4} radius={2} shadow={1}>
        <Stack space={3}>
          <Text size={2} weight="semibold">
            🔐 {title} - Setup Required
          </Text>
          <Text size={1} muted>
            Please configure your GitHub token to enable deployments.
          </Text>
          <SettingsView
            title={`${title} Configuration`}
            namespace={secretsNamespace}
            keys={pluginConfigKeys}
            onClose={() => {
              setShowSettings(false);
            }}
          />
        </Stack>
      </Card>
    );
  }

  // Check for missing token after settings
  if (!effectiveToken) {
    return (
      <Card padding={4} radius={2} shadow={1} tone="critical">
        <Stack space={3}>
          <Text size={2} weight="semibold">
            ❌ Authentication Required
          </Text>
          <Text size={1}>
            No GitHub token configured.
          </Text>
          <Button
            tone="primary"
            mode="ghost"
            size={1}
            onClick={() => setShowSettings(true)}
          >
            Configure Token
          </Button>
        </Stack>
      </Card>
    );
  }

  const buttonProps = getButtonProps();

  return (
    <Card padding={4} radius={2} shadow={1}>
      <Stack space={3}>
        <Text size={2} weight="semibold">
          {title}
        </Text>
        
        <Flex justify="flex-start">
          <Button
            tone={buttonProps.tone}
            disabled={buttonProps.disabled}
            onClick={triggerDeploy}
            size={3}
            style={{ 
              width: '100%',
              maxWidth: '360px',
            }}
          >
            <Flex 
              align="center" 
              justify="center" 
              style={{ 
                gap: '6px',
                padding: '16px 0px 16px 0px'
              }}
            >
              {buttonProps.icon && (
                <span style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  fontSize: '16px',
                  lineHeight: '1'
                }}>
                  <buttonProps.icon />
                </span>
              )}
              <Text size={2} weight="medium" style={{ lineHeight: '1' }}>
                {buttonProps.text}
              </Text>
            </Flex>
          </Button>
        </Flex>
        
        {message && (
          <Card 
            padding={3} 
            radius={1} 
            tone={deployState === 'error' ? 'critical' : deployState === 'success' ? 'positive' : 'primary'}
          >
            <Text size={1}>
              {message}
            </Text>
          </Card>
        )}
        
        {deploymentUrl && deployState === 'success' && (
          <Button
            as="a"
            href={deploymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            tone="primary"
            mode="ghost"
            size={3}
          >
            🌐 View Live Site
          </Button>
        )}
        
        <Text size={1} muted>
          Deploys from {config.branch || 'main'} branch to {environment}
        </Text>
      </Stack>
    </Card>
  );
};