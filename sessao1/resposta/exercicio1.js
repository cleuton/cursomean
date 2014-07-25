/*
Este exemplo é parte do Workshop de desenvolvimento com Stack MEAN, 
de Cleuton Sampaio. 

O trabalho Workshop de Desenvolvimento com Stack MEAN de Cleuton Sampaio de Melo Jr
está licenciado com uma Licença Creative Commons - Atribuição-CompartilhaIgual 4.0 
Internacional.

http://creativecommons.org/licenses/

Isso inclui: Textos, páginas, gráficos e código-fonte.
*/

http = require('http')
url   = require('url');
lith  = require('lith');
fs   = require('fs');
http.createServer(function(req,res) {
      var url_parts = url.parse(req.url, true);
      var pathname = __dirname + url_parts.pathname;
      console.log(pathname);      
      fs.exists(pathname, function (exists) {
         if (exists) {
            var rs = fs.createReadStream(pathname);
            rs.on('open',function() {
               rs.pipe(res);
            });  
            rs.on('end',function(erro) {
               res.end();
            });                      
         }
         else {
            var saidahtml = 
               lith.g ([['!DOCTYPE HTML'],['html',[['head',[
                        ['meta', {charset: 'utf-8'}]]],
                        ['body',[['h1', '404 Not found']]]]]]);
            res.writeHeader(404, 
               {'Content-type' : 'text/html'});
            res.end(saidahtml);
         }
      });      
      
   }).listen(8080, function() {
      console.log('Aguardando conexoes na porta 8080');
   });