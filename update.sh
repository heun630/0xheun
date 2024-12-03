#!/bin/bash

cd /home/0xheun

git fetch --all
git reset --hard origin/main

yarn install

pm2 restart "0xheun blog"
