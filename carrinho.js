// array para armazenar os itens do carrinho
var carrinho = [];

// função para adicionar um item ao carrinho
function addItem(nome, preco) {
  // criar um objeto para o item
  var item = {
    nome: nome,
    preco: preco
  };
  // adicionar o item ao array do carrinho
  carrinho.push(item);
  // atualizar o contador de itens do carrinho
  atualizarContador();
}

// função para atualizar o contador de itens do carrinho
function atualizarContador() {
  // selecionar o elemento do contador na barra de navegação
  var contador = document.querySelector('.carrinho-count');
  // atualizar o texto do contador com o número de itens no carrinho
  contador.innerText = carrinho.length;
}

// função para preencher a lista de itens do carrinho na página carrinho.html
function exibirCarrinho() {
  // selecionar o elemento da lista de itens na página carrinho.html
  var lista = document.querySelector('.carrinho ul');
  // limpar a lista atual
  lista.innerHTML = '';
  // variável para armazenar o total do carrinho
  var total = 0;
  // iterar sobre cada item do carrinho
  carrinho.forEach(function(item) {
    // criar um elemento de lista para o item
    var li = document.createElement('li');
    // adicionar o nome e preço do item
    li.innerText = item.nome + ' - R$' + item.preco.toFixed(2);
    // adicionar o elemento de lista à lista de itens
    lista.appendChild(li);
    // adicionar o preço do item ao total do carrinho
    total += item.preco;
    });
    // selecionar o elemento do total na página carrinho.html
    var totalElemento = document.querySelector('.carrinho-total span');
    // atualizar o texto do total com o valor calculado
    totalElemento.innerText = 'R$' + total.toFixed(2);
    }
    
    // exemplo de uso
    addItem('Camisa', 29.99);
    addItem('Calça', 59.99);
    addItem('Meias', 9.99);
    exibirCarrinho();
    
    function adicionarAoCarrinho(event) {
        event.preventDefault(); // impede que o link recarregue a página
        const produto = event.target.parentNode; // seleciona o elemento pai do botão
        const nome = produto.querySelector('h3').textContent; // pega o nome do produto
        const preco = produto.querySelector('.preco').textContent; // pega o preço do produto
        const itemCarrinho = document.createElement('li'); // cria um novo elemento de lista
        itemCarrinho.innerHTML = `${nome} - ${preco}`; // adiciona o nome e o preço ao elemento de lista
        const carrinho = document.querySelector('.carrinho ul'); // seleciona a lista de itens do carrinho
        carrinho.appendChild(itemCarrinho); // adiciona o item à lista
        atualizarTotal(preco); // atualiza o total do carrinho
        atualizarContador(); // atualiza o contador de itens no carrinho
      }
      
      function atualizarTotal(preco) {
        const total = document.querySelector('.total .valor'); // seleciona o elemento que exibe o total
        const valorAtual = parseFloat(total.textContent.replace('R$ ', '').replace(',', '.')); // pega o valor atual do total e converte para número
        const novoValor = valorAtual + parseFloat(preco.replace('R$ ', '').replace(',', '.')); // soma o valor atual do total com o novo valor e converte para número
        total.textContent = `R$ ${novoValor.toFixed(2).replace('.', ',')}`; // atualiza o valor exibido no elemento
      }
      
      function atualizarContador() {
        const carrinhoCount = document.querySelector('.carrinho-count'); // seleciona o elemento que exibe o contador de itens no carrinho
        const valorAtual = parseInt(carrinhoCount.textContent); // pega o valor atual do contador e converte para número
        carrinhoCount.textContent = valorAtual + 1; // adiciona 1 ao contador
      }
