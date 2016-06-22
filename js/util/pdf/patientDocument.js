var PDFDocument = require('pdfkit')

function PatientDocument()
{
  var regularFont = '../../fonts/LiberationSerif-Regular.ttf';
  var boldFont  = '../../fonts/LiberationSerif-Bold.ttf';

  function imprimeCampos(doc,camposJson)
  {
    var campos = Object.keys(camposJson);
    //Por algum motivo, o forin está bugado.
    for(var i = 0; i < campos.length; ++i)
    {
      var campo = campos[i];
      if(campo === 'texto')
        continue;
      doc.font(boldFont)
      doc.text(campo + ': ', {continued: true});
      doc.font(regularFont);
      doc.text(camposJson[campo]);
    }
    doc.moveDown();
  }

  this.generateDocument = function (fileStream,content)
  {
    var doc = new PDFDocument;
    doc.pipe(fileStream);

    doc.fontSize(20);
    doc.font(boldFont)
    doc.image('../../imgs/documents/tooth-outline.png',{ width: 60});
    doc.text('SIAO');
    doc.moveDown();
    doc.text('Sistema de Apoio ao Odotologista');
    doc.moveDown();
    doc.text('Relatório de Atendimento');
    doc.moveDown();
    doc.fontSize(16);
    imprimeCampos(doc,content);

    doc.text(content["texto"]);

    doc.end();
  }
}

module.exports = PatientDocument;
