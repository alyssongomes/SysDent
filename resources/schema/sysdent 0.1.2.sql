-- Gera��o de Modelo f�sico
-- Sql ANSI 2003 - brModelo.

CREATE TABLE function (
id int AUTO_INCREMENT,
function varchar(50)
<<<<<<< HEAD
PRIMARY KEY(id)
)
=======
);
>>>>>>> 756861715f1ec38cbdfcd558c951951c06d8bc4d

CREATE TABLE appointment (
id int PRIMARY KEY,
idPatient int,
idDentist int,
schedule date,
appointment time
);

CREATE TABLE diagnostic (
id int PRIMARY KEY,
idPatient int,
idDentist int,
diagnostic varchar(500)
);

CREATE TABLE payment (
id int PRIMARY KEY,
pValue double,
idPatient int,
payday date
);

CREATE TABLE user (
cpf int PRIMARY KEY,
name varchar(50),
street varchar(50),
phone varchar(50),
district varchar(50),
zipcode int,
idFunction int,
password varchar(50),
FOREIGN KEY(idFunction) REFERENCES function (id)
);

ALTER TABLE appointment ADD FOREIGN KEY(idPatient) REFERENCES user (cpf);
ALTER TABLE appointment ADD FOREIGN KEY(idDentist) REFERENCES user (cpf);
ALTER TABLE diagnostic ADD FOREIGN KEY(idPatient) REFERENCES user (cpf);
ALTER TABLE diagnostic ADD FOREIGN KEY(idDentist) REFERENCES user (cpf);
ALTER TABLE payment ADD FOREIGN KEY(idPatient) REFERENCES user (cpf);
