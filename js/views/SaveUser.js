var suc = new SaveUserController();
var Sync = require('sync');

window.onload = function(){
  initTableUsers();
  initButtons();
}

function initTableUsers(){

    var table = document.getElementById("usuarios").getElementsByTagName('tbody').item(0);

    var header = table.getElementsByTagName('tr').item(0).cloneNode(true);

    var linhas = document.getElementById("usuarios").rows;
		var i = 0;
		for (i= linhas.length-1; i>=0; i--){
			document.getElementById("usuarios").deleteRow(i);
		}

    var users = suc.listAllAttendant();
    table.appendChild(header);
    for (var u of users) {

      var check = document.createElement("input");
      check.setAttribute("type","checkbox");

      var name = document.createElement("th");
      name.setAttribute("id",u.name);
      name.appendChild(document.createTextNode(u.name));

      var cpf = document.createElement("th");
      cpf.setAttribute("id",u.cpf);
      cpf.appendChild(document.createTextNode(u.cpf));

      var street = document.createElement("th");
      street.setAttribute("id",u.street);
      street.appendChild(document.createTextNode(u.street));

      var number = document.createElement("th");
      number.setAttribute("id",u.number);
      number.appendChild(document.createTextNode(u.number));

      var zipcode = document.createElement("th");
      zipcode.setAttribute("id",u.zipcode);
      zipcode.appendChild(document.createTextNode(u.zipcode));

      var row = document.createElement("tr");
      row.setAttribute("id",u.cpf);
      row.appendChild(check);
      row.appendChild(name);
      row.appendChild(cpf);
      row.appendChild(street);
      row.appendChild(number);
      row.appendChild(zipcode);

      table.appendChild(row);
    }


}

function initButtons(){

   document.getElementById("btn-save").onclick =  function (){
     if(document.getElementById("cpf").value === " " || document.getElementById("nome").value === " "){
       message("warning","Atenção!","Informe pelo menos o nome e o cpf do Atendente!");
     }else{
       Sync(function () {
         var result = suc.saveAttendant(
           document.getElementById("nome").value,
           document.getElementById("cpf").value,
           document.getElementById("senha").value,
           document.getElementById("rua").value,
           document.getElementById("numero").value,
           document.getElementById("distrito").value,
           document.getElementById("CEP").value);
         //console.log("passou aki já");
         console.log("Tá na view "+result);
         if (result === true) {
           message("success","Sucesso!","Usuário salvo!");
           cleanFields();
         }else{
           message("danger","Erro!","Usuário não pode ser salvo!");
         } 
       })
     }
   };

   document.getElementById("btn-delete").onclick =  function (){
     var cpfs = [];
     var table = document.getElementById("usuarios");
     for (var i = 1; i < table.getElementsByTagName('tr').length; i++) {
       if(table.getElementsByTagName('tr').item(i).getElementsByTagName('input').item(0).checked === true){
         cpfs.push(parseInt(table.getElementsByTagName('tr').item(i).getElementsByTagName('th').item(1).getAttribute("id")));
       }
     }

     if(suc.deleteAttendant(cpfs)){
       initTableUsers();
       message("success","Sucesso!","Usuário(s) Apagado(s)!");
     }else{
       message("danger","Erro!","Não foi possivel apagar o(s) Usuário(s)!");
     }

   };

   document.getElementById("btn-update").onclick =  function (){

     if(document.getElementById("cpf").value === "" || document.getElementById("nome").value === ""){
       message("warning","Atenção!","Nenhum usuário pesquisado!");
     }else{
       var user = new User(
         document.getElementById("cpf").value,
         document.getElementById("nome").value,
         document.getElementById("rua").value,
         document.getElementById("numero").value,
         document.getElementById("distrito").value,
         document.getElementById("senha").value,
         document.getElementById("CEP").value,2);

      console.log(user);

       var result = suc.updateAttendant(user);
       if(result){
         message("success","Sucesso!","Usuário Atualizado!");
       }else{
         message("danger","Sucesso!","Usuário não pode ser Atualizado!");
       }
     }

   };

   document.getElementById("btn-find").onclick =  function (){
     var user = suc.findAttendant(document.getElementById("localizar").value);
     if (user != null) {
       document.getElementById("cpf").value = new String(user.cpf);
       document.getElementById("senha").value = user.password;
       document.getElementById("rua").value = user.street;
       document.getElementById("numero").value = user.number;
       document.getElementById("distrito").value = user.district;
       document.getElementById("CEP").value = user.zipcode;
       document.getElementById("nome").value = user.name;
     }else{
       message("danger","Erro!","Não foi possivel localizar o Usuário!");
     }
   };

   document.getElementById("btn-clean").onclick =  function (){
     cleanFields();
   };
}

function message(type,title,body){
  document.getElementById("message").innerHTML = "<div class='alert alert-"+type+"'>"+
  "<button type='button' class='close' data-dismiss='alert'>&times;</button>"+
  "<strong>"+title+"</strong>"+body
  +"</div>";
}

function cleanFields(){
  document.getElementById("cpf").value = " ";
  document.getElementById("cpf").placeholder = "CPF";
  document.getElementById("nome").value = " ";
  document.getElementById("nome").placeholder = "Nome";
  document.getElementById("rua").value = " ";
  document.getElementById("rua").placeholder = "Rua";
  document.getElementById("numero").value = " ";
  document.getElementById("numero").placeholder = "Número";
  document.getElementById("distrito").value = " ";
  document.getElementById("distrito").placeholder = "Distrito";
  document.getElementById("senha").value = " ";
  document.getElementById("senha").placeholder = "Senha";
  document.getElementById("CEP").value = " ";
  document.getElementById("CEP").placeholder = "CEP";
}
