#!/bin/bash

cd /home/0xheun

git fetch --all
git reset --hard origin/main

chmod -R +x /home/0xheun

yarn install

pm2 restart "0xheun blog"
