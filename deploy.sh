sudo apt-get update
sudo apt-get install curl -y
find dist/ -exec curl -T {} ftp://$FTP_USER:$FTP_PASS@ftp.epizy.com/htdocs