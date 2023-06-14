#!/bin/bash
echo "Stopping backend..."
kill $(lsof -t -i:5002)
echo "Stopping frontend..."
kill $(lsof -t -i:3000)