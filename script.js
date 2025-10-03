let btnAdicionar = document.querySelector(".btn-adicionar-tarefa");

function adicionarTarefas() {
    let Tarefa = document.querySelector(".adicionar-tarefa").value;
    let ulTarefa = document.getElementById("lista-tarefas");

    if(Tarefa === "") {
        alert("Digite alguma tarefa!");
        return;
    }   else if (Tarefa.length >= 40) {
        alert("Seu texto é muito grande")
        return;
    }
    let li = document.createElement("li");
    li.innerText = Tarefa;
    ulTarefa.appendChild(li);
    document.querySelector(".adicionar-tarefa").value = "";
    document.querySelector(".adicionar-tarefa").focus();

    let btnExcluir = document.createElement("button");
    btnExcluir.innerHTML = `<img src="icons8-lixo-24.png" alt="Excluir" >`;
    li.appendChild(btnExcluir);

    btnExcluir.onclick = function() {
        li.remove();
    }
}

