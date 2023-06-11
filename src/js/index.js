const setaAvancar = document.getElementById
("seta-avancar");
const setaVoltar = document.getElementById("seta-voltar")
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0; 
setaAvancar.addEventListener("click",function(){
    console.log("cartao atual", cartaoAtual)
    console.log("cartoes", cartoes.length - 1)
    if( cartaoAtual=== cartoes.length - 1) return;
    console.log ('blah')
    
    cartaoAtual++;
    console.log(cartoes[cartaoAtual].classList.add('select'));
    const cartaoSelec = document.querySelector(".select");
    console.log(cartaoSelec);
    cartaoSelec.classList.remove("select");
  
} );
setaVoltar.addEventListener("click", function(){
    const cartaoSelec = document.querySelector(".select");
    cartaoSelec.classList.remove("select");
    cartaoAtual--;
    console.log(cartaoAtual);
    cartoes[cartaoAtual].classList.add("select");

});