var aDAO = new AppointmentDAO();

function MainController() {

  this.findPatientCpf = function (cpf,callback){
    return aDAO.findUserCpf(cpf,callback);
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
