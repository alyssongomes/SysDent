var mysql = require('mysql');

function ConnectionDatabase(){

  var _connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'dbClinicaOdonto'
  });

  this.connected = function(){
      return _connection.connect();
  };

}
