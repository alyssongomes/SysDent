-- Gera��o de Modelo f�sico
-- Sql ANSI 2003 - brModelo.

CREATE TABLE user (
cpf int PRIMARY KEY,
name varchar(50),
street varchar(50),
number varchar(50),
district varchar(50),
password varchar(50),
zipcode int,
idRole int
)

CREATE TABLE role (
id int PRIMARY KEY,
role varchar(50)
)

CREATE TABLE appointment (
id int PRIMARY KEY,
idPatient int,
idDentist int,
date date,
time time
)

CREATE TABLE diagnostic (
id int PRIMARY KEY,
idPatient int,
idDentist int,
diagnostic varchar(500)
)

CREATE TABLE user (
cpf int PRIMARY KEY,
name varchar(50),
street varchar(50),
number varchar(50),
district varchar(50),
zipcode int,
idRole int,
password varchar(50),
FOREIGN KEY(idRole) REFERENCES role (id)
)

CREATE TABLE payment (
id int PRIMARY KEY,
value double,
idPatient int,
date date,
FOREIGN KEY(idPatient) REFERENCES user (cpf)
)

ALTER TABLE appointment ADD FOREIGN KEY(idPatient) REFERENCES user (cpf)
ALTER TABLE appointment ADD FOREIGN KEY(idDentist) REFERENCES user (cpf)
ALTER TABLE diagnostic ADD FOREIGN KEY(idPatient) REFERENCES user (cpf)
ALTER TABLE diagnostic ADD FOREIGN KEY(idDentist) REFERENCES user (cpf)
