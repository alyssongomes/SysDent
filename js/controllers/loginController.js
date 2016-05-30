function checkLogin(username,password,callback)
{
  var dao = UserDAO();
  dao.findUserLogin(username,password,function(result){
      if(result)
      {
        let loggedUser = result[0];
        callback(true);
      }
      else
        callback(false);
  });
}
