var mysql = require('mysql');

function ConnectionDatabase(){

  var _connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'dbClinicaOdonto'
  });

  this.connected = function(){
      _connection.connect()
      return _connection;
  };

}
