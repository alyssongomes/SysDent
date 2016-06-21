var dDAO = new DiagnosticDAO();
var uDAO = new UserDAO();

function DiagnosticController(){

  this.findHistoricCpf = function (cpf,callback){
    return dDAO.findHistoricCpf(cpf,callback);
  }

  this.registerDiagnostic = function (diagnostic,callback){
    return dDAO.registerDiagnostic(diagnostic,callback);
  }

  this.findPatienceCpf = function (cpf,callback){
    return uDAO.findUserCpf(cpf,callback);
  }

  this.listDetailsDiagnostic = function(idDiagnostic, callback){
    return dDAO.listDetailsDiagnostic(idDiagnostic,callback);
  }
}
