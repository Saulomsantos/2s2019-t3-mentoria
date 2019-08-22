USE Gufos;

-- inserir na tabela de usuários
INSERT INTO Usuarios (Nome, Email, Senha, Permissao) VALUES ('Administrador', 'admin@admin.com', '123456', 'ADMINISTRADOR');

INSERT INTO Usuarios (Nome, Email, Senha, Permissao) VALUES ('A', 'a@aluno.com', '123456', 'ALUNO'), ('B', 'b@aluno.com', '123456', 'ALUNO');

-- inserir na tabela de categorias
INSERT INTO Categorias VALUES ('Jogos'), ('Meetup'), ('Futebol');

-- inserir na tabela de eventos
INSERT INTO Eventos (Titulo, Descricao, DataEvento, Ativo, Localizacao, IdCategoria) VALUES ('Titulo A', 'Descricao A', GETDATE(), 1, 'Alameda Barão de Limeira, 539', 1);
INSERT INTO Eventos (Titulo, Descricao, DataEvento, Ativo, Localizacao, IdCategoria) VALUES ('Titulo B', 'Campeonato de Futebol', GETDATE(), 1, 'Alameda Barão de Limeira, 539', 3);

-- inserir na tabela de presenças
INSERT INTO Presencas (IdUsuario, IdEvento) VALUES (2, 1), (2, 2), (3, 1);