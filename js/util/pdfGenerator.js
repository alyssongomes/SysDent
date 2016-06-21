var PDFDocument = require('pdfkit')

function PDFGenerator(filename,generationMethod)
{
  this.filename = filename;
  this.generationMethod = generationMethod;

  this.generate = function(documentType,content)
  {
      
  }
}

module.exports = PDFGenerator;

doc = new PDFDocument;
