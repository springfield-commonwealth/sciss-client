# GitHub Actions CI/CD Setup

This directory contains GitHub Actions workflows for automated building, testing, and deployment of the SCISS website.

## Workflows

### 1. `deploy.yml` - Main CI/CD Pipeline

- **Triggers**: Push to main/master branch, pull requests, manual dispatch
- **Jobs**:
  - `build-and-test`: Runs linting, type checking, tests, and builds the application
  - `deploy`: Deploys to Hostinger (only on main/master pushes)

### 2. `develop.yml` - Development Checks

- **Triggers**: Pull requests, pushes to non-main branches
- **Jobs**:
  - `validate`: Runs all checks without deployment

### 3. `manual-deploy.yml` - Manual Deployment

- **Triggers**: Manual workflow dispatch
- **Jobs**:
  - `manual-deploy`: Full build and deployment process

## Required Secrets

Add these secrets to your GitHub repository (Settings > Secrets and variables > Actions):

### `HOSTINGER_SSH_KEY`

Your SSH private key for connecting to Hostinger. This should be the content of your `~/.ssh/hostinger_viswise` file.

**To add this secret:**

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Click "New repository secret"
4. Name: `HOSTINGER_SSH_KEY`
5. Value: Copy the entire content of your SSH private key file

## Setup Instructions

### 1. Generate SSH Key (if not already done)

```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com" -f ~/.ssh/hostinger_viswise
```

### 2. Add Public Key to Hostinger

```bash
cat ~/.ssh/hostinger_viswise.pub
```

Copy the output and add it to your Hostinger SSH keys.

### 3. Add Private Key to GitHub Secrets

```bash
cat ~/.ssh/hostinger_viswise
```

Copy the entire output and add it as the `HOSTINGER_SSH_KEY` secret.

### 4. Test the Connection

```bash
ssh -i ~/.ssh/hostinger_viswise -p 65002 u356222743@217.21.66.232
```

## Workflow Features

### Automatic Deployment

- Deploys automatically when code is pushed to main/master branch
- Runs all tests and checks before deployment
- Uses build artifacts to ensure consistency

### Manual Deployment

- Can be triggered manually from GitHub Actions tab
- Useful for emergency deployments or testing

### Development Checks

- Runs on all pull requests
- Ensures code quality before merging
- No deployment, just validation

## Troubleshooting

### Common Issues

1. **SSH Connection Failed**

   - Verify the SSH key is correctly added to GitHub secrets
   - Check that the public key is added to Hostinger
   - Ensure the SSH port (65002) is correct

2. **Build Failures**

   - Check the build logs for dependency issues
   - Verify all required environment variables are set
   - Ensure the `dist/` directory is being generated

3. **Deployment Failures**
   - Verify the remote path exists on Hostinger
   - Check file permissions on the remote server
   - Ensure rsync is available on the GitHub Actions runner

### Debugging

To debug deployment issues:

1. Check the GitHub Actions logs
2. Verify SSH connectivity manually
3. Test the deployment script locally
4. Check Hostinger server logs

## Security Notes

- The SSH key should have restricted permissions (600)
- Consider using deploy keys instead of personal SSH keys
- Regularly rotate SSH keys
- Monitor GitHub Actions logs for security issues
