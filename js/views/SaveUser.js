window.onload = function(){
  initTableUsers();
  initButtons();
}

function initTableUsers(){

}

function initButtons(){

   document.getElementById("btn-save").onclick =  function (){
     document.getElementById("message").innerHTML = "<div class='alert alert-success'>"+
     "<button type='button' class='close' data-dismiss='alert'>&times;</button>"+
     "<strong>Success!</strong> Usuário Salvo!"
     +"</div>";
   };

   document.getElementById("btn-delete").onclick =  function (){
     document.getElementById("message").innerHTML = "<div class='alert alert-success'>"+
     "<button type='button' class='close' data-dismiss='alert'>&times;</button>"+
     "<strong>Success!</strong> Usuário Apagado!"
     +"</div>";
   };

   document.getElementById("btn-update").onclick =  function (){
     document.getElementById("message").innerHTML = "<div class='alert alert-success'>"+
     "<button type='button' class='close' data-dismiss='alert'>&times;</button>"+
     "<strong>Success!</strong> Usuário Atualizado!"
     +"</div>";
   };

   document.getElementById("btn-find").onclick =  function (){
     document.getElementById("message").innerHTML = "<div class='alert alert-warning'>"+
     "<button type='button' class='close' data-dismiss='alert'>&times;</button>"+
     "<strong>Atenção!</strong> Não foi possível encontrar o usuário!"
     +"</div>";
   };
}
