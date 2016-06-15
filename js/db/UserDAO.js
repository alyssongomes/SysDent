function UserDAO(){

  var connection = new ConnectionDatabase();

  this.listAll = function (callback) {
    var c = connection.connected();
    c.query('SELECT * FROM user',function(err, rows){// recebe o dado em json
      if (err){
        console.log("[ERROR] " + err.message);
        callback(null);
      }
      else
        callback(rows);
      c.end();
    });
  }

  this.save = function (user,callback){
    var c = connection.connected();
    c.query('INSERT INTO user SET ?',user, function(err, result){// recebe o dado em json
      if (err){
        console.log("[ERROR] " + err.message);
        callback(false);
      }
      else
        callback(true);
      c.end();
    });
  }

  this.delete = function (cpf,callback){
    var c = connection.connected();
    c.query('DELETE FROM user WHERE cpf = ?',[cpf], function (err, result) {
        if (err){
          console.log("[ERROR] " + err.message);
          callback(false);
        }
        else
          callback(true);
        c.end();
      });
    }

  this.update = function (user,callback){
    var c = connection.connected();
    var u = [user.name,user.street,user.phone,user.district,user.password,user.zipcode,user.cpf];
    c.query('UPDATE user SET name = ?, street = ?, phone = ?, district = ?, password = ?, zipcode = ? WHERE cpf = ?',u,function (err, result) {
      if (err){
        console.log("[ERROR] " + err.message);
        callback(false);
      }
      callback(true);
      c.end();
    });
  };

  this.find = function(name,callback){
    var c = connection.connected();
    c.query('SELECT * FROM user WHERE name like \'%'+name+'%\'', function(err, row) {
      if (err){
        console.log("[ERROR] " + err.message);
        callback(null);
      }
      else
        callback(row);
      c.end();
    });
  }

  this.findByLogin = function(cpf, senha,callback){
    var c = connection.connected();
    c.query('SELECT * from user WHERE cpf = \''+cpf+'\'AND password =\''+senha+'\'', function(err, row) {
      if (err){
        console.log("[ERROR] " + err.message);
        callback(null);
      }
      else
        callback(row);
      c.end();
    });
  };
}
