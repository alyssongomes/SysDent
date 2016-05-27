var uDAO = new UserDAO();
var Sync = require('sync');

function SaveUserController(){

  this.saveAttendant = function (name, cpf, password, street, number, district, zipcode, message,m){
    var u = new User(cpf, name,street, number,district,password,zipcode,2);
    //console.log(u);
    Sync(function () {
      console.log("Tá no controller");
      return uDAO.saveUser.sync(null,u);
    });
  };

  this.listAllAttendant = function(){
    //return uDAO.listAllUsers();
    var users = [
      new User(1, "A","S", 1,"D","123",63900000,2),
      new User(2, "B","S", 1,"D","123",63900000,2),
      new User(3, "C","S", 1,"D","123",63900000,2)];

    return users;
  }

  this.deleteAttendant = function (listCpfAttendant){
    if(listCpfAttendant.length === 0) return false;
    /*for (var cpf of listCpfAttendant) {
      if (uDAO.deleteUser(cpf) === false) {
        return false;
      }
    }*/
    return true;
  }

  this.updateAttendant = function (attendant){
    //return uDAO.updateUser(attendant);
    return true;
  }

  this.findAttendant = function (name){
    //return uDAO.findUser(name);
    var user = new User(061, "Alysson Gomes","Tabelião Enéias", 1,"centro","123",63900000,2);
    return user;
  }

}
