#!/bin/bash
echo "Starting frontend..."
cd /tmp/client && npm install
cd /tmp/client && pm2 start npm --name "my-app" -- start
echo "Frontend has been started"

echo "Starting backend..."
cd /tmp/server && npm install
cd /tmp/server && node server.js
echo "Backend has been started"