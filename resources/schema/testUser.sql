
insert into function (function) values ("ATENDENTE");
insert into function (function) values ("DENTISTA");
insert into function (function) values ("GERENTE");
insert into function (function) values ("PACIENTE");


insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("00000000000", "Peter Parker", "5588999939495","Rua da casa do aranha","Queens",00000000, 3,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("12345678900", "Otto Octavios", "5588999394945","Rua da casa do aranha","Queens",00000000, 2,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("66666666666", "Mary Jane Watson", "5588997546355","Rua da casa do aranha","Queens",00000000, 1,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("99999999999", "Gwen Stacy", "5588995956787","Rua da casa do aranha","Queens",00000000, 4,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("19999999991", "Miles Morales", "5588995996788","Rua dos bobos","Quixada",69000000, 4,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("11999999991", "Eddie Brock", "5588999778877","Rua da cidade","Quixada",63900000, 4,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("11999999911", "Ben Reilly", "5588999777777","Rua B","Quixada",63900001, 4,1234);


insert into diagnostic (id, idPatient, idDentist, diagnostic) values ("11999999911", "12345678900", "tá com os dentes podres");
insert into diagnostic (id, idPatient, idDentist, diagnostic) values ("11999999991", "12345678900","precisando fazer uma limpeza");
insert into diagnostic (id, idPatient, idDentist, diagnostic) values ("99999999999", "12345678900", "tudo sussa");
insert into diagnostic (id, idPatient, idDentist, diagnostic) values ("19999999991", "12345678900", "so sucesso");



insert into appointment (id, idPatient, idDentist, schedule, appointment) values ("99999999999", "12345678900", '2016-06-05', '12:12:31');
insert into appointment (id, idPatient, idDentist, schedule, appointment) values ("19999999991", "12345678900", '2016-06-05', '12:34:00');
insert into appointment (id, idPatient, idDentist, schedule, appointment) values ("11999999991", "12345678900", '2016-06-05', '12:30:00');
insert into appointment (id, idPatient, idDentist, schedule, appointment) values ("11999999911", "12345678900", '2016-06-05', '12:00:00');


insert into payment (id, pValue, idPatient, payday) values (99.80, "11999999911", '2016-06-21');
insert into payment (id, pValue, idPatient, payday) values (100.80, "11999999991", '2016-06-20');
insert into payment (id, pValue, idPatient, payday) values (50.00, "99999999999", '2016-06-01');
insert into payment (id, pValue, idPatient, payday) values (40.00, "19999999991", '2016-06-02');
