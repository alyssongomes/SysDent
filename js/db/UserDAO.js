function UserDAO(){

  var connection = new ConnectionDatabase();

  var saveUser = function (user,callback){
    var c = connection.connected();
    c.query('INSERT INTO user SET ?',user, function(err, result){// recebe o dado em json
      if (err) throw err;
      callback(result);
    });
    c.end();
  };

  var deleteUser = function (cpf,callback)
  {
    var c = connection.connected();
    c.query('DELETE FROM user WHERE cpf = ?',[cpf], function (err, result) {
        if (err) throw err;
        console.log(result);
        callback(result)
      });
    c.end();
  };

  var updateUser = function (user,callback)
  {
    var c = connection.connected();
    c.query('UPDATE user SET nome = ?, street = ?, number = ?, district = ?, password = ?, zipcode = ? WHERE cpf = ?',user,function (err, result) {
        if (err) throw err;
        console.log(result);
        callback(result);
      });
    c.end();
  };

  var findUser = function(name, callback){
    var c = connection.connected();
    c.query('SELECT * from user WHERE name = %'+name+'%', function(err, row) {
      if (err) throw err;
      callback(row);
    });
    c.end();
  };

  var findUserLogin = function(cpf, senha, callback)
  {
    var c = connection.connected();
    c.query('SELECT * from user WHERE cpf = \''+cpf+'\'AND senha =\''+senha+'\'', function(err, row) {
      if (err) throw err;
      callback(row)
    });
    c.end();
  };

}
