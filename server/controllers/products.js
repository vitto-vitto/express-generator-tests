const controller = {
    index: (req, res, next) => {
        res.render('products', { 
          title: 'Sabão crá crá',
          descricao: 'Não deixa os cabelo do braço de pé',
          caracteristicas: 'É o sabão do mamonas assasinas duuuuuurd'
        });
  },
  show: (req, res, next) => {
    const { nomeProduto } = req.params;
    res.render('products', { 
      title: nomeProduto.toUpperCase(),
      descricao: 'Não deixa os cabelo do braço de pé',
      caracteristicas: 'É o sabão do mamonas assasinas duuuuuurd'
    });
  }
}
module.exports = controller