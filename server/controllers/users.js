const controller = {
    index: (req, res, next) => {
        res.render('users', { 
          title: 'Coalizão Pelo Clima SP',
          subtitle: 'Exemplo de subtitulo'
        });
  }
}

module.exports = controller