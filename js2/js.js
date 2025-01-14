
let contador = 0;
let input = document.getElementById('inputTarefa');
let btn = document.getElementById('btn');
let main = document.getElementById('areaLista');
function addtarefa(){
    let valorinput = input.value;
    if((valorinput !== '')&&( valorinput !== null)&&(valorinput !== undefined)){
       ++contador;
        let novoitem = `<div id="${contador}" class="item">
            <div class="item-icone" onclick="marcarTarefa(${contador})">
                <svg id="icone_${contador}" class="circle" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                </div>
            <div class="item-nome" onclick="marcarTarefa(${contador})">
                ${valorinput};
            </div>
            <div class="item-botao">
                 <button class="delete" onclick="deletar(${contador})"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
            </div>
            </div>
        </div>`;
        
        input.value='';
        input.focus()
        main.innerHTML += novoitem;
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    if(classe =='item'){
        item.classList.add('clicado');
        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('item');
        icone.classList.add('item.clicado');
        item.parentNode.appendChild(item);
    }
    else{
        item.classList.remove('clicado');
        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('item.clicado');
        icone.classList.add('circle');
        
    }
    console.log(classe)
}

input.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        btn.click();
    }
})









