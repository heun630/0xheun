#!/bin/bash

cd /home/0xheun

# 최신 코드 가져오기 (git pull 사용)
git pull origin main

# 모든 파일에 실행 권한 추가
chmod -R +x /home/0xheun

# Yarn 캐시 정리
yarn cache clean

# 종속성 설치
yarn install
yarn build

# PM2 프로세스 재시작
pm2 delete "0xheun blog"
pm2 start ecosystem.config.js