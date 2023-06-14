#!/bin/bash
echo "Starting frontend..."
cd /tmp/client && npm install
cd /tmp/client && npm start
echo "Frontend has been started"

echo "Starting backend..."
cd /tmp/server && npm install
cd /tmp/server && node server.js
echo "Backend has been started"