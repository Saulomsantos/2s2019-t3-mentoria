-- CRIAR BASE DE DADOS
CREATE DATABASE Gufos;

-- COLOCAR O BANCO DE DADOS EM USO
USE Gufos;

-- TABELA DE CATEGORIAS DOS EVENTOS
CREATE TABLE  Categorias 
(  
    IdCategoria     INT PRIMARY KEY NOT NULL IDENTITY
    ,Nome           VARCHAR(200) NOT NULL UNIQUE
);

-- TABELA DE USUARIOS
CREATE TABLE Usuarios
(
    IdUsuario     INT PRIMARY KEY NOT NULL IDENTITY
    ,Nome         VARCHAR(250) NOT NULL
    ,Email        VARCHAR(250) UNIQUE NOT NULL
    ,Senha        VARCHAR(250) NOT NULL
    ,Permissao    VARCHAR(200) NOT NULL
);

-- TABELA DE EVENTOS
CREATE TABLE Eventos 
(
    IdEvento        INT PRIMARY KEY NOT NULL IDENTITY
    ,Titulo         VARCHAR(200) NOT NULL
    ,Descricao      TEXT
    ,DataEvento     DATETIME NOT NULL
    ,Ativo          BIT NOT NULL DEFAULT(1)
    ,Localizacao    VARCHAR(250) NULL
    ,IdCategoria    INT FOREIGN KEY REFERENCES Categorias (IdCategoria)
);

-- TABELA DE PRESENCAS
CREATE TABLE Presencas
(
    IdUsuario   INT FOREIGN KEY REFERENCES Usuarios (IdUsuario)
    ,IdEvento   INT FOREIGN KEY REFERENCES Eventos (IdEvento)
);