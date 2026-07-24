use jogo_da_velha;
 
create table usuarios (
    id int primary key auto_increment,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    senha varchar(255) not null,
    imagem varchar(255) default null,
    created_at timestamp default current_timestamp
);