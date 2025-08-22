# Environment Setup Guide

## Overview

This guide covers setting up environment variables for SCISS, including proper database password handling and Render deployment configuration.

## Quick Setup

### Option 1: Interactive Setup (Recommended)

Run the interactive setup script:

```bash
pnpm run setup:env
```

This script will guide you through:

- Database configuration
- Deployment settings (Render vs local)
- Security configuration
- Storage setup (R2)

### Option 2: Manual Setup

1. Copy the template:

   ```bash
   cp env.template .env.local
   ```

2. Edit `.env.local` with your values

## Database Password Handling

### ✅ Recommended Approach

Declare the password as a separate variable:

```bash
# In your .env.local
DB_PASSWORD=your-long-database-password-here
DATABASE_URI=postgresql://username:${DB_PASSWORD}@localhost:5432/sciss_db
```

### Benefits:

- **Security**: Password is isolated and easier to manage
- **Maintainability**: Change password in one place
- **Readability**: Connection string is cleaner
- **Version Control**: Can exclude password from git safely

### Alternative Approaches:

#### 1. Direct in Connection String

```bash
DATABASE_URI=postgresql://username:your-long-password@localhost:5432/sciss_db
```

#### 2. Using Environment Variable Substitution

```bash
DB_PASSWORD=your-long-password
DATABASE_URI=postgresql://username:$DB_PASSWORD@localhost:5432/sciss_db
```

## Render Deployment Configuration

### Database Connection for Render

When deploying to Render, use these connection parameters:

```bash
# For Render PostgreSQL
DATABASE_URI=postgresql://username:${DB_PASSWORD}@your-render-host:5432/sciss_db?sslmode=require&pool_timeout=20&connection_limit=20
```

### Key Parameters:

- `sslmode=require`: Required for Render's SSL connections
- `pool_timeout=20`: Connection pool timeout in seconds
- `connection_limit=20`: Maximum number of connections

### Environment Variables for Render

In your Render dashboard, set these environment variables:

```bash
# Required
DATABASE_URI=postgresql://username:password@host:5432/dbname?sslmode=require&pool_timeout=20&connection_limit=20
PAYLOAD_SECRET=your-super-secret-key
NODE_ENV=production

# Optional but recommended
NEXT_PUBLIC_SERVER_URL=https://your-app.onrender.com
FRONTEND_URL=https://your-app.onrender.com
NEXT_PUBLIC_API_URL=https://your-app.onrender.com/api/payload
```

## Environment Variables Reference

### Database Configuration

```bash
# Separate password variable (recommended)
DB_PASSWORD=your-long-database-password-here

# Connection string
DATABASE_URI=postgresql://username:${DB_PASSWORD}@localhost:5432/sciss_db

# For Render deployment
# DATABASE_URI=postgresql://username:${DB_PASSWORD}@your-render-host:5432/sciss_db?sslmode=require&pool_timeout=20&connection_limit=20
```

### Payload CMS Configuration

```bash
PAYLOAD_SECRET=your-super-secret-key-here
NEXT_PUBLIC_SERVER_URL=http://localhost:3001
FRONTEND_URL=http://localhost:3000
```

### Storage Configuration (R2)

```bash
R2_BUCKET=your-bucket-name
R2_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com
R2_ACCESS_KEY_ID=your-access-key-id
R2_SECRET_ACCESS_KEY=your-secret-access-key
```

### Application Configuration

```bash
NODE_ENV=development
NEXT_PUBLIC_APP_NAME=SCISS
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3001/api/payload
```

## Security Best Practices

### 1. Password Management

- ✅ Use separate `DB_PASSWORD` variable
- ✅ Use strong, unique passwords
- ✅ Never commit passwords to version control
- ❌ Don't use default passwords

### 2. Environment Files

- ✅ Use `.env.local` for local development
- ✅ Use Render environment variables for production
- ✅ Keep `.env.example` in version control (without secrets)
- ❌ Never commit `.env.local` to git

### 3. Secret Generation

```bash
# Generate a secure Payload secret
openssl rand -base64 32

# Or use the setup script which auto-generates secrets
pnpm run setup:env
```

## Troubleshooting

### Common Issues

#### 1. Database Connection Errors

```bash
# Check if database is accessible
psql $DATABASE_URI

# Test connection with timeout
timeout 10 psql $DATABASE_URI -c "SELECT 1;"
```

#### 2. Render Deployment Issues

- Ensure `sslmode=require` is in connection string
- Check if database is in same region as app
- Verify environment variables are set correctly

#### 3. Password Issues

- Ensure password doesn't contain special characters that need escaping
- Check if password length is within limits
- Verify password is correctly URL-encoded if needed

### Debug Commands

```bash
# Check environment variables
echo $DATABASE_URI

# Test database connection
node -e "console.log(process.env.DATABASE_URI)"

# Validate connection string format
node -e "const url = new URL(process.env.DATABASE_URI); console.log('Valid URL:', url.hostname)"
```

## Migration from v2

If migrating from an older version:

1. **Backup your current `.env` file**
2. **Run the migration script**:
   ```bash
   pnpm run migrate:v3
   ```
3. **Update environment variables**:
   ```bash
   pnpm run setup:env
   ```
4. **Test the setup**:
   ```bash
   pnpm payload generate:types
   pnpm payload migrate
   ```

## Next Steps

After setting up your environment:

1. **Generate types**:

   ```bash
   pnpm payload generate:types
   ```

2. **Run migrations**:

   ```bash
   pnpm payload migrate
   ```

3. **Start development**:

   ```bash
   pnpm dev
   ```

4. **Access admin**:
   - Go to `http://localhost:3001/admin`
   - Create your first admin user

## Support

For issues with environment setup:

1. Check the troubleshooting section above
2. Review the [Payload v3 documentation](https://payloadcms.com/docs)
3. Check [Render documentation](https://render.com/docs) for deployment issues
4. Review the [ARCHITECTURE.md](../ARCHITECTURE.md) for technical details
