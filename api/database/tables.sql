use jogo_da_velha;
 
create table usuarios (
    id int primary key auto_increment,
    email varchar(100) not null unique,
    senha varchar(255) not null
);