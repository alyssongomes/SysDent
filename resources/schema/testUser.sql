
insert into function (function) values ("ATENDENTE");
insert into function (function) values ("DENTISTA");
insert into function (function) values ("GERENTE");
insert into function (function) values ("PACIENTE");


insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("00000000000", "Peter Parker", "Rua da casa do aranha","5588999939495","Queens",00000000, 3,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("12345678900", "Otto Octavios", "Rua da casa do aranha","5588999394945","Queens",00000000, 2,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("66666666666", "Mary Jane Watson", "Rua da casa do aranha","5588997546355","Queens",00000000, 1,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("99999999999", "Gwen Stacy", "Rua da casa do aranha","5588995956787","Queens",00000000, 4,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("19999999991", "Miles Morales", "Rua dos bobos","5588995996788","Quixada",69000000, 4,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("11999999991", "Eddie Brock","Rua da cidade","5588999778877","Quixada",63900000, 4,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("11999999911", "Ben Reilly", "Rua B","5588999777777","Quixada",63900001, 4,1234);


insert into diagnostic (id, idPatient, idDentist, diagnostic, dvalue) values ("11999999911", "12345678900", "tá com os dentes podres", 700.00);
insert into diagnostic (id, idPatient, idDentist, diagnostic, dvalue) values ("11999999991", "12345678900","precisando fazer uma limpeza",500.00);
insert into diagnostic (id, idPatient, idDentist, diagnostic, dvalue) values ("99999999999", "12345678900", "tudo sussa",300.00);
insert into diagnostic (id, idPatient, idDentist, diagnostic, dvalue) values ("19999999991", "12345678900", "so sucesso", 200.00);
insert into diagnostic (id, idPatient, idDentist, diagnostic, schedule) values ("11999999911", "12345678900", "tá com os dentes podres", '2016-06-05');
insert into diagnostic (id, idPatient, idDentist, diagnostic, schedule) values ("11999999991", "12345678900","precisando fazer uma limpeza", '2016-06-05');
insert into diagnostic (id, idPatient, idDentist, diagnostic, schedule) values ("99999999999", "12345678900", "tudo sussa", '2016-06-15');
insert into diagnostic (id, idPatient, idDentist, diagnostic, schedule) values ("19999999991", "12345678900", "so sucesso", '2016-06-15');



insert into appointment (id, idPatient, idDentist, schedule, appointment) values ("99999999999", "12345678900", '2016-06-05', '12:12:31');
insert into appointment (id, idPatient, idDentist, schedule, appointment) values ("19999999991", "12345678900", '2016-06-05', '12:34:00');
insert into appointment (id, idPatient, idDentist, schedule, appointment) values ("11999999991", "12345678900", '2016-06-05', '12:30:00');
insert into appointment (id, idPatient, idDentist, schedule, appointment) values ("11999999911", "12345678900", '2016-06-05', '12:00:00');


insert into payment (pvalue, idDiagnostic, payday) values (99.80, 1, '2016-06-21');
insert into payment (pvalue, idDiagnostic, payday) values (100.80, 1, '2016-06-20');
insert into payment (pvalue, idDiagnostic, payday) values (50.00, 3, '2016-06-01');
insert into payment (pvalue, idDiagnostic, payday) values (40.00, 1, '2016-06-02');
