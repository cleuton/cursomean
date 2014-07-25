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
      var url_parts = url.parse(Request.url, true);
      var query = url_parts.query;
      var apiKey='AIzaSyAahFBxELW5HjNUO-JdGHVmPNiERrc_PIY';
      var queryPath = 'maps/api/place/nearbysearch/json?language=pt&location='
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
      var saida = '';
      var req = https.request(options, function(res) {
         console.log("status: ", res.statusCode);
         console.log("headers: ", res.headers);
         res.on('data', function(d) {
            saida += d;
         });
      });
      req.end();

      req.on('error', function(e) {
         console.error(e);
      });      
   }).listen(8080, function() {
      console.log('Aguardando conexoes na porta 8080');
   });