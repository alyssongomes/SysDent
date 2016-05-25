function UserDAO(){

  var connection = new ConnectionDatabase();

  var saveUser = function (user){
    var c = connection.connected();
    c.query('INSERT INTO user SET ?',user, function(err, result){// recebe o dado em json
      if (err) throw err;
      console.log(result);
    });
    c.end();
  };

  var deleteUser = function (cpf){
    var c = connection.connected();
    c.query('DELETE FROM user WHERE cpf = ?',[cpf], function (err, result) {
        if (err) throw err;
        console.log(result);
      });
    c.end();
  };

  var updateUser = function (user){
    var c = connection.connected();
    c.query('UPDATE user SET nome = ?, street = ?, number = ?, district = ?, password = ?, zipcode = ? WHERE cpf = ?',user,function (err, result) {
        if (err) throw err;
        console.log(result);
      });
    c.end();
  };

  var findUser = function(name){
    var c = connection.connected();
    c.query('SELECT * from WHERE name = %'+name+'%', function(err, row, fields) {
      if (err) throw err;
      return row;//retorna em json
    });
    c.end();
  };

  var listUsers = function(){
    var c = connection.connected();
    c.query('SELECT * from user', function(err, rows, fields) {
      if (err) throw err;
      return rows;//retorna em json
    });
    c.end();
  };

}
