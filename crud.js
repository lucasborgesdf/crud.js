document.getElementById("btnAddJogo").addEventListener("click",function(){

    //CRIANDO CONSTANTES COM OS ELEMENTOS 
    const cadastraJogo = document.getElementById('cadastraJogo');
    const listaJogos = document.getElementById('listaJogos');
    const jogo = cadastraJogo.value;

    if(jogo.trim() !== " "){
        const li = document.createElement('li');
        li.textContent = jogo;
        listaJogos.appendChild(li);

        //SALVAR NO LOCAL STORAGE (IMPLEMENTAR AINDA)
        salvaJogos();
        cadastraJogo.value = ""; //SERVE PRA LIMPAR O VALOR NA CAIXA DE TEXTO DPS DE APERTAR ENTER
    }

    function salvaJogos(){
        const listaJogos = document.getElementById('listaJogos');
        let jogos =[];

        for(let i = 0; i < listaJogos.children.length; i++){
            jogos.push(listaJogos.children[i].textContent);
        }
        localStorage.setItem('jogos', JSON.stringify(jogos));
    }

    function carregarjogos(){
        const jogos = JSON.parse(localStorage.getItem('jogos') || [])
    }


});