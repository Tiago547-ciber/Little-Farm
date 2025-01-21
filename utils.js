const titulo = document.getElementById("titulo");
const endereco = [
"./imagem/cachorro.jpeg", 
"./imagem/cavalo.jpeg",
"./imagem/galinha.jpeg", 
"./imagem/gato.jpeg",
"./imagem/leao.jpeg", 
"./imagem/ovelha.jpeg",
"./imagem/pato.jpeg", 
"./imagem/porco.jpeg",
"./imagem/vaca.jpeg"
];


var a = document.getElementById("1");
var b = document.getElementById("2");
var c = document.getElementById("3");
var d = document.getElementById("4");
var e = document.getElementById("5");
var f = document.getElementById("6");
var g = document.getElementById("7");
var h = document.getElementById("8");
var i = document.getElementById("9");
var infor = document.getElementById("titulo");


a.style.backgroundImage = "url("+ endereco[0] +")";
b.style.backgroundImage = "url("+ endereco[1] +")";
c.style.backgroundImage = "url("+ endereco[2] +")";
d.style.backgroundImage = "url("+ endereco[3] +")";
e.style.backgroundImage = "url("+ endereco[4] +")";
f.style.backgroundImage = "url("+ endereco[5] +")";
g.style.backgroundImage = "url("+ endereco[6] +")";
h.style.backgroundImage = "url("+ endereco[7] +")";
i.style.backgroundImage = "url("+ endereco[8] +")";
infor.innerText = "Os animais da fazenda.";





function marcar1() {
    
    
    var audio = document.getElementById("cachorro");
        audio.play();
    setTimeout(() => {
        audio.stop();
    }, 1500);
}
function marcar2() {

        var audio = document.getElementById("cavalo");
            audio.play();
    setTimeout(() => {
        audio.stop();
    }, 1500);
    }

function marcar3() {
    
    var audio = document.getElementById("galinha");
    audio.play();
    setTimeout(() => {
        audio.pause();
    }, 1500);
    }
    

function marcar4() {
    
        var audio = document.getElementById("gato");
            audio.play();
    setTimeout(() => {
        audio.stop();
    }, 1500);
    }
    

function marcar5() {
    
        var audio = document.getElementById("leao");
            audio.play();
    setTimeout(() => {
        audio.pause();
    }, 1500);
    }
   

function marcar6() {
    
        var audio = document.getElementById("ovelha");
            audio.play();
    setTimeout(() => {
        audio.stop();
    }, 1500);
    }
    

function marcar7() {
    
        var audio = document.getElementById("pato");
            audio.play();
    setTimeout(() => {
        audio.stop();
    }, 1500);
    }
    

function marcar8() {
    
        var audio = document.getElementById("porco");
            audio.play();
    setTimeout(() => {
        audio.stop();
    }, 1500);

    }
    

function marcar9() {
   
        var audio = document.getElementById("vaca");
    audio.play();
    setTimeout(() => {
        audio.stop();
    }, 1500);
    }
    
const resposta = [];


function vef() {
    const infor = document.getElementById("titulo");
    // A variável 'respostaS' deve ser a resposta correta (array que você deseja comparar)
    

    // Verifica se as arrays 'resposta' e 'respostaS' têm o mesmo comprimento e elementos
    const arraysIguais = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };
    
    const arraysDiferentes = (arr1, arr2) => {
        if (arr1.length === arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) return false;
            infor.innerHTML = "Você errou!";
            setTimeout(() => {
                window.location.href = "./Index.html";
            }, 2000);
        }
        return true;
    };    

    // Verifica se a 'resposta' é idêntica à 'respostaS'
    if (arraysIguais(resposta, respostaS)) {
        infor.innerHTML = "Certa Resposta!!!";
        setTimeout(() => {
            document.location.href = "./Index.html";
        }, 2000);
    } else {
        arraysDiferentes(resposta, respostaS);

    }
}

function game() {
    window.location.href = "./Index.html";
}

function game2() {
    window.location.href = "./contact.html";
}

function menu2() {
    var botoes = document.getElementsByClassName("front");
    
    // Verifica se existe ao menos um elemento com a classe "front"
    if (botoes.length > 0) {
        var botao = botoes[0]; // Pega o primeiro elemento com a classe "front"
        botao.innerHTML = `
            <button id="desafio" onclick="game()">Desafio</button>
            <button id="sons">Sons</button>
        `;
    } else {
        console.error("Nenhum elemento com a classe 'front' foi encontrado.");
    }
}

