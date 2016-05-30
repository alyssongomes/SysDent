/*
  1 - ADMINISTRADOR
  2 - ATENDENTE
  3 - DENTISTA
  4 - PACIENTE
 */
function User(cpf, name, street, phone, district, password, zipcode,idFunction){

  this.cpf = cpf;
  this.name = nome;
  this.street = street;
  this.phone = phone;
  this.district = district;
  this.password = password;
  this.zipcode = zipcode;
  this.idFunction = idFunction;

  return {cpf, name, street, phone, district, password,zipcode,idFunction};
}
