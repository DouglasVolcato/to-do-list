function adicionar(){
    const ul = document.getElementById("listaNomes");
    const inputNome = document.getElementById("inputNome");

    if (inputNome.value != ""){
        inputNome.setAttribute("placeholder", "");
        const a = document.createElement("a");
        const novoElemento = document.createElement("li");
        novoElemento.className = "pedente";
        const textoNovoElemento = document.createTextNode(`${inputNome.value}`);
        a.appendChild(textoNovoElemento);
        novoElemento.appendChild(a);

        const botaoMarcar = document.createElement("button");
        const textoBotaoMarcar = document.createTextNode("MARCAR");
        botaoMarcar.setAttribute("onclick", "marcar()")
        botaoMarcar.className = "marcar";
        botaoMarcar.appendChild(textoBotaoMarcar);
        novoElemento.appendChild(botaoMarcar);

        const botaoApagar = document.createElement("button");
        const textoBotaApagar = document.createTextNode("APAGAR");
        botaoApagar.setAttribute("onclick", "apagar()")
        botaoApagar.className = "apagar";
        botaoApagar.appendChild(textoBotaApagar);
        novoElemento.appendChild(botaoApagar);

        ul.appendChild(novoElemento);
        inputNome.value = "";
    } else {
        inputNome.setAttribute("placeholder", "Escreva algo");
    };
};

function marcar() {
    const botoes = document.querySelectorAll(".marcar");

    for(let n of botoes){
        n.addEventListener("click", function(){
            const parent = n.parentElement;

            if (parent.className != "feito") {
                parent.style.textDecoration = "line-through";
                parent.style.color = "red";
                parent.className = "feito";
                n.style.backgroundColor = "red";

            } else{
                parent.style.textDecoration = "none";
                parent.style.color = "white";
                parent.className = "pendente";
                n.style.backgroundColor = "white";
            }
        });
    };
};

function apagar() {
    const botoes = document.querySelectorAll(".apagar");

    for(let n of botoes){
        n.addEventListener("click", function(){
            const parent = n.parentElement;
            parent.style.display = "none";
        });
    };
};

function limpar(){
    const botoes = document.querySelectorAll("li");
    for(let n of botoes){
        n.style.display = "none";
    };
};

function buscarItem(){
    const itemPesquisado = document.getElementById("pesquisar");
    const itensLista = document.querySelectorAll("a");
    for (let n of itensLista){
        if ((n.innerText.toUpperCase()).includes(itemPesquisado.value.toUpperCase())){
            n.style.color = "aqua";
        } else {
            n.style.color = "white";
        };
    };
};

const inputPesquisar = document.getElementById("pesquisar");

inputPesquisar.addEventListener("keyup", function(){

    const itensDaLista = document.querySelectorAll("li");

    for (let n of itensDaLista){

        if (n.innerText.includes(inputPesquisar.value)){
            n.style.color = "aqua";
        } else {
            n.style.color = "white";
        };
        if (inputPesquisar.value == ""){
            n.style.color = "white";
        };
    };

})
