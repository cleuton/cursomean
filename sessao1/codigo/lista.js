/*
Este exemplo é parte do Workshop de desenvolvimento com Stack MEAN, 
de Cleuton Sampaio. 

O trabalho Workshop de Desenvolvimento com Stack MEAN de Cleuton Sampaio de Melo Jr
está licenciado com uma Licença Creative Commons - Atribuição-CompartilhaIgual 4.0 
Internacional.

http://creativecommons.org/licenses/

Isso inclui: Textos, páginas, gráficos e código-fonte.
*/

// lista.js - Servidor basico que lista um arquivo

http = require('http');
fs = require('fs'); 
server = http.createServer(function(req,res) {
   var readStream = fs.createReadStream('./lista.js');
   readStream.on('open', function () {
      readStream.pipe(res);
   });
   readStream.on('error',function(erro) {
      console.err(erro);
      res.end(erro);
   });
   readStream.on('end',function() {
      res.end();
   });   
});
server.listen(8080, function() {
     console.log('Aguardando conexoes na porta 8080');
});