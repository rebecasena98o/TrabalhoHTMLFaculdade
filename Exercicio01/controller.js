
const inputTarefa = document.getElementById('name');

const botaoAdicionar = document.getElementById('add');

const botaoRemover = document.getElementById('del');

const listaUl = document.getElementById('list');


botaoAdicionar.onclick = function() {
    
    const valor = inputTarefa.value;

    
    if (valor.trim() !== "") {
        const novoLi = document.createElement('li'); 
        novoLi.textContent = valor; 
        listaUl.appendChild(novoLi); 
        inputTarefa.value = ""; 
    } else {
       
        alert("O campo de texto não pode ser vazio.");
    }
};

botaoRemover.onclick = function() {
    
    if (listaUl.children.length > 0) {
        
        const ultimo = listaUl.lastElementChild;
        listaUl.removeChild(ultimo);
    } else {
        
        alert("Não existe nenhum item a ser excluído.");
    }
};