-- Gera��o de Modelo f�sico
-- Sql ANSI 2003 - brModelo.

CREATE TABLE function (
id int AUTO_INCREMENT,
function varchar(50),
PRIMARY KEY(id)
);

CREATE TABLE appointment (
id int AUTO_INCREMENT,
idPatient varchar(11),
idDentist varchar(11),
schedule date,
appointment time,
PRIMARY KEY(id)
);

CREATE TABLE diagnostic (
id int AUTO_INCREMENT,
idPatient varchar(11),
idDentist varchar(11),
diagnostic varchar(500),
dvalue double,
schedule date,
PRIMARY KEY(id)
);

CREATE TABLE payment (
id int AUTO_INCREMENT,
pvalue double,
idDiagnostic int,
payday date,
PRIMARY KEY(id),
FOREIGN KEY(idDiagnostic) REFERENCES diagnostic (id)
);

CREATE TABLE user (
cpf char(11) PRIMARY KEY,
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
ALTER TABLE payment ADD FOREIGN KEY(idDiagnostic) REFERENCES diagnostic (id);
