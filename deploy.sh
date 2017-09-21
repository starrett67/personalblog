#!/bin/bash

sudo apt-get update
sudo apt-get install curl -y

#first clean up ftp directory
for f in `curl -u $FTP_USER:$FTP_PASS ftp://ftp.epizy.com/htdocs/`; do

  # Delete each file individually
  curl -u $FTP_USER:$FTP_PASS ftp://ftp.epizy.com/ -Q "DELE htdocs/$f"
done

cd dist/
ls
find . -type f -exec curl -u $FTP_USER:$FTP_PASS -T {} ftp://ftp.epizy.com/htdocs/ \;
cd ..