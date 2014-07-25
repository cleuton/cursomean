/*
Este exemplo é parte do Workshop de desenvolvimento com Stack MEAN, 
de Cleuton Sampaio. 

O trabalho Workshop de Desenvolvimento com Stack MEAN de Cleuton Sampaio de Melo Jr
está licenciado com uma Licença Creative Commons - Atribuição-CompartilhaIgual 4.0 
Internacional.

http://creativecommons.org/licenses/

Isso inclui: Textos, páginas, gráficos e código-fonte.
*/

// respostaHttp.js - Servidor basico 

http = require('http')
http.createServer(function(req,res) {
      var saida = '<!DOCTYPE html>\n' + 
                  '<html>\n' + 
                  '<body>\n' +
                  '<br/>OK\n'  +
                  '</body>\n'  +
                  '</html>\n';
      res.writeHead(200, 
         {'Content-Length': saida.length,
         'Content-Type': 'text/html' });
      res.end(saida);
   }).listen(8080, function() {
      console.log('Aguardando conexoes na porta 8080');
   });