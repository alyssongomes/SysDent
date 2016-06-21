var PDFGenerator = require('../util/pdfGenerator')
var PatientDocument = require('../util/pdf/patientDocument')

var content = {
  Dentista: 'Fulano',
  Mês: 'Janeiro',
  CPF: '123.123.423-12',
  Valor: 61.23,
  texto:"Paciente foi atendido com 3 cáries, gentivite e dois dentes cisos.\nQuebra de linha"
};

var generator = new PDFGenerator(new PatientDocument());
generator.generate('teste_js.pdf',content);
