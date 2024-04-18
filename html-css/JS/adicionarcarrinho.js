function adicionarAoCarrinho(nomeProduto, precoProduto) {
    // Criando um objeto para representar o produto
    var produto = {
        nome: nomeProduto,
        preco: precoProduto
    };
    // Convertendo o objeto em uma string JSON
    var produtoJSON = JSON.stringify(produto);
    // Armazenando o produto no localStorage
    localStorage.setItem('produtoCarrinho', produtoJSON);
    // Redirecionando para a página do carrinho
    window.location.href = 'carrinho.html';
}
