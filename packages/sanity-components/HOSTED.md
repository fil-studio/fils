# Sanity Dashboard Widgets

Collection of custom Sanity Studio dashboard widgets for deployment automation.

## Components

### DeployButton
A deployment button that triggers GitHub Actions workflows and monitors their status.

**Features:**
- Triggers GitHub Actions via repository dispatch
- Real-time workflow status monitoring
- Fast polling (3-second intervals)
- Retry logic for workflow detection
- Success/error state handling
- Links to live deployment

**Props:**
```typescript
interface DeployButtonProps {
  config: {
    owner: string;          // GitHub org/user
    repo: string;           // Repository name
    token?: string;         // Optional: hardcoded token (use secrets instead)
    branch?: string;        // Default: 'main'
    eventType?: string;     // Default: 'deploy-site'
  };
  title?: string;           // Default: '🚀 Site Deployment'
  deploymentUrl?: string;   // Optional: URL to deployed site
  environment?: string;     // Default: 'production'
  secretsNamespace?: string; // Default: 'deployButton'
  secretKey?: string;       // Default: 'github_token'
}
```

### GitHubTokenConfig
Configuration widget for managing GitHub tokens (dev-only).

**Props:**
```typescript
interface TokenConfigProps {
  title?: string;           // Default: '🔐 GitHub Token Configuration'
  description?: string;     // Custom description text
  secretsNamespace?: string; // Default: 'deployButton'
  secretKey?: string;       // Default: 'github_token'
  environment?: string;     // Default: 'production'
}
```

## Environment Utilities

**envUtils.ts** provides helpers for conditional rendering:

```typescript
import { isDevelopment, isProduction, withDevOnly } from './envUtils';

// Check environment
if (isDevelopment()) {
  // Show dev tools
}

// Wrap components
const DevOnlyWidget = withDevOnly(GitHubTokenConfig);
```

## Usage

### Basic Setup

1. **Install dependencies:**
```bash
npm install @sanity/dashboard @sanity/studio-secrets
```

2. **Add to your dashboard config:**

```typescript
import { isDevelopment } from './envUtils';
import DeployButton from './DeployButton';
import GitHubTokenConfig from './GitHubTokenConfig';

export default {
  widgets: [
    // Production deploy button (always visible)
    {
      name: 'deploy-prod',
      component: DeployButton,
      options: {
        config: {
          owner: 'your-org',
          repo: 'your-repo',
          branch: 'main'
        },
        title: '🚀 Deploy to Production',
        deploymentUrl: 'https://your-site.com',
        environment: 'production'
      }
    },
    
    // Token config (dev only)
    ...(isDevelopment() ? [
      {
        name: 'github-config',
        component: GitHubTokenConfig
      }
    ] : [])
  ]
};
```

### GitHub Setup

1. **Create a Personal Access Token:**
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate new token (classic)
   - Select scopes: `repo` (for private repos) or `public_repo` (for public)
   - Copy the token

2. **Configure in Sanity:**
   - In local dev, the GitHubTokenConfig widget will appear
   - Paste your token
   - Save

3. **Create GitHub Workflow:**

```yaml
# .github/workflows/deploy.yml
name: Deploy Site

on:
  repository_dispatch:
    types: [deploy-site]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to AWS
        run: |
          # Your deployment script
          echo "Deploying to ${{ github.event.client_payload.environment }}"
          # ... your AWS deploy commands
```

### Conditional Dev Tools

Hide sensitive tools from clients:

```typescript
const dashboardConfig = {
  widgets: [
    // Always visible
    { name: 'deploy', component: DeployButton, options: {...} },
    
    // Dev only
    ...(isDevelopment() ? [
      { name: 'token-config', component: GitHubTokenConfig },
      { name: 'vision', component: VisionTool },
      { name: 'debug-panel', component: DebugPanel }
    ] : [])
  ]
};
```

## Environment Detection

The `isDevelopment()` function checks:
1. `window.location.hostname` for localhost/127.0.0.1/192.168.x.x
2. `process.env.NODE_ENV === 'development'`

This means:
- ✅ Local dev: widgets visible
- ❌ Production deploy: widgets hidden
- ❌ Client access: widgets hidden

## Security Notes

- **Never commit tokens** to your repository
- Use Sanity Studio Secrets to store tokens securely
- Tokens are stored in your Sanity project dataset
- Each user can configure their own token in local dev
- Production deployments should use GitHub Actions secrets, not personal tokens

## Troubleshooting

**"Could not find workflow run"**
- Check that your workflow file exists
- Verify the `eventType` matches your workflow's `repository_dispatch.types`
- Ensure the token has correct permissions

**"GitHub API delays"**
- The GitHub Actions API can lag 10-30 seconds behind the UI
- This is normal and expected
- The widget polls every 3 seconds for updates

**"CORS errors"**
- Make sure you're not adding custom cache headers
- GitHub's API has strict CORS policies
- The widget handles this correctly

## License

MIT