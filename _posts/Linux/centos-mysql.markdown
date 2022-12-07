## 安装
### 获取文件
wget https://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm

### 安装
yum -y install mysql57-community-release-el7-10.noarch.rpm

### 安装服务
yum -y install mysql-community-server

密钥问题
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022 

### 服务操作
systemctl start mysqld.service
systemctl status mysqld.service

查密码
grep "password" /var/log/mysqld.log

登录
mysql -uroot -p

## 操作

- create database [if not exist] <name>

## navicat premium

