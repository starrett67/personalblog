sudo apt-get update
sudo apt-get install curl -y
cd dist/
ls
find . -type f -exec curl -u $FTP_USER:$FTP_PASS -T {} ftp://ftp.epizy.com/htdocs/ \;
cd ..