var dDAO = new DiagnosticDAO();
var uDAO = new UserDAO();

function DiagnosticController(){

  this.findHistoricCpf = function (cpf,callback){
    return dDAO.findHistoricCpf(cpf,callback);
  }

  this.save = function (diagnostic,callback){
    return dDAO.save(diagnostic,callback);
  }

  this.findPatienceCpf = function (cpf,callback){
    return uDAO.findUserCpf(cpf,callback);
  }

  this.listDetails = function(idDiagnostic, callback){
    return dDAO.listDetails(idDiagnostic,callback);
  }
}
