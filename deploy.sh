sudo apt-get update
sudo apt-get install curl -y
ls
find dist/ -type f -exec curl -u $FTP_USER:$FTP_PASS -T {} ftp://ftp.epizy.com/htdocs/{} \;
# wput dist/ ftp://$FTP_USER:$FTP_PASS@ftp.epizy.com/htdocs/