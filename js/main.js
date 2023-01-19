//array de palavras
const secretWords = [
    word = {
        name : "brasil",
        category : "lugares",
        index: ""
    },
    word2 = {
        name : "argentina",
        category : "lugares",
        index: ""
    },
    word3 = {
        name : "colombia",
        category : "lugares",
        index: ""
    }
]; 

//jogo
function getRandomWord(){
    const word = Math.floor(Math.random() * secretWords.length);
    secretWords[word].index = word;
    return secretWords[word];
}

const secretWord = getRandomWord(); //palavra da vez
const letras = Array.from(secretWords[secretWord.index].name.toString());
const botoes = document.querySelectorAll("button");
const secretWordView = document.querySelector("#palavra-secreta");
const categoriaView = document.querySelector("#categoria");


let score = 0;
let erros = 0;

//jogo
function verificaLetra(letra) {

    if(letras.indexOf(letra.toLowerCase()) < 0){

        enforca();
        return;
    }

    letras.forEach((item, indice, array) => {
        
        if(letra.toLowerCase() === item){
            score = score + 1;
            revelaLetra(item, indice);
        }

    });

    setTimeout(() => {
        if(score >= letras.length){
            alert("Parabéns você descobru a palavra secreta");
        }
        return;
    }, 300);


}

function revelaLetra(letra, index) {

    const secretWordView = document.querySelectorAll("#palavra-secreta .letras");
    secretWordView[index].classList.remove('hide');

}

function enforca() {
    erros = erros+1;
    console.log("Errou, quanto erros: " + erros);
    const imagem = document.querySelector('#imagem');
    imagem.style.backgroundImage = `url(./../images/forca${erros}.png)`;
    console.log(`url(./../images/forca${erros}.png)`);
    setTimeout(() => {
        if(erros >= 6){
            gameOver();
        }
    }, 300);
    
}

function gameOver() {
    RetiraEventosTeclas();
    alert("Você perdeu, a palavra secreta era: " + secretWord.name);

}

//view

for (let x = 0; x < letras.length; x++) {
    let element = letras[x];

    const div = document.createElement('div');
    div.innerHTML = element.toUpperCase();
    div.classList.add("letras");
    div.classList.add("hide");
    secretWordView.appendChild(div);
}

categoriaView.innerHTML = secretWord.category.toString();

//input
function eventos(e) {
    verificaLetra(e.target.innerHTML);
}

for (let x = 0; x < botoes.length; x++) {
    const element = botoes[x];
    //console.log(element);

    element.addEventListener('click', eventos);
    
}

function RetiraEventosTeclas() {
    for (let x = 0; x < botoes.length; x++) {
        const element = botoes[x];
        //console.log(element);
    
        element.removeEventListener('click', eventos);

    }
}
