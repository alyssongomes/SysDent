var fs          = require('fs')

var PDFGenerator = function(generationMethod)
{
  this.generationMethod = generationMethod;

  this.generate = function(filename,content)
  {
    var file = fs.createWriteStream(filename);
    this.generationMethod.generateDocument(file,content);
  }
}

module.exports = PDFGenerator;
