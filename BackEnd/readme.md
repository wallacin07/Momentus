Comando para criar usuario e banco no Mysql

CREATE USER 'juan'@'localhost' IDENTIFIED BY 'juan';
GRANT ALL PRIVILEGES ON * . * TO 'juan'@'localhost';
create database juan;