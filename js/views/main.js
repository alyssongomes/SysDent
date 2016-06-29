var mc = new MainController();

function substituirTeclas()
{
  var elementId = 'cpf';
  var caixaDeTexto = document.getElementById(elementId);
  var strTeclas     = caixaDeTexto.value;
  var ultimoCaractere = caixaDeTexto.value.length - 1;
  var precisaDePontos, precisaDeHifem;

  function substuiChars(selectedChar)
  {
    document.getElementById(elementId).value = strTeclas.slice(0,ultimoCaractere) + selectedChar
      + strTeclas.slice(ultimoCaractere,ultimoCaractere+1);
  }

  precisaDePontos = strTeclas.charAt(ultimoCaractere) != '.' &&
   (strTeclas.length == 4 || strTeclas.length == 8);
  precisaDeHifem = strTeclas.charAt(ultimoCaractere) != '-' &&
    strTeclas.length == 12;
  if(precisaDePontos)
  {
    substuiChars('.');
  }
  if(precisaDeHifem)
    substuiChars('-');
}

function logout()
{
  sessionStorage.removeItem('usuarioName');
  sessionStorage.removeItem('usuarioId');
  sessionStorage.removeItem('usuarioFunction');
}

window.onload = function()
{
  document.getElementById("nome-usuario").innerText =
    sessionStorage.getItem('usuarioName');
  $("#calendar").datepicker({
    weekStart: 1,
    maxViewMode: 2,
    todayBtn: "linked",
    language: "pt-BR",
    daysOfWeekDisabled: "0",
    daysOfWeekHighlighted: "0",
    todayHighlight: true
  }).on('changeDate',function (e)
  {
    selectAppointments(e.date);
  });

  $('#inCalendar input').datepicker({
    autoclose: true,
    weekStart: 1,
    maxViewMode: 2,
    todayBtn: "linked",
    language: "pt-BR",
    daysOfWeekDisabled: "0",
    daysOfWeekHighlighted: "0",
    todayHighlight: true
  }).on('changeDate',function(e){
    selectAppointments(e.date);
  });

  initTableScheduled();
  initComboBox();

}

function btnFindOnClick ()
{
      mc.findPatientCpf(document.getElementById("cpf").value,
        function(result)
        {
          if (result.length > 0)
            document.getElementById("name").value = result[0].name;
          else
            document.getElementById("name").value = "Paciente não encontrado!";
        });
}

function btnCancelOnClick ()
{
    clean();
}

function btnMarkOnClick ()
{
    var appointment = new Appointment(
      document.getElementById("cpf").value,
      $("#dentist option:selected").val(),
      document.getElementById("schedule").value,
      document.getElementById("appointment").value
    );
    mc.saveAppointment(appointment,
      function (result)
      {
        if(result){
          alert("Consulta agendada");
          initTableScheduled();
        }else
          alert("Erro ao agendar consulta");
      });
}

function initTableScheduled()
{

    var table = document.getElementById("table-scheduled").getElementsByTagName('tbody').item(0);

    var linhas = document.getElementById("table-scheduled").rows;
		var i = 0;
		for (i= linhas.length-1; i>=1; i--)
    {
			document.getElementById("table-scheduled").deleteRow(i);
		}

    mc.listAllAppointments(function (appointments)
    {
      for (i = 0; i < appointments.length ; i++)
      {
        var novaLinhaNaTabela = "<tr id=" + appointments[i].id +"><td>"
          + appointments[i].appointment + "</td><td>" + appointments[i].name + "</td><td>"
          + appointments[i].nameDentist + "</td></tr>";

        if(new Date(appointments[i].schedule).toDateString() == new Date().toDateString())
          $("#table-scheduled").find("tbody").append(novaLinhaNaTabela);
  		}
    });
}

function selectAppointments(data)
{
  var table = document.getElementById("table-scheduled")
                .getElementsByTagName('tbody').item(0);

  var linhas = document.getElementById("table-scheduled").rows;
  var i = 0;
  for (i= linhas.length-1; i>=1; i--)
  {
    document.getElementById("table-scheduled").deleteRow(i);
  }

  mc.listAllAppointments(function (appointments)
  {
    for (i = 0; i < appointments.length ; i++)
    {
      var novaLinhaNaTabela = "<tr id=" + appointments[i].id + "><td>"
          + appointments[i].appointment + "</td><td>" + appointments[i].name
          + "</td><td>" + appointments[i].nameDentist + "</td></tr>";

      if(new Date(appointments[i].schedule).toDateString()
          == data.toDateString())
        $("#table-scheduled").find("tbody").append(novaLinhaNaTabela);
    }
  });
}

function initComboBox()
{
  $("#dentist").empty();
  var mco = new MainController();
  mco.listAllDentists(function (dentists) {
    for (i = 0; i < dentists.length ; i++){
      $("#dentist").append("<option value="+dentists[i].cpf+">"+dentists[i].name+"</option>");
    }
  });
}

function clean(){
  document.getElementById("cpf").value = "";
  document.getElementById("schedule").value = "";
  document.getElementById("appointment").value = "";
  document.getElementById("name").value = "";
}
