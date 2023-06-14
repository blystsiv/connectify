#!/bin/bash
echo "Starting frontend..."
cd ../client/ && npm install && npm start && cd ../scripts
echo "Frontend has been started"

echo "Starting backend..."
cd ../server/ && npm install && node server.js
echo "Backend has been started"