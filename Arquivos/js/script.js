/* 
Descricao :
  O arquivo adiciona caracteristicas do livro, como titulo, autor e link, atraves das funções.
Aluno :
  João Vitor Souza Santos
Data :
  11/ Julho / 2021
*/

function checkEmptyList() {
  if (!document.querySelector('ul').childNodes.length) {
    document.querySelector('ul').innerHTML = 'Adicione um book abaixo!';
  }
}

checkEmptyList()
let input = document.querySelectorAll('input');


let inputs = document.querySelectorAll('input')
let inputUpdate = document.querySelector('.save')
let novosbooks = document.querySelector('ul')

inputUpdate.addEventListener('click', function (e) {
  let book = {
    titulo: inputs[0].value,
    autor: inputs[1].value,
    link: inputs[2].value,
    lido: inputs[3].checked,
    id: criarId(),
  }

  acrescentarBook(book)

  e.preventDefault()
})

function criarId() {
  return Math.floor(Math.random() * 1000)
}

function acrescentarBook(book) {
  let li = gerarTag(book)
  novosbooks.appendChild(li)
  inputs[0].value = ''
  inputs[1].value = ''
  inputs[2].value = ''
  inputs[3].checked = false
}

function gerarTag(book) {
  let li = document.createElement('li')
  li.setAttribute('id', `${book.id}`)
  if (book.lido) {
    li.classList.add('lido')
  }


  let span = document.createElement('span')
  span.innerHTML = (book.titulo + ' - ' + book.autor)

  let div = document.createElement('div')

  let novaCompra = document.createElement('button')
  novaCompra.classList.add('btn-buy')
  novaCompra.innerHTML = `<a class="material-icons" href=${book.link}> shopping_cart </a>`

  let apagar = document.createElement('button')
  apagar.classList.add('delete')
  apagar.innerHTML = '<span class="material-icons"> delete </span>'
  apagar.setAttribute('onclick', 'destruir(' + book.id + ')')

  div.appendChild(novaCompra)
  div.appendChild(apagar)

  li.appendChild(span)
  li.appendChild(div)

  return li
}

function destruir(idbook) {
  let confirm = window.confirm('Quer realmente executar essa ação?')
  if (confirm) {
    let li = document.getElementById('' + idbook + '')
    if (li) {
      novosbooks.removeChild(li)
    }
  }
}





