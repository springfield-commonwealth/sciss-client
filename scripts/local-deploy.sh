#!/bin/bash

# Local Deployment Script for SCISS Client
# This script can be used to deploy manually if GitHub Actions fails

set -e

echo "🚀 Starting local deployment to Hostinger..."

# Check if required environment variables are set
if [ -z "$HOSTINGER_USER" ] || [ -z "$HOSTINGER_HOST" ] || [ -z "$HOSTINGER_PATH" ] || [ -z "$HOSTINGER_SSH_PORT" ]; then
    echo "❌ Error: Required environment variables not set!"
    echo "Please set the following environment variables:"
    echo "  - HOSTINGER_USER"
    echo "  - HOSTINGER_HOST" 
    echo "  - HOSTINGER_PATH"
    echo "  - HOSTINGER_SSH_PORT"
    echo ""
    echo "Example:"
    echo "  export HOSTINGER_USER=your_username"
    echo "  export HOSTINGER_HOST=your_host.com"
    echo "  export HOSTINGER_PATH=/path/to/your/site"
    echo "  export HOSTINGER_SSH_PORT=22"
    exit 1
fi

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist folder not found!"
    echo "Please run 'pnpm run deploy:prod' first to build the application."
    exit 1
fi

echo "📦 Building application..."
pnpm run deploy:prod

echo "🔐 Testing SSH connection..."
ssh -p $HOSTINGER_SSH_PORT -o ConnectTimeout=10 -o BatchMode=yes -o StrictHostKeyChecking=no $HOSTINGER_USER@$HOSTINGER_HOST "echo 'SSH connection successful'" || {
    echo "❌ SSH connection failed!"
    echo "Please check your SSH key and connection details."
    exit 1
}

echo "📤 Deploying files to Hostinger..."
rsync -avz --progress --itemize-changes \
    -e "ssh -p $HOSTINGER_SSH_PORT -o ConnectTimeout=10 -o StrictHostKeyChecking=no" \
    --exclude='.DS_Store' \
    --exclude='videos/' \
    --exclude='images/' \
    dist/ "$HOSTINGER_USER@$HOSTINGER_HOST:$HOSTINGER_PATH/"

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should be live at: https://sciss.org"
