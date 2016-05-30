function actionClickLogin()
{
    var username  = document.getElementById('inputUsername').text;
    var password     = document.getElementById('inputPassword').text;
    if(username === '' || password === '')
    {
      alert("Campos de usuário ou senha estão vazios.");
    }
    checkLogin(username,password,function(result){
        if(result)
          alert('Logado com sucesso');
    });
}
