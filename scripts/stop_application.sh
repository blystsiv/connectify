#!/bin/bash
if nc -z localhost 5002 >/dev/null; then
    echo "Application (backend) is running."
    kill $(lsof -t -i:5002)
else
    echo "Application (backend) is not running."
fi

if nc -z localhost 3000 >/dev/null; then
    echo "Application (frontend) is running."
    kill $(lsof -t -i:3000)
else
    echo "Application (frontend) is not running."
fi