
insert into function (function) values ("ATENDENTE");
insert into function (function) values ("DENTISTA");
insert into function (function) values ("GERENTE");
insert into function (function) values ("PACIENTE");


insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("000.000.000-00", "Peter Parker", "Rua da casa do aranha","5588999939495","Queens",00000000, 3,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("123.456.789-00", "Otto Octavios", "Rua da casa do aranha","5588999394945","Queens",00000000, 2,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("666.666.666-66", "Mary Jane Watson", "Rua da casa do aranha","5588997546355","Queens",00000000, 1,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("999.999.999-99", "Gwen Stacy", "Rua da casa do aranha","5588995956787","Queens",00000000, 4,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("199.999.999-91", "Miles Morales", "Rua dos bobos","5588995996788","Quixada",69000000, 4,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("119.999.999-91", "Eddie Brock","Rua da cidade","5588999778877","Quixada",63900000, 4,1234);
insert into user (cpf, name,street, phone, district, zipcode,idFunction, password)   values("119.999.999-11", "Ben Reilly", "Rua B","5588999777777","Quixada",63900001, 4,1234);


insert into diagnostic (idPatient, idDentist, diagnostic, dvalue) values ("119.999.999-11", "123.456.789-00", "tá com os dentes podres", 700.00);
insert into diagnostic (idPatient, idDentist, diagnostic, dvalue) values ("119.999.999-91", "123.456.789-00","precisando fazer uma limpeza",500.00);
insert into diagnostic (idPatient, idDentist, diagnostic, dvalue) values ("999.999.999-99", "123.456.789-00", "tudo sussa",300.00);
insert into diagnostic (idPatient, idDentist, diagnostic, dvalue) values ("199.999.999-91", "123.456.789-00", "so sucesso", 200.00);
insert into diagnostic ( idPatient, idDentist, diagnostic, schedule) values ("119.999.999-11", "123.456.789-00", "tá com os dentes podres", '2016-06-05');
insert into diagnostic ( idPatient, idDentist, diagnostic, schedule) values ("119.999.999-91", "123.456.789-00","precisando fazer uma limpeza", '2016-06-05');
insert into diagnostic ( idPatient, idDentist, diagnostic, schedule) values ("999.999.999-99", "123.456.789-00", "tudo sussa", '2016-06-15');
insert into diagnostic ( idPatient, idDentist, diagnostic, schedule) values ("199.999.999-91", "123.456.789-00", "so sucesso", '2016-06-15');



insert into appointment ( idPatient, idDentist, schedule, appointment) values ("999.999.999-99", "123.456.789-00", '2016-06-05', '12:12:31');
insert into appointment ( idPatient, idDentist, schedule, appointment) values ("199.999.999-91", "123.456.789-00", '2016-06-05', '12:34:00');
insert into appointment ( idPatient, idDentist, schedule, appointment) values ("119.999.999-91", "123.456.789-00", '2016-06-05', '12:30:00');
insert into appointment ( idPatient, idDentist, schedule, appointment) values ("119.999.999-11", "123.456.789-00", '2016-06-05', '12:00:00');


insert into payment (pvalue, idDiagnostic, payday) values (99.80, 1, '2016-06-21');
insert into payment (pvalue, idDiagnostic, payday) values (100.80, 1, '2016-06-20');
insert into payment (pvalue, idDiagnostic, payday) values (50.00, 3, '2016-06-01');
insert into payment (pvalue, idDiagnostic, payday) values (40.00, 1, '2016-06-02');
