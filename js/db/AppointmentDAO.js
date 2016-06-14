function AppointmentDAO(){

  this.listAllAppointments = function (callback) {
    var con = new ConnectionDatabase();
    var c = con.connected();
    c.query('SELECT id, name, (SELECT name FROM user WHERE cpf = a.idDentist) AS nameDentist,schedule, appointment from user as u,appointment as a where idPatient = cpf',function(err, rows){
      if (err){
        c.end();
        callback(null);
      }
      callback(rows);
    });
  }

  this.findUserCpf = function(cpf,callback){
    var con = new ConnectionDatabase();
    var c = con.connected();
    c.query('SELECT * FROM user WHERE cpf = \''+cpf+'\'', function(err, row) {
      if (err){
        c.end();
        callback(null);
      }
      //console.log(row);
      callback(row);
      c.end();
    });
  }

  this.listAllDentists = function (callback) {
    var con = new ConnectionDatabase();
    var c = con.connected();
    c.query('SELECT * FROM user WHERE idFunction = 2 ',function(err, rows){
      if (err){
        c.end();
        callback(null);
      }
      callback(rows);
      c.end();
    });
  }

  this.saveAppointment = function (appointment,callback){
    var con = new ConnectionDatabase();
    var c = con.connected();
    c.query('INSERT INTO appointment SET ?',appointment, function(err, result){
      if (err != null){
        c.end();
        callback(false);
      }
      c.end();
      callback(true);
    });
  }

}
