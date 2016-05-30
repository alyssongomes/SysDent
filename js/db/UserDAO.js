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
  }

  this.deleteUser = function (cpf,callback){
    var c = connection.connected();
    c.query('DELETE FROM user WHERE cpf = ?',[cpf], function (err, result) {
        if (err){
          c.end();
          callback(false);
        }
        callback(true);
      });
    }

  this.updateUser = function (user,callback){
    var c = connection.connected();
    var u = [user.name,user.street,user.phone,user.district,user.password,user.zipcode,user.cpf];
    c.query('UPDATE user SET name = ?, street = ?, phone = ?, district = ?, password = ?, zipcode = ? WHERE cpf = ?',u,function (err, result) {
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
    });
  }

  this.findUserLogin = function(cpf, senha,callback){
    var c = connection.connected();
<<<<<<< HEAD
    c.query('SELECT * from user WHERE cpf = \''+cpf+'\'AND senha =\''+senha+'\'', function(err, row) {
      if (err){
        c.end();
        callback(null);
      }
      callback(row);
    });
  }

  return this;
=======
    c.query('SELECT * from user WHERE cpf = \''+cpf+'\'AND password =\''+senha+'\'', function(err, row) {
      if (err) throw err;
      callback(row)
    });
    c.end();
  };
>>>>>>> 4580a1950a8f24d07c0b07ea320e5b4c37881967
}
