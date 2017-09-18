sudo apt-get update
sudo apt-get install curl -y
find dist/ -exec curl -T {} ftp://ftp.epizy.com/htdocs -user $FTP_USER:$FTP_PASS \;