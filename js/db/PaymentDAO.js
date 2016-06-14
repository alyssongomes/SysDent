function PaymentDAO()
{
  var connection = new ConnectionDatabase();

  this.listAll = function(fCallback)
  {
    var c = connection.connected();
    c.query('SELECT * from payment',function(err,rows){
      if(err)
        console.log(err);
      else
        fCallback(rows);
      c.end();
    });

  }

  this.save = function(mPayment,fCallback)
  {
    var c = connection.connected();
    c.query('INSERT INTO payment SET ?',mPayment,
    function(err,result){
      if(err)
        callback(false);
      else
        callback(true);
      c.end();
    });
  }

  this.delete = function(nId,fCallback)
  {
    var c = connection.connected();
    c.query('DELETE FROM payment WHERE id = ?',nId,
      function(err,result){
        if(err)
        {
          console.log('ERRO: ' + err);
        }
        else {
          fCallback(result);
        }
        c.end();
    });
  }

  this.update = function(mPayment,fCallback)
  {
    var c = connection.connected();
    c.query('UPDATE payment SET pValue = ?,idPatient = ?, payday = ?',
    mPayment.value,mPayment.patient.id,mPayment.payday,function(err,result){
      if(err,result){
        console.log("ERRO: " + err);
      }
      else {
        fCallback(result);
      }
      c.end();
    });
  }

  this.find = function(nId,fCallback)
  {
    var c = connection.connected();
    c.query('SELECT * FROM payment WHERE id = ?',nId,function(err,result){
      if(err)
      {
        console.log('ERRO: ' + err);

      }
      else {
        fCallback(result);
      }
      c.end();
    });
  }

  this.findByPatient(mPatient,fCallback)
  {
    //TODO Continuar isso aqui. Tenho de pegar o objeto patient antes de chamar
    // o connection
    var c = connection.connected();
    c.query('SELECT * FROM payment WHERE idPatient = ? ',mPatient.id,
    function(err,result){
        if(err)
        {

        }
        else
        {
          fCallback(result);
        }
        c.end();
    });

  }
}
