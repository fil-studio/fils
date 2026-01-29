/**
 * GitHub Token Configuration Widget
 * Only show this in local development environment
 * Dependencies: React, @sanity/ui, @sanity/icons, @sanity/studio-secrets
 */

import * as React from 'react';
import { useState } from 'react';
import { Card, Stack, Text, Button } from '@sanity/ui';
import { useSecrets, SettingsView } from '@sanity/studio-secrets';
import { CogIcon } from '@sanity/icons';

interface TokenConfigProps {
  title?: string;
  description?: string;
  secretsNamespace?: string;
  secretKey?: string;
  environment?: string;
}

export const GitHubTokenConfig = ({
  title = "🔐 GitHub Token Configuration",
  description = "Configure your GitHub personal access token for deployment automation.",
  secretsNamespace = "deployButton",
  secretKey = "github_token",
  environment = "production"
}: TokenConfigProps) => {
  const [showSettings, setShowSettings] = useState(false);
  
  // Use Sanity secrets to check if token exists
  const { secrets } = useSecrets(secretsNamespace);
  const token = (secrets as Record<string, string | undefined>)?.[secretKey];
  const hasToken = Boolean(token);
  
  // Plugin config for secrets
  const pluginConfigKeys = [
    {
      key: secretKey,
      title: `GitHub Token for ${environment}`,
      description: `Personal access token for GitHub Actions deployment`,
      type: 'string' as const,
      inputType: 'password' as const
    }
  ];

  if (showSettings) {
    return (
      <Card padding={4} radius={2} shadow={1}>
        <Stack space={3}>
          <Text size={2} weight="semibold">
            {title}
          </Text>
          <SettingsView
            title={title}
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

  return (
    <Card padding={4} radius={2} shadow={1}>
      <Stack space={3}>
        <Text size={2} weight="semibold">
          {title}
        </Text>
        <Text size={1} muted>
          {description}
        </Text>
        
        <Stack space={2}>
          <Text size={1}>
            Status: {hasToken ? '✅ Token configured' : '⚠️ No token configured'}
          </Text>
          
          <Button
            tone={hasToken ? 'default' : 'primary'}
            icon={CogIcon}
            onClick={() => setShowSettings(true)}
            text={hasToken ? 'Update Token' : 'Configure Token'}
          />
        </Stack>
      </Stack>
    </Card>
  );
};

// export default GitHubTokenConfig;