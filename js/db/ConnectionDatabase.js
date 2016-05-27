var mysql = require('mysql');
var Sync = require('sync');

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

/*Sync(function(){
  var result = query.sync(null);
  console.dir(result);
})*/
/*
function query(){
  c.query('SELECT * FROM user',function(err, rows){
    if (err){
      throw err;
      c.end();
      return null;
    }else{
      //console.log(rows);
      return rows;
    }
  })
}*/
/*
function asyncFunction(a,b,callback) {
  var c = new ConnectionDatabase().connected();
  c.query('SELECT * FROM user',function(err, rows){
    if (err){
      throw err;
      c.end();
      return null;
    }else{
      //console.log(rows);
      return rows;
    }
  });
}

// Run in a fiber
Sync(function(){

	// Function.prototype.sync() interface is same as Function.prototype.call() - first argument is 'this' context
	var result = asyncFunction.sync(null,2,3);
	console.log(result); // 5

})*/
/*
var mosql = require('wires-mysql');

mosql.connection.createPool({
    host : 'localhost', user : 'root', password : '', database : 'dbClinicaOdonto'
});

var schema = {
    cpf :{ type : 'int'},
    name :{ type : 'varchar'},
    street: { type : 'varchar'},
    number: { type : 'varchar'},
    district: { type : 'varchar'},
    password: { type : 'varchar'},
    zipcode: { type : 'int'},
    idRole: { type : 'int'},
};

var Operation = mosql.operations.Operation;
var select = Operation.provide("user", "select", schema);
var result = null;
select.request(function(err, res) {
  console.log(res);
  result = err||res;
});
console.log(result);
*/
/*
var mysql = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'dbClinicaOdonto'
});
con.connect();

function consulta(sql, callback){
  callback(null,con.query(sql,function (err,rows){
      console.log(rows);
      con.values = rows;
  }));
}

Sync(function(){
  var result = consulta.sync(null,'SELECT * FROM user');
  console.log(result);
})
*/
/*
var con = new ConnectionDatabase().connected();
var result = null;

function consulta(callback){
  con.query('SELECT * FROM user',function (err, rows) {
    callback(null, rows);
  });
}

Sync(function(){
  result = consulta.sync();
  console.log(result);
  console.log("Chegou no resultado");
})*/
