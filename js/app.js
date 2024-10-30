let totalGeral; 
limpar();
function adicionar (){
    let produtos = document.getElementById('produto').value;
    let valorUnitario = produtos.split('R$')[1];
    let nomeProduto = produtos.split('-')[0];
    let quantidade = (document.getElementById('quantidade').value);
    let listaDeProdutos = document.getElementById('lista-produtos');
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`
  document.getElementById('quantidade').value = 0 ;
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent  = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value = 0; 
    
}

function limpar (){
  totalGeral = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';


}