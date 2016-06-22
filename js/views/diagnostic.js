var dc = new DiagnosticController();

window.onload = function(){
  document.getElementById("nome-usuario").innerText =
    sessionStorage.getItem('usuarioName');
  initButtons();
}

function initButtons(){
  document.getElementById("btn-find").onclick =  function (){
      dc.findHistoricCpf(document.getElementById("cpf").value,
        function(result){
          if (result.length > 0) {
            document.getElementById("name").value = result[0].name;
            updateTableDiagnostics(result);
          }else{
            alert("Este Paciente não possui diagnósticos");
            dc.findPatienceCpf(document.getElementById("cpf").value,
              function(result){
                if(result != null){
                  document.getElementById("name").value = result[0].name;
                }else{
                  document.getElementById("name").value = "Paciente não encontrado!";
                }
              }
            );
          }
      });
  }

  document.getElementById("btn-cancel").onclick =  function (){
      document.getElementById("diagnostic").value = " ";
  }

  document.getElementById("btn-confirm").onclick =  function (){
    var diagnostic = new Diagnostic(
        document.getElementById("cpf").value,
        document.getElementById("cpf-dentist").value,
        document.getElementById("diagnostic").value,
        new Date()
    );

    dc.save(diagnostic, function(result){
      if(result){
        alert("Diagnostico salvo!");
        document.getElementById("diagnostic").value = " ";
        dc.findHistoricCpf(document.getElementById("cpf").value,
          function(result){
            if (result.length > 0){
              updateTableDiagnostics(result);
            }else{
              document.getElementById("name").value = "Paciente não encontrado!";
            }
        });
      }else{
        alert("Não foi possível salvar o diagnóstico!");
      }
    });
  }

}

function updateTableDiagnostics(rows){

    var table = document.getElementById("table-diagnostics").getElementsByTagName('tbody').item(0);

    var linhas = document.getElementById("table-diagnostics").rows;
		var i = 0;
		for (i= linhas.length-1; i>=1; i--){
			document.getElementById("table-diagnostics").deleteRow(i);
		}

    for (i = 0; i < rows.length ; i++){

      var id = document.createElement("th");
      id.appendChild(document.createTextNode(rows[i].id));

      var dentist = document.createElement("th");
      dentist.appendChild(document.createTextNode(rows[i].dentist));

      var diagnostic = document.createElement("th");
      var diag = rows[i].diagnostic.length > 45? rows[i].diagnostic.substring(0,35)+"...":rows[i].diagnostic;
      diagnostic.appendChild(document.createTextNode(diag));

      var schedule = document.createElement("th");
      schedule.appendChild(document.createTextNode(new Date(rows[i].schedule).toDateString()));

      var action = document.createElement("th");
      var button = document.createElement("button");
      button.setAttribute("class","btn btn-primary glyphicon glyphicon-th");
      button.setAttribute("onclick","details("+rows[i].id+")");
      action.appendChild(button);

      var row = document.createElement("tr");
      row.setAttribute("id",rows[i].id);
      row.appendChild(id);
      row.appendChild(dentist);
      row.appendChild(diagnostic);
      row.appendChild(schedule);
      row.appendChild(action);

      table.appendChild(row);
		}
}

function details(idDiagnostic){
  $("#diagnostic").val("");
  dc.listDetails(idDiagnostic, function(details){
    $("#diagnostic").val(details[0].diagnostic);
  });
}
