function UserDAO(){

  var connection = new ConnectionDatabase();

  this.listAllUsers = function (callback) {
    var c = connection.connected();
    c.query('SELECT * FROM user',function(err, rows){// recebe o dado em json
      if (err){
        c.end();
        callback(null);
      }
      callback(rows);
    });
  }

  this.saveUser = function (user,callback){
    var c = connection.connected();
    c.query('INSERT INTO user SET ?',user, function(err, result){// recebe o dado em json
      if (err != null){
        c.end();
        callback(false);
      }
      callback(true);
    });
  };

  this.deleteUser = function (cpf,callback){
    var c = connection.connected();
    c.query('DELETE FROM user WHERE cpf = ?',[cpf], function (err, result) {
        if (err){
          c.end();
          callback(false);
        }
        callback(true);
      });
  };

  this.updateUser = function (user,callback){
    var c = connection.connected();
    var u = [user.name,user.street,user.number,user.district,user.password,user.zipcode,user.cpf];
    c.query('UPDATE user SET name = ?, street = ?, number = ?, district = ?, password = ?, zipcode = ? WHERE cpf = ?',u,function (err, result) {
      if (err){
        c.end();
        callback(false);
      }
      callback(true);
    });
  };

  this.findUser = function(name,callback){
    var c = connection.connected();
    c.query('SELECT * FROM user WHERE name like \'%'+name+'%\'', function(err, row) {
      if (err){
        c.end();
        callback(null);
      }
      console.dir(row);
      callback(row);
    });
  };

  this.findUserLogin = function(cpf, senha,callback){
    var c = connection.connected();
    c.query('SELECT * from user WHERE cpf = \''+cpf+'\'AND senha =\''+senha+'\'', function(err, row) {
      if (err){
        c.end();
        callback(null);
      }
      callback(row);
    });
  };

}

var uDAO = new UserDAO();
uDAO.findUserLogin("9000","allan",function(result){
  console.log(result);
});
