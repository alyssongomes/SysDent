function DiagnosticDAO(){

  this.findHistoricCpf = function(cpf,callback){
    var con = new ConnectionDatabase();
    var c = con.connected();
    c.query('SELECT id, name, (select name from user where cpf = d.idDentist) as dentist, diagnostic, schedule FROM diagnostic as d, user WHERE cpf = idPatient AND idPatient = ?', cpf, function(err, rows) {
      if (err)
        callback(null);
      else
        callback(rows);
      c.end();
    });
  }

  this.registerDiagnostic = function(diagnostic, callback){
    var con = new ConnectionDatabase();
    var c = con.connected();
    c.query('INSERT INTO diagnostic SET ?', diagnostic,function(err, rows) {
      if (err)
        callback(false);
      else
        callback(true);
      c.end();
    });
  }

  this.listDetailsDiagnostic = function(idDiagnostic,callback){
    var con = new ConnectionDatabase();
    var c = con.connected();
    c.query('SELECT * FROM diagnostic WHERE id = ?',idDiagnostic, function(err, rows) {
      if (err)
        callback(null);
      else
        callback(rows);
      c.end();
    });
  }

}
