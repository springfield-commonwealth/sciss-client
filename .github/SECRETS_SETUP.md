# GitHub Secrets Setup Guide

This guide explains how to set up all required secrets for the enhanced CI/CD infrastructure.

## Required Secrets

### Production Environment Secrets

Add these secrets in your GitHub repository: **Settings > Secrets and variables > Actions**

| Secret Name           | Description                           | Example Value                            |
| --------------------- | ------------------------------------- | ---------------------------------------- |
| `HOSTINGER_SSH_KEY`   | SSH private key for production server | Content of your SSH private key file     |
| `HOSTINGER_USER`      | SSH username for production server    | `u356222743`                             |
| `HOSTINGER_HOST`      | Production server hostname/IP         | `217.21.66.232`                          |
| `HOSTINGER_PATH`      | Production deployment path            | `domains/sciss.org/public_html`          |
| `HOSTINGER_SSH_PORT`  | SSH port for production server        | `65002`                                  |
| `NEXT_PUBLIC_API_URL` | Production API URL                    | `https://sciss.org/api`                  |
| `HEALTH_CHECK_URL`    | Production health check URL           | `https://sciss.org/api/health-check.php` |

### Staging Environment Secrets

| Secret Name                | Description                        | Example Value                                    |
| -------------------------- | ---------------------------------- | ------------------------------------------------ |
| `STAGING_SSH_KEY`          | SSH private key for staging server | Content of staging SSH private key               |
| `STAGING_USER`             | SSH username for staging server    | `u356222743`                                     |
| `STAGING_HOST`             | Staging server hostname/IP         | `staging.sciss.org`                              |
| `STAGING_PATH`             | Staging deployment path            | `domains/staging.sciss.org/public_html`          |
| `STAGING_SSH_PORT`         | SSH port for staging server        | `65002`                                          |
| `STAGING_API_URL`          | Staging API URL                    | `https://staging.sciss.org/api`                  |
| `STAGING_HEALTH_CHECK_URL` | Staging health check URL           | `https://staging.sciss.org/api/health-check.php` |
| `STAGING_URL`              | Staging site URL                   | `https://staging.sciss.org`                      |

### Security Scanning Secrets

| Secret Name       | Description                                                   | Example Value |
| ----------------- | ------------------------------------------------------------- | ------------- |
| _(None required)_ | All security scanning tools are free and don't require tokens | N/A           |

## Setup Instructions

### 1. Generate SSH Keys (if not already done)

```bash
# For production
ssh-keygen -t rsa -b 4096 -C "production@sciss.org" -f ~/.ssh/hostinger_viswise

# For staging
ssh-keygen -t rsa -b 4096 -C "staging@sciss.org" -f ~/.ssh/hostinger_viswise_staging
```

### 2. Add Public Keys to Servers

```bash
# Production
cat ~/.ssh/hostinger_viswise.pub
# Add this to your production server's authorized_keys

# Staging (same server, different key for security)
cat ~/.ssh/hostinger_viswise_staging.pub
# Add this to your production server's authorized_keys (same server as staging)
```

### 3. Add Private Keys to GitHub Secrets

```bash
# Production
cat ~/.ssh/hostinger_viswise
# Copy entire output to HOSTINGER_SSH_KEY secret

# Staging
cat ~/.ssh/hostinger_viswise_staging
# Copy entire output to STAGING_SSH_KEY secret
```

### 4. Test SSH Connections

```bash
# Test production connection
ssh -i ~/.ssh/hostinger_viswise -p 65002 u356222743@217.21.66.232

# Test staging connection
ssh -i ~/.ssh/hostinger_viswise_staging -p 65002 u356222743@staging.sciss.org
```

### 5. Security Scanning Setup (Automatic)

The security workflow uses free tools:

- **pnpm audit**: Built-in Node.js security scanning
- **CodeQL**: GitHub's free code analysis
- **TruffleHog**: Free secret detection
- **Trivy**: Free container scanning (if applicable)

No additional setup required!

## Environment Configuration

### Production Environment

- **Branch**: `main` or `master`
- **Deployment**: Automatic on push
- **Approval**: Required (configure in GitHub Environments)
- **Server**: `217.21.66.232:65002`
- **Path**: `domains/sciss.org/public_html`

### Staging Environment

- **Branch**: `develop` or `staging`
- **Deployment**: Automatic on push
- **Approval**: Optional
- **Server**: `staging.sciss.org:65002` (same IP as production)
- **Path**: `domains/staging.sciss.org/public_html`

## Security Best Practices

1. **Rotate SSH Keys Regularly**: Change SSH keys every 90 days
2. **Use Deploy Keys**: Consider using GitHub deploy keys instead of personal SSH keys
3. **Monitor Access**: Regularly review who has access to secrets
4. **Audit Logs**: Monitor GitHub Actions logs for security issues
5. **Least Privilege**: Use separate SSH keys for different environments
6. **Environment Isolation**: Staging and production use same server but separate directories and SSH keys

## Troubleshooting

### Common Issues

1. **SSH Connection Failed**

   - Verify SSH key is correctly added to GitHub secrets
   - Check that public key is added to server's authorized_keys
   - Ensure SSH port is correct

2. **Permission Denied**

   - Check file permissions on SSH key (should be 600)
   - Verify user has write access to deployment path

3. **Secret Not Found**
   - Ensure secret names match exactly (case-sensitive)
   - Check that secrets are added to the correct repository

### Debug Commands

```bash
# Test SSH connection with verbose output
ssh -v -i ~/.ssh/hostinger_viswise -p 65002 u356222743@217.21.66.232

# Test staging SSH connection
ssh -v -i ~/.ssh/hostinger_viswise_staging -p 65002 u356222743@staging.sciss.org

# Check SSH key permissions
ls -la ~/.ssh/hostinger_viswise
ls -la ~/.ssh/hostinger_viswise_staging

# Test rsync locally (production)
rsync -avz --dry-run -e "ssh -p 65002" dist/ u356222743@217.21.66.232:domains/sciss.org/public_html/

# Test rsync locally (staging)
rsync -avz --dry-run -e "ssh -p 65002" dist/ u356222743@staging.sciss.org:domains/staging.sciss.org/public_html/
```

## Migration from Old Setup

If you're migrating from the old setup:

1. **Backup Current Secrets**: Export current secrets before making changes
2. **Test New Workflows**: Test staging deployment before production
3. **Gradual Rollout**: Deploy to staging first, then production
4. **Monitor Closely**: Watch for any issues during the first few deployments

## Support

For issues with this setup:

1. Check the troubleshooting section above
2. Review GitHub Actions logs
3. Test SSH connections manually
4. Verify all secrets are correctly configured
