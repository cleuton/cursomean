$(document).ready(function() {
  $("li").click(function() {
      $.getJSON('/artista/' + this.textContent, function(artista) {
        var saida = '<ul><li>Nome: ' + artista.nome + '</li>'
                  + '<li>Estilo: ' + artista.estilo_id.nome + '</li>'
                  + '<li>Musicas<table border>';
        $.each(artista.musicas, function(key,val) {
            saida += '<tr><th>' + val.titulo + '</th></tr>';
        });
        $("#saida").html(saida);
      });
  });
});
