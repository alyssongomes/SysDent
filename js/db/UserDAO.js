var Sync = require('sync');

function UserDAO(){

  var connection = new ConnectionDatabase();

  this.listAllUsers = function () {
    var c = connection.connected();
    c.query('SELECT * FROM user',function(err, rows){// recebe o dado em json
      if (err){
        throw err;
        c.end();
        return null;
      }else{
        return rows;
      }
    });
  }

  this.saveUser = function (user,callback){
    //var c = connection.connected();
    connection.connected().query('INSERT INTO user SET ?',user, function(err, result){// recebe o dado em json
      console.log("Tá no DAO");
      if (err){
        /*console.log("Passou no err");
        console.log(err);
        c.end();
        return false;*/
        callback(null,false);
      }else{
        /*console.log("não Passou no err");
        console.log(result);
        return true;*/
        callback(null,true);
      }
    });
  };

  this.deleteUser = function (cpf){
    var c = connection.connected();
    c.query('DELETE FROM user WHERE cpf = ?',[cpf], function (err, result) {
        if (err){
          c.end();
          throw err;
          return false;
        }else{
          console.log(result);
          return true;
        }
      });
  };

  this.updateUser = function (user){
    var c = connection.connected();
    c.query('UPDATE user SET nome = ?, street = ?, number = ?, district = ?, password = ?, zipcode = ? WHERE cpf = ?',user,function (err, result) {
      if (err){
        c.end();
        throw err;
        return false;
      }else{
        console.log(result);
        return true;
      }
    });
  };

  this.findUser = function(name){
    var c = connection.connected();
    c.query('SELECT * FROM user WHERE name like \'%'+name+'%\'', function(err, row, fields) {
      if (err){
        throw err;
        c.end();
        return null;
      }else{
        return row;
      }
    });
  };

  this.findUserLogin = function(cpf, senha){
    var c = connection.connected();
    c.query('SELECT * from user WHERE cpf = \''+cpf+'\'AND senha =\''+senha+'\'', function(err, row, fields) {
      if (err){
        throw err;
        c.end();
        return null;
      }else{
        return row;
      }
    });
  };

}
