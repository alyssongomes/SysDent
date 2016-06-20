var uDAO = new UserDAO();

function SaveUserController(){

  this.saveAttendant = function (name, cpf, password, street, number, district, zipcode, idFunction, callback){
    var u = new User(cpf, name,street, number,district,password,zipcode,idFunction);
    return uDAO.save(u,callback);
  };

  this.listAllAttendant = function(callback){
    return uDAO.listAll(callback);
  }

  this.deleteAttendant = function (listCpfAttendant,callback){
    if(listCpfAttendant.length === 0){
      callback(false);
      return false;
    }

    for (var cpf of listCpfAttendant) {
      uDAO.delete(cpf, function (result) {
        if (result === false) {
          callback(false);
        }
      })
    }
    callback(true);
  }

  this.updateAttendant = function (attendant, callback){
    return uDAO.update(attendant,callback);
  }

  this.findAttendant = function (name,callback){
    return uDAO.find(name,callback);
  }

}
