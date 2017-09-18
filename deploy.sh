sudo apt-get update
sudo apt-get install curl -y
ls
find dist/ -type f -exec curl -u $FTP_USER:$FTP_PASS --ftp-create-dirs -T {} ftp://192.168.1.158/htdocs/{} \;