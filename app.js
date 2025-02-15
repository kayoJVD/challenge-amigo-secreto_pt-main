let nomeAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let lista = document.getElementById('listaAmigos');
    let nome = input.value.trim();
  
    
    if (nome === '') {
      alert('Por favor, insira um nome válido');
      return;
    }
  
    
    nomeAmigos.push(nome);
  
    
    let listItem = document.createElement('li');
    listItem.textContent = nome;
    listItem.className = 'name-item';
    lista.appendChild(listItem);
  
    
    input.value = '';
    input.focus();
  }

  function sortearAmigo() {
    let resultado = document.getElementById('resultado');
  
    
    if (nomeAmigos.length === 0) {
      alert('A lista está vazia. Adicione pelo menos um nome para sortear.');
      return;
    }
  
    
    let indiceAleatorio = Math.floor(Math.random() * nomeAmigos.length);
  
    
    let nomeSorteado = nomeAmigos[indiceAleatorio];
    resultado.innerHTML = `<li class="result-item">O amigo secreto é: <strong>${nomeSorteado}</strong></li>`;

    
  }

  
  