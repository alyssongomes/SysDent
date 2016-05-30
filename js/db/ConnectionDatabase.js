var mysql = require('mysql');

function ConnectionDatabase(){

  this.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'dbClinicaOdonto'
  });

  this.connected = function(){
    this.connection.connect();
    return this.connection;
  };

}
