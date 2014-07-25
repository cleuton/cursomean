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
https = require('https');
url =  require('url')
http.createServer(function(req,res) {
      var url_parts = url.parse(req.url, true);
      var query = url_parts.query;
      var apiKey='*************';
      var queryPath = '/maps/api/place/nearbysearch/json?language=pt&location='
                      + query.latitude + ','
                      + query.longitude
                      + '&radius=10&sensor=false&key='
                      + apiKey;
      var options = {
         hostname: 'maps.googleapis.com',
         port: 443,
         path: queryPath,
         method: 'GET'         
      };
      console.log(queryPath);
      var saida = '';
      
      var req = https.request(options, function(respGoogle) {
         console.log("status: ", respGoogle.statusCode);
         console.log("headers: ", respGoogle.headers);
         respGoogle.on('data', function(d) {
            saida += d;
         });
         respGoogle.on('end',function() {
            var objetos = eval('(' + saida + ')');
            var pagina = '<!DOCTYPE html>';
            pagina += "<html><head><meta charset='utf-8'/></head>";
            pagina += '<body>';
            pagina += 'Em um raio de 10 metros de:';
            pagina += '<ul><li>Latitude: ' + query.latitude
                      + '</li><li>Longitude: ' + query.longitude
                      + '</li></ul>';
            pagina += '<table border>';
            for(var x=0; x<objetos.results.length; x++) {
               pagina += '<tr><th>' + objetos.results[x].name
                         + '</th></tr>';
            }

            pagina += '</table></body></html>';
            res.writeHeader(200, 
            { 'Content-type' : 'text/html' ,
              'Content-length' : Buffer.byteLength(pagina)});
            res.write(pagina);
            res.end();
         });
      });
      req.end();
      req.on('error', function(e) {
         console.error(e);
      });      
   }).listen(8080, function() {
      console.log('Aguardando conexoes na porta 8080');
   });