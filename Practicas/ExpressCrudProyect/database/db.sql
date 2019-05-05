CREATE DATABASE db_links;

USE db_links;

--Crear usuario de esqumea
CREATE USER "dba_links"@"localhost" IDENTIFIED BY "pass123";

--Asignar privilegios usuario de esquema
GRANT ALL ON db_links.* TO dba_links@localhost;

-- USERS TABLE
CREATE TABLE users (
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT  NULL
);

ALTER TABLE users
ADD PRIMARY KEY (id);

ALTER TABLE users
MODIFY id  INT (11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESC users;

--LINKS TABLE
CREATE TABLE links (
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR (255) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE links
MODIFY user_id INT(11) NOT NULL;

ALTER TABLE links
ADD PRIMARY KEY (id);

ALTER TABLE links
MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

--Crear usuario de conexion
CREATE USER "usco_links"@"localhost" IDENTIFIED BY "pass123";

--Asignar privilegios al usuario de conexion
GRANT SELECT ON db_links.* TO usco_links@localhost;
GRANT UPDATE ON db_links.* TO usco_links@localhost;
GRANT DELETE ON db_links.* TO usco_links@localhost;
GRANT INSERT ON db_links.* TO usco_links@localhost;
