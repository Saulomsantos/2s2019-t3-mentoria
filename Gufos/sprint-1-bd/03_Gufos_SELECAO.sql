-- Colocando o banco de dados em uso
USE Gufos;

-- Selecionando os itens separadamente de cada tabela
SELECT * FROM Categorias;
SELECT * FROM Eventos;
SELECT * FROM Usuarios;
SELECT * FROM Presencas;

-- Selecionando os eventos e suas respectivas categorias
SELECT E.*, C.* FROM Eventos E INNER JOIN Categorias C ON E.IdCategoria = C.IdCategoria;

-- Selecionando os usuários, os eventos e as presenças
SELECT P.*, U.*, E.* FROM Presencas P INNER JOIN Usuarios U ON P.IdUsuario = U.IdUsuario INNER JOIN Eventos E ON P.IdEvento = E.IdEvento;

-- Selecionando as presencas, os usuarios, quais eventos eles irao participar e quais as respectivas categorias
SELECT P.*, U.*, E.*, C.* FROM Presencas P INNER JOIN Usuarios U ON P.IdUsuario = U.IdUsuario INNER JOIN Eventos E ON P.IdEvento = E.IdEvento INNER JOIN Categorias C ON E.IdCategoria = C.IdCategoria;