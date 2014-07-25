/*
Este exemplo � parte do Workshop de desenvolvimento com Stack MEAN, 
de Cleuton Sampaio. 

O trabalho Workshop de Desenvolvimento com Stack MEAN de Cleuton Sampaio de Melo Jr
est� licenciado com uma Licen�a Creative Commons - Atribui��o-CompartilhaIgual 4.0 
Internacional.

http://creativecommons.org/licenses/

Isso inclui: Textos, p�ginas, gr�ficos e c�digo-fonte.
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

 
