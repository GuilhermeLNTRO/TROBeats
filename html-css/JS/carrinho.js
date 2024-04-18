document.addEventListener('DOMContentLoaded', function () {
    var produtoJSON = localStorage.getItem('produtoCarrinho');
    var produto = JSON.parse(produtoJSON);

    if (produto) {
        var ptProduto = document.getElementById('pt-produto');

        var divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        divProduto.innerHTML = `
            <img src="img/${produto.nome.replace(' ', '-')}.png" class="img-card" alt="">
            <div>
                <h4>"Licença Premium"</h4>
                <h3>Type-Beat "${produto.nome}" <b>${produto.preco}</b></h3>
            </div>
        `;

        // Adicionando o produto à página
        ptProduto.appendChild(divProduto);
        
    }
});
