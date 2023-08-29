CREATE TABLE cliente (
    cpf varchar(14)not null primary key,
    nome varchar(100)not null, 
    endereco varchar(100) not null, 
    bairro varchar(100) not null,
    cidade varchar(100) not null,
    estado varchar(2) not null,
    telefone varchar(14) not null,
    email varchar(100) not null 
);