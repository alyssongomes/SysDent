function diagnosticDAO(){

  var connection = new ConnectionDatabase();

  this.listAll = function (callback) {
    var c = connection.connected();
    c.query('SELECT * FROM diagnostic',function(err, rows){// recebe o dado em json
      if (err){
        console.log("[ERROR] " + err.message);
        callback(null);
      }
      else
        callback(rows);
      c.end();
    });
  }

  this.save = function (diagnostic,callback){
    var c = connection.connected();
    c.query('INSERT INTO diagnostic SET ?',diagnostic, function(err, result){// recebe o dado em json
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
    c.query('DELETE FROM diagnostic WHERE cpf = ?',[cpf], function (err, result) {
        if (err){
          console.log("[ERROR] " + err.message);
          callback(false);
        }
        else
          callback(true);
        c.end();
      });
    }

  this.update = function (diagnostic,callback){
    var c = connection.connected();
    var u = [diagnostic.name,diagnostic.street,diagnostic.phone,diagnostic.district,diagnostic.password,diagnostic.zipcode,diagnostic.cpf];
    c.query('UPDATE diagnostic SET name = ?, street = ?, phone = ?, district = ?, password = ?, zipcode = ? WHERE cpf = ?',u,function (err, result) {
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
    c.query('SELECT * FROM diagnostic WHERE name like \'%'+name+'%\'', function(err, row) {
      if (err){
        console.log("[ERROR] " + err.message);
        callback(null);
      }
      else
        callback(row);
      c.end();
    });
  }

  this.findByPatient = function(cpf, senha,callback){
    var c = connection.connected();
    c.query('SELECT * from diagnostic WHERE cpf = \''+cpf+'\'AND password =\''+senha+'\'', function(err, row) {
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
