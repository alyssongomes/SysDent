var aDAO = new AppointmentDAO();
var uDAO = new UserDAO();

function MainController() {

  this.findPatientCpf = function (cpf,callback){
    return uDAO.findUserCpf(cpf,callback);
  }

  this.listAllAppointments = function(callback) {
    return aDAO.listAllAppointments(callback);
  }

  this.listAllDentists = function(callback) {
    return aDAO.listAllDentists(callback);
  }

  this.saveAppointment = function(appointment,callback){
    return aDAO.saveAppointment(appointment,callback);
  }

}
