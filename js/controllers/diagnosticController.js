var PDFGenerator    = require('../js/util/pdfGenerator.js');
var PatientDocument = require('../js/util/pdf/patientDocument.js');
const {dialog} = require('electron').remote;
var dDAO = new DiagnosticDAO();
var uDAO = new UserDAO();
var pDAO = new PaymentDAO();

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

  this.updateValue = function(payment,callback) {
    return pDAO.save(payment,callback);
  }

  this.report = function(content,callback) {
    try {
      var generator = new PDFGenerator(new PatientDocument());
      var path = dialog.showSaveDialog();
      generator.generate(path,content);
      return callback(true);
    } catch (e) {
        console.log('[ERROR]: '+e.message);
        return callback(false);
    }
  }

}
