var electron = require('electron')

//TODO: Fazer o login automático caso o usuário marque a opção
// 'manter-me logado'

function actionClickLogin()
{
    var cpf          = document.getElementById('inputCpf').value;
    var password     = document.getElementById('inputPassword').value;
    if(cpf === '' || password === '')
    {
      alert("Campos de usuário ou senha estão vazios.","Erro");
      return;
    }
    checkLogin(cpf,password,function(result)
    {
        var usuario = result[0];
        if(usuario)
        {
          sessionStorage.setItem('usuarioName',usuario.name);
          sessionStorage.setItem('usuarioCpf',usuario.cpf);
          sessionStorage.setItem('usuarioFunction',usuario.idFunction);
          location.href = "main.html";
        }
        else
        {
            document.getElementById('inputPassword').value = '';
            alert('Login ou senha inválidos');
        }
    });
}
