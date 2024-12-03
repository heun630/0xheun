#!/bin/bash
set -e  # 에러 발생 시 스크립트 종료
trap 'echo "Error occurred at line $LINENO"; exit 1' ERR

cd /home/0xheun

echo "Resetting and pulling latest code..."
git reset --hard
git pull origin main

echo "Adding execution permissions to all files..."
chmod -R +x /home/0xheun

echo "Cleaning Yarn cache..."
yarn cache clean

echo "Installing dependencies..."
yarn install --verbose

echo "Building project..."
yarn build --verbose

echo "Restarting PM2 process..."
pm2 delete "0xheun blog"
pm2 start ecosystem.config.js

echo "Deployment completed successfully."