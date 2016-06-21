var PDFGenerator = require('../util/pdfGenerator')
var PatientDocument = require('../util/pdf/patientDocument')

var content = {
  Dentista: 'Fulano',
  Mês: 'Janeiro',
  CPF: '123.123.423-12',
  Valor: 61.23
};

var generator = new PDFGenerator(new PatientDocument());
generator.generate('/home/jordy/Desktop/teste_js.pdf',content);
