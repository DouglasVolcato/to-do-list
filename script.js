const tarefa = document.querySelector("#tarefa");
const botao = document.querySelector("button");
const lista = document.querySelector("ul");

botao.addEventListener("click", () => {

    const item = document.createElement("li");
    const adicionarTarefa = document.createTextNode(tarefa.value);

    if (tarefa.value != "") {
        item.appendChild(adicionarTarefa);
        
        const novoBotao = document.createElement("spam");
        novoBotao.className = "botaoExcluir";

        const nomeBotao = document.createTextNode("Apagar Tarefa");

        novoBotao.setAttribute("onclick","apagarTarefa()");

        novoBotao.appendChild(nomeBotao);
        item.appendChild(novoBotao);

        //
        const novoBotao2 = document.createElement("spam");
        novoBotao2.className = "botaoMarcar";

        const nomeBotao2 = document.createTextNode("Marcar Tarefa");

        novoBotao2.setAttribute("onclick","marcarTarefa()");

        novoBotao2.appendChild(nomeBotao2);

        item.appendChild(novoBotao2);

        //

        lista.appendChild(item);

        tarefa.value = "";

    } else {
        alert("Escreva algo para adicionar.");
    };

});

function apagarTarefa() {

    const listaCompleta = document.querySelectorAll(".botaoExcluir");
    
    for (let i = 0; i < listaCompleta.length; i++) {

        listaCompleta[i].addEventListener("click", function(){

            const li1 = listaCompleta[i].parentElement;
            li1.style.display = "none"; 

        })
    }
}

function marcarTarefa() {
    const listaCompleta = document.querySelectorAll(".botaoMarcar");

    for (let i = 0; i < listaCompleta.length; i++) {

        listaCompleta[i].addEventListener("click", function(){

            const li1 = listaCompleta[i].parentElement;

            if (li1.style.textDecoration != "line-through") {
                li1.style.textDecoration = "line-through";
            } else {
                li1.style.textDecoration = "none";
            };

        });
    }
}