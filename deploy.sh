#!/bin/bash

# === CONFIGURATION ===
REMOTE_USER="u356222743"
REMOTE_HOST="217.21.66.232"
REMOTE_PATH="domains/sciss.org/public_html"
LOCAL_DIST="dist"
SSH_PORT=65002
SSH_KEY_PATH="$HOME/.ssh/hostinger_viswise"

# === DEPLOYMENT ===
echo "Deploying $LOCAL_DIST to $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH ..."
echo "Using SSH key: $SSH_KEY_PATH"
echo "Local dist folder exists: $(ls -la $LOCAL_DIST | wc -l) files"

# Test SSH connection first
echo "Testing SSH connection..."
ssh -i "$SSH_KEY_PATH" -p $SSH_PORT "$REMOTE_USER@$REMOTE_HOST" "echo 'SSH connection successful'"

# Sync everything except videos and images
echo "Starting rsync..."
rsync -avz --progress --itemize-changes -e "ssh -i $SSH_KEY_PATH -p $SSH_PORT" \
  --exclude='.DS_Store' \
  --exclude='videos/' \
  --exclude='images/' \
  "$LOCAL_DIST"/ "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/"

# Ask user if they want to sync videos
read -p "Do you want to sync videos folder? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Syncing videos..."
    rsync -avz --progress -e "ssh -i $SSH_KEY_PATH -p $SSH_PORT" \
      "$LOCAL_DIST/videos/" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/videos/"
fi

# Ask user if they want to sync images
read -p "Do you want to sync images folder? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Syncing images..."
    rsync -avz --progress -e "ssh -i $SSH_KEY_PATH -p $SSH_PORT" \
      "$LOCAL_DIST/images/" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/images/"
fi

echo "Deployment complete!"