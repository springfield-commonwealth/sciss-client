# GitHub Actions CI/CD Setup

This directory contains GitHub Actions workflows for automated building, testing, and deployment of the SCISS website.

## Workflows

### 1. `deploy.yml` - Main CI/CD Pipeline

- **Triggers**: Push to main/master branch, pull requests
- **Jobs**:
  - `test`: Runs linting, type checking, tests with coverage, and builds the application
  - `deploy`: Deploys to production (only on main/master pushes)
  - `deploy-failure`: Handles deployment failure notifications

### 2. `staging.yml` - Staging Environment

- **Triggers**: Push to develop/staging branches, pull requests, manual dispatch
- **Jobs**:
  - `test`: Runs validation and builds for staging
  - `deploy-staging`: Deploys to staging environment

### 3. `develop.yml` - Development Checks

- **Triggers**: Pull requests, pushes to non-main branches
- **Jobs**:
  - `validate`: Runs all checks without deployment

### 4. `manual-deploy.yml` - Manual Deployment

- **Triggers**: Manual workflow dispatch
- **Jobs**:
  - `manual-deploy`: Full build and deployment process

### 5. `security.yml` - Security Scanning

- **Triggers**: Push to main/master/develop, pull requests, weekly schedule
- **Jobs**:
  - `dependency-scan`: Scans for vulnerable dependencies
  - `code-scan`: Performs CodeQL analysis
  - `secret-scan`: Scans for exposed secrets
  - `container-scan`: Scans container images (if applicable)

## Required Secrets

**⚠️ IMPORTANT**: See [SECRETS_SETUP.md](./SECRETS_SETUP.md) for complete setup instructions.

Add these secrets to your GitHub repository (Settings > Secrets and variables > Actions):

### Production Secrets

- `HOSTINGER_SSH_KEY` - SSH private key for production server
- `HOSTINGER_USER` - SSH username for production server
- `HOSTINGER_HOST` - Production server hostname/IP
- `HOSTINGER_PATH` - Production deployment path
- `HOSTINGER_SSH_PORT` - SSH port for production server
- `NEXT_PUBLIC_API_URL` - Production API URL
- `HEALTH_CHECK_URL` - Production health check URL

### Staging Secrets (Optional)

- `STAGING_SSH_KEY` - SSH private key for staging server
- `STAGING_USER` - SSH username for staging server
- `STAGING_HOST` - Staging server hostname/IP
- `STAGING_PATH` - Staging deployment path
- `STAGING_SSH_PORT` - SSH port for staging server
- `STAGING_API_URL` - Staging API URL
- `STAGING_HEALTH_CHECK_URL` - Staging health check URL
- `STAGING_URL` - Staging site URL

### Security Secrets (Optional)

- `SNYK_TOKEN` - Snyk API token for security scanning

**⚠️ For detailed setup instructions, see [SECRETS_SETUP.md](./SECRETS_SETUP.md)**

## Quick Setup

### 1. Generate SSH Keys

```bash
# Production
ssh-keygen -t rsa -b 4096 -C "production@sciss.org" -f ~/.ssh/hostinger_viswise_production

# Staging (optional)
ssh-keygen -t rsa -b 4096 -C "staging@sciss.org" -f ~/.ssh/hostinger_viswise_staging
```

### 2. Add Public Keys to Servers

```bash
# Production
cat ~/.ssh/hostinger_viswise_production.pub
# Add to production server's authorized_keys

# Staging
cat ~/.ssh/hostinger_viswise_staging.pub
# Add to staging server's authorized_keys
```

### 3. Add Private Keys to GitHub Secrets

```bash
# Production
cat ~/.ssh/hostinger_viswise_production
# Copy to HOSTINGER_SSH_KEY secret

# Staging
cat ~/.ssh/hostinger_viswise_staging
# Copy to STAGING_SSH_KEY secret
```

### 4. Test Connections

```bash
# Production
ssh -i ~/.ssh/hostinger_viswise_production -p 65002 u356222743@217.21.66.232

# Staging
ssh -i ~/.ssh/hostinger_viswise_staging -p 65002 u356222743@staging.sciss.org
```

## Workflow Features

### Production Deployment

- **Automatic**: Deploys when code is pushed to main/master branch
- **Quality Gates**: Requires 80% test coverage minimum
- **Health Checks**: Post-deployment verification
- **Rollback Ready**: Build artifacts for quick rollback

### Staging Environment

- **Testing Ground**: Deploy to staging before production
- **Manual Trigger**: Can be triggered manually for testing
- **Separate Infrastructure**: Isolated from production

### Security Scanning

- **Dependency Scanning**: Weekly vulnerability checks
- **Code Analysis**: CodeQL for security issues
- **Secret Detection**: Prevents credential exposure
- **Container Scanning**: Image vulnerability scanning

### Development Workflow

- **PR Validation**: All checks on pull requests
- **Quality Assurance**: Linting, type checking, tests
- **No Deployment**: Safe validation without deployment

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
