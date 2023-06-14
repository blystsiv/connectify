#!/bin/bash
echo "Starting frontend..."
cd client/ && npm install && npm start && cd ../
echo "Frontend has been started"

echo "Starting backend..."
cd server/ && npm install && node server.js && cd ../
echo "Backend has been started"