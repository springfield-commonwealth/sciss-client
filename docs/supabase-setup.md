# Supabase PostgreSQL Setup Guide

## Overview

This guide explains how to configure PayloadCMS with Supabase PostgreSQL database.

## Prerequisites

- Supabase account and project
- Node.js 20+ installed
- pnpm package manager

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note your project reference ID

## Step 2: Get Database Connection String

1. In your Supabase dashboard, go to **Settings** → **Database**
2. Copy the **Connection string** (URI format)
3. Replace `[YOUR-PASSWORD]` with your database password

## Step 3: Configure Environment Variables

1. Copy `env.template` to `.env.local`
2. Update the following variables:
   ```bash
   DATABASE_URI=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
   PAYLOAD_SECRET=your-secure-secret-key
   ```

## Step 4: Initialize Database

```bash
# Generate PayloadCMS types
pnpm payload:generate:types

# Run database migrations
pnpm payload:migrate

# Test database connection
pnpm db:setup
```

## Step 5: Verify Setup

1. Start the development server: `pnpm dev`
2. Visit `http://localhost:3001/admin` to access PayloadCMS admin
3. Create your first admin user

## Troubleshooting

### SSL Connection Issues

If you encounter SSL errors in production, ensure your `DATABASE_URI` includes SSL parameters:

```
postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?sslmode=require
```

### Connection Timeout

- Check your Supabase project is active
- Verify your IP is not blocked by Supabase
- Ensure your connection string is correct

### Migration Issues

- Run `pnpm payload:migrate:fresh` to reset migrations
- Check Supabase logs for any database errors

## Security Notes

- Never commit `.env.local` to version control
- Use strong, unique passwords for database access
- Regularly rotate your `PAYLOAD_SECRET`
- Enable Row Level Security (RLS) in Supabase if needed

## Performance Optimization

- Use connection pooling (already configured)
- Enable Supabase caching for better performance
- Monitor database usage in Supabase dashboard
