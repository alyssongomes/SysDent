function checkLogin(username,password,callback)
{
  var dao = new UserDAO();
  dao.findUserLogin(username,password,function(result){
      if(result != undefined)
      {
        let loggedUser = result[0];
        callback(true);
      }
      else
        callback(false);
  });
}
