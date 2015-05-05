#!/usr/bin/env bash

# "localize" sources.list
sed 's/http:\/\/archive/http:\/\/ua\.archive/' /etc/apt/sources.list | sudo tee /etc/apt/sources.list

apt-get update
apt-get install -y nginx
service nginx stop
apt-get install -y git apache2 php5 libapache2-mod-php5 nodejs nodejs-legacy mysql-server php5-mysqlnd

update-rc.d nginx disable
update-rc.d apache2 disable

if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant/api /var/www
fi
if ! [ -L /usr/share/nginx/html ]; then
  rm -rf /usr/share/nginx/html
  ln -fs /vagrant/api /usr/share/nginx/html
fi

# /var/www/public instead of /var/www/html
sed 's/\/var\/www\/html/\/var\/www\/public/' /etc/apache2/sites-enabled/000-default.conf | sudo tee /etc/apache2/sites-enabled/000-default.conf
#mkdir -p /vagrant/public

a2enmod rewrite
a2enmod headers

update-rc.d apache2 enable

service apache2 restart
