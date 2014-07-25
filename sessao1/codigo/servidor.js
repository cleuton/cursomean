/*
Este exemplo é parte do Workshop de desenvolvimento com Stack MEAN, 
de Cleuton Sampaio. 

O trabalho Workshop de Desenvolvimento com Stack MEAN de Cleuton Sampaio de Melo Jr
está licenciado com uma Licença Creative Commons - Atribuição-CompartilhaIgual 4.0 
Internacional.

http://creativecommons.org/licenses/

Isso inclui: Textos, páginas, gráficos e código-fonte.
*/

// servidor.js - Servidor basico

function inicio() {
  console.log('Aguardando conexoes na porta 8080');
}

function mensagem(request,response) {
   response.end('OK');
}

// Carrega o modulo http
http = require('http')
// Cria um servidor, passando uma funcao inicial
server = http.createServer(mensagem);
// Faz o servidor aguardar conexoes, passando uma funcao de tratamento
server.listen(8080, inicio);

 
