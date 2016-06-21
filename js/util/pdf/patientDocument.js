var PDFDocument = require('pdfkit')


function PatientDocument()
{

  function imprimeCampos(doc,camposJson)
  {
    var campos = Object.keys(camposJson);
    //Por algum motivo, o forin está bugado.
    for(var i = 0; i < campos.length; ++i)
    {
      var campo = campos[i];
      doc.font('../../fonts/LiberationSerif-Bold.ttf')
      doc.text(campo + ': ', {continued: true});
      doc.font('../../fonts/LiberationSerif-Regular.ttf');
      doc.text(camposJson[campo]);
    }
  }

  this.generateDocument = function (fileStream,content)
  {
    var doc = new PDFDocument;
    doc.pipe(fileStream);

    doc.fontSize(20);
    doc.font('../../fonts/LiberationSerif-Bold.ttf')
    doc.image('../../imgs/documents/tooth-outline.png',{ width: 60});
    doc.text('SIAO');
    doc.moveDown();
    doc.text('Sistema de Apoio ao Odotologista');
    doc.moveDown();
    doc.text('Relatório de Atendimento');
    doc.moveDown();
    doc.fontSize(16);
    imprimeCampos(doc,content);

    doc.end();
  }
}

module.exports = PatientDocument;
