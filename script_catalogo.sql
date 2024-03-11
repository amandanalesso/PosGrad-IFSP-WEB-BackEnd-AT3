-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS catalogo_albuns;

-- Usar o banco de dados criado
USE catalogo_albuns;

-- Criar tabela artists
CREATE TABLE IF NOT EXISTS artists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255)
);

-- Criar tabela albuns
CREATE TABLE IF NOT EXISTS albums (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    ano INT,
    artist_id INT,
    compositor VARCHAR(255),
    produtor VARCHAR(255),
    FOREIGN KEY (artist_id) REFERENCES artists(id)
);

-- Criar tabela genres
CREATE TABLE IF NOT EXISTS genres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

-- Criar tabela com informações sobre as faixas
CREATE TABLE IF NOT EXISTS tracks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    album_id INT,
    title VARCHAR(255),
    duration TIME,
    FOREIGN KEY (album_id) REFERENCES albums(id)
);

-- Criar tabela labels
CREATE TABLE IF NOT EXISTS labels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

-- Conceder todas as permissões ao usuário sobre o banco de dados
GRANT ALL PRIVILEGES ON catalogo_albuns.* TO 'amanda'@'localhost';

-- Aplicar as alterações de permissões
FLUSH PRIVILEGES;

-- Inserir artistas
INSERT INTO artists (nome) VALUES ('Birdy'), ('Dinosaur jr'), ('Taylor Swift'), ('The Cure');

-- Obter os IDs dos artistas inseridos
SET @birdy_id = LAST_INSERT_ID();
SET @dinosaur_jr_id = LAST_INSERT_ID();
SET @taylor_swift_id = LAST_INSERT_ID();
SET @the_cure_id = LAST_INSERT_ID();

-- Inserir álbuns
INSERT INTO albums (nome, ano, artist_id, compositor, produtor) VALUES
('reputation', 2017, (SELECT id FROM artists WHERE nome = 'Taylor Swift'), 'Taylor Swift', 'Jack Antonoff'),
('folklore', 2020, (SELECT id FROM artists WHERE nome = 'Taylor Swift'), 'Taylor Swift', 'Jack Antonoff'),
('evermore', 2020, (SELECT id FROM artists WHERE nome = 'Taylor Swift'), 'Taylor Swift', 'Jack Antonoff'),
('Disintegration', 1989, (SELECT id FROM artists WHERE nome = 'The Cure'), 'Robert Smith', 'David M. Allen, Robert Smith'),
('Wish', 1992, (SELECT id FROM artists WHERE nome = 'The Cure'), 'Robert Smith', 'David M. Allen, Robert Smith'),
('Bloodflowers', 2000, (SELECT id FROM artists WHERE nome = 'The Cure'), 'Robert Smith', 'Ross Robinson, Robert Smith');
