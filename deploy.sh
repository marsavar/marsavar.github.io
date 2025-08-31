#!/usr/bin/env sh

set -e

npm run build

REMOTE_HOST="marsavar"
REMOTE_DIR="/var/www/home"
LOCAL_PACKAGE_PATH="dist/"

echo "➡️ Copying $PACKAGE_NAME to remote host..."
scp -r "$LOCAL_PACKAGE_PATH"* "$REMOTE_HOST:$REMOTE_DIR/"
