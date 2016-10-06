#!/bin/bash

# Backup first
sudo cp -R /usr/share/nginx/html/* ~/backup/
# Move the static to nginx root webserver
sudo cp -R _site/* /usr/share/nginx/html/

echo "The sites sucessfully updated"
