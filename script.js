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

const imagem1 = Math.floor(Math.random()*9);
const imagem2 = Math.floor(Math.random()*9);
const imagem3 = Math.floor(Math.random()*9);
const imagem4 = Math.floor(Math.random()*9);
const imagem5 = Math.floor(Math.random()*9);
const imagem6 = Math.floor(Math.random()*9);
const imagem7 = Math.floor(Math.random()*9);
const imagem8 = Math.floor(Math.random()*9);
const imagem9 = Math.floor(Math.random()*9);

let cachorro = 0;
let cavalo = 0;
let galinha = 0;
let gato = 0;
let leao = 0;
let ovelha = 0;
let pato = 0;
let porco = 0;
let vaca = 0;

/* contando animal cachorro*/
if (imagem1 == 0) {
    cachorro = cachorro + 1;
}
if (imagem2 == 0) {
    cachorro = cachorro + 1;
}
if (imagem3 ==  0) {
    cachorro = cachorro + 1;
    
}
if (imagem4 ==  0) {
    cachorro = cachorro + 1;
    
}
if (imagem5 == 0) {
    cachorro = cachorro + 1;
    
}
if (imagem6 == 0) {
    cachorro = cachorro + 1;
    
}
if (imagem7 == 0) {
    cachorro = cachorro + 1;
    
}
if (imagem8 == 0) {
    cachorro = cachorro + 1;
    
}
if (imagem9 == 0) {
    cachorro = cachorro + 1;
    
}else {
    "";
};

/* contando animal cavalo*/

if (imagem1 == 1) {
    cavalo = cavalo + 1;
    
}
if (imagem2 == 1) {
    cavalo = cavalo + 1;
    
}
if (imagem3 ==  1) {
    cavalo = cavalo + 1;
    
}
if (imagem4 ==  1) {
    cavalo = cavalo + 1;
    
}
if (imagem5 == 1) {
    cavalo = cavalo + 1;
    
}
if (imagem6 == 1) {
    cavalo = cavalo + 1;
    
}
if (imagem7 == 1) {
    cavalo = cavalo + 1;
    
}
if (imagem8 == 1) {
    cavalo = cavalo + 1;
    
}
if (imagem9 == 1) {
    cavalo = cavalo + 1;
    
}else {
    "";
};

/* contando animal galinha*/
if (imagem1 == 2) {
    galinha = galinha + 1;
}
if (imagem2 == 2) {
    galinha = galinha + 1;
}
if (imagem3 ==  2) {
    galinha = galinha + 1;
}
if (imagem4 ==  2) {
    galinha = galinha + 1;
}
if (imagem5 == 2) {
    galinha = galinha + 1;
}
if (imagem6 == 2) {
    galinha = galinha + 1;
}
if (imagem7 == 2) {
    galinha = galinha + 1;
}
if (imagem8 == 2) {
    galinha = galinha + 1;
}
if (imagem9 == 2) {
    galinha = galinha + 1;
}else {
    "";
};

/* contando animal gato*/

if (imagem1 == 3) {
    gato = gato + 1;
}
if (imagem2 == 3) {
    gato = gato + 1;
}
if (imagem3 ==  3) {
    gato = gato + 1;
}
if (imagem4 ==  3) {
    gato = gato + 1;
}
if (imagem5 == 3) {
    gato = gato + 1;
}
if (imagem6 == 3) {
    gato = gato + 1;
}
if (imagem7 == 3) {
    gato = gato + 1;
}
if (imagem8 == 3) {
    gato = gato + 1;
}
if (imagem9 == 3) {
    gato = gato + 1;
}else {
    "";
};

/* contando animal leao*/
if (imagem1 == 4) {
    leao = leao + 1;
}
if (imagem2 == 4) {
    leao = leao + 1;
}
if (imagem3 ==  4) {
    leao = leao + 1;
}
if (imagem4 ==  4) {
    leao = leao + 1;
}
if (imagem5 == 4) {
    leao = leao + 1;
}
if (imagem6 == 4) {
    leao = leao + 1;
}
if (imagem7 == 4) {
    leao = leao + 1;
}
if (imagem8 == 4) {
    leao = leao + 1;
}
if (imagem9 == 4) {
    leao = leao + 1;
}else {
    "";
};

/* contando animal ovelha*/

if (imagem1 == 5) {
    ovelha = ovelha + 1;
}
if (imagem2 == 5) {
    ovelha = ovelha + 1;
}
if (imagem3 ==  5) {
    ovelha = ovelha + 1;
}
if (imagem4 ==  5) {
    ovelha = ovelha + 1;
}
if (imagem5 == 5) {
    ovelha = ovelha + 1;
}
if (imagem6 == 5) {
    ovelha = ovelha + 1;
}
if (imagem7 == 5) {
    ovelha = ovelha + 1;
}
if (imagem8 == 5) {
    ovelha = ovelha + 1;
}
if (imagem9 == 5) {
    ovelha = ovelha + 1;
}else {
    "";
};


/* contando animal pato*/
if (imagem1 == 6) {
    pato = pato + 1;
}
if (imagem2 == 6) {
    pato = pato + 1;
}
if (imagem3 ==  6) {
    pato = pato + 1;
}
if (imagem4 ==  6) {
    pato = pato + 1;
}
if (imagem5 == 6) {
    pato = pato + 1;
}
if (imagem6 == 6) {
    pato = pato + 1;
}
if (imagem7 == 6) {
    pato = pato + 1;
}
if (imagem8 == 6) {
    pato = pato + 1;
}
if (imagem9 == 6) {
    pato = pato + 1;
}else {
    "";
};

/* contando animal porco*/

if (imagem1 == 7) {
    porco = porco + 1;
}
if (imagem2 == 7) {
    porco = porco + 1;
}
if (imagem3 ==  7) {
    porco = porco + 1;
}
if (imagem4 ==  7) {
    porco = porco + 1;
}
if (imagem5 == 7) {
    porco = porco + 1;
}
if (imagem6 == 7) {
    porco = porco + 1;
}
if (imagem7 == 7) {
    porco = porco + 1;
}
if (imagem8 == 7) {
    porco = porco + 1;
}
if (imagem9 == 7) {
    porco = porco + 1;
}else {
    "";
};

/* contando animal vaca*/
if (imagem1 == 8) {
    vaca = vaca + 1;
}
if (imagem2 == 8) {
    vaca = vaca + 1;
}
if (imagem3 ==  8) {
    vaca = vaca + 1;
}
if (imagem4 ==  8) {
    vaca = vaca + 1;
}
if (imagem5 == 8) {
    vaca = vaca + 1;
}
if (imagem6 == 8) {
    vaca = vaca + 1;
}
if (imagem7 == 8) {
    vaca = vaca + 1;
}
if (imagem8 == 8) {
    vaca = vaca + 1;
}
if (imagem9 == 8) {
    vaca = vaca + 1;
}else {
    "";
};


/*Cria um parametro que ira exibir
 qual tipo de animal deve ser encontrado*/
 
const respostaS = [];

const avaliacao = setTimeout(() => {
    const titulo = document.getElementById("titulo");
    

    if (cachorro > cavalo && cachorro > galinha && cachorro > gato && cachorro > leao && cachorro > ovelha && cachorro > pato && cachorro > porco && cachorro > vaca) {
        titulo.innerHTML = "Encontre todos os Cachorinhos!";
        
        /*Este For adiciona a array respostaS a quantidade exata de animais que foram gerados.
         servindo assim como parametro para observar se o jogador esta marcando
         apenas os animais selecionados.
         */
        for (let i = 0; i < cachorro; i++) {
            respostaS.push(0);
        };
        
    }
    else if (cavalo > cachorro && cavalo > galinha && cavalo > gato && cavalo > leao && cavalo > ovelha && cavalo > pato && cavalo > porco && cavalo > vaca) {
        titulo.innerHTML = "Encontre todos os Cavalinhos!";
        
        for (let i = 0; i < cavalo; i++) {
            respostaS.push(1);
        };        
    }
    else if (galinha > cachorro && galinha > cavalo && galinha > gato && galinha > leao && galinha > ovelha && galinha > pato && galinha > porco && galinha > vaca) {
        titulo.innerHTML = "Encontre todas as Galinhas";
        
        for (let i = 0; i < galinha; i++) {
            respostaS.push(2);
        };        
    }
   else if (gato > cavalo && gato > galinha && gato > cachorro && gato > leao && gato > ovelha && gato > pato && gato > porco && gato > vaca) {
        titulo.innerHTML = "Encontre todos os Gatinhos!";
        for (let i = 0; i < gato; i++) {
            respostaS.push(3);
        };              
    }
   else if (leao > cavalo && leao > galinha && leao > gato && leao > cachorro && leao > ovelha && leao > pato && leao > porco && leao > vaca) {
        titulo.innerHTML = "Encontre todos os Leoeszinhos!";
        for (let i = 0; i < leao; i++) {
            respostaS.push(4);
        };      
    }
   else if (ovelha > cavalo && ovelha > galinha && ovelha > gato && ovelha > leao && ovelha > cachorro && ovelha > pato && ovelha > porco && ovelha > vaca) {
        titulo.innerHTML = "Encontre todas as Ovelhinhas!";
        for (let i = 0; i < ovelha; i++) {
            respostaS.push(5);
        };      
    }
   else if (pato > cavalo && pato > galinha && pato > gato && pato > leao && pato > ovelha && pato > cachorro && pato > porco && pato > vaca) {
        titulo.innerHTML = "Encontre todos os Patinhos!";
        for (let i = 0; i < pato; i++) {
            respostaS.push(6);
        };      
    }
   else if (porco > cavalo && porco > galinha && porco > gato && porco > leao && porco > ovelha && porco > pato && porco > cachorro && porco > vaca) {
        titulo.innerHTML = "Encontre todos os Porquinhos!";
        for (let i = 0; i < porco; i++) {
            respostaS.push(7);
        };      
    }
   else if (vaca > cavalo && vaca > galinha && vaca > gato && vaca > leao && vaca > ovelha && vaca > pato && vaca > porco && vaca > cachorro) {
        titulo.innerHTML = "Encontre todas as Vaquinhas!";
        for (let i = 0; i < vaca; i++) {
            respostaS.push(8);
        };      
    }else {
        titulo.innerHTML = "Embaralhando";
        setTimeout(() => {
            window.location.href = "./about.html";
        },1000)
       
    };
}, 3000);


const a = document.getElementById("1");
const b = document.getElementById("2");
const c = document.getElementById("3");
const d = document.getElementById("4");
const e = document.getElementById("5");
const f = document.getElementById("6");
const g = document.getElementById("7");
const h = document.getElementById("8");
const i = document.getElementById("9");

a.style.backgroundImage = "url("+ endereco[imagem1] +")";
b.style.backgroundImage = "url("+ endereco[imagem2] +")";
c.style.backgroundImage = "url("+ endereco[imagem3] +")";
d.style.backgroundImage = "url("+ endereco[imagem4] +")";
e.style.backgroundImage = "url("+ endereco[imagem5] +")";
f.style.backgroundImage = "url("+ endereco[imagem6] +")";
g.style.backgroundImage = "url("+ endereco[imagem7] +")";
h.style.backgroundImage = "url("+ endereco[imagem8] +")";
i.style.backgroundImage = "url("+ endereco[imagem9] +")";


setTimeout(() => {
    a.style.backgroundImage = "url(./imagem/nada.png)";
    b.style.backgroundImage = "url(./imagem/nada.png)";
    c.style.backgroundImage = "url(./imagem/nada.png)";
    d.style.backgroundImage = "url(./imagem/nada.png)";
    e.style.backgroundImage = "url(./imagem/nada.png)";
    f.style.backgroundImage = "url(./imagem/nada.png)";
    g.style.backgroundImage = "url(./imagem/nada.png)";
    h.style.backgroundImage = "url(./imagem/nada.png)";
    i.style.backgroundImage = "url(./imagem/nada.png)";

}, 2000);



function marcar1() {
    
    a.style.backgroundImage = "url("+ endereco[imagem1] +")";
    resposta.push(imagem1);
    if (imagem1 == 0) {
        var audio = document.getElementById("cachorro");
        audio.play();
    }
    if (imagem1 == 1) {
        var audio = document.getElementById("cavalo");
        audio.play();
    }
    if (imagem1 == 2) {
        var audio = document.getElementById("galinha");
        audio.play();
    }
    if (imagem1 == 3) {
        var audio = document.getElementById("gato");
        audio.play();
    }
    if (imagem1 == 4) {
        var audio = document.getElementById("leao");
        audio.play();
    }
    if (imagem1 == 5) {
        var audio = document.getElementById("ovelha");
        audio.play();
    }
    if (imagem1 == 6) {
        var audio = document.getElementById("pato");
        audio.play();   
    }
    if (imagem1 == 7) {
        var audio = document.getElementById("porco");
        audio.play();
    }
    if (imagem1 == 8) {
        var audio = document.getElementById("vaca");
        audio.play();
        
    }else {
        "";
    }
    vef();
}
function marcar2() {
    b.style.backgroundImage = "url("+ endereco[imagem2] +")";
    resposta.push(imagem2);
    if (imagem2 == 0) {
        var audio = document.getElementById("cachorro");
        audio.play();
    }
    if (imagem2 == 1) {
        var audio = document.getElementById("cavalo");
        audio.play();
    }
    if (imagem2 == 2) {
        var audio = document.getElementById("galinha");
        audio.play();
    }
    if (imagem1l2 == 3) {
        var audio = document.getElementById("gato");
        audio.play();
    }
    if (imagem2 == 4) {
        var audio = document.getElementById("leao");
        audio.play();
    }
    if (imagem2 == 5) {
        var audio = document.getElementById("ovelha");
        audio.play();
    }
    if (imagem2 == 6) {
        var audio = document.getElementById("pato");
        audio.play();   
    }
    if (imagem2 == 7) {
        var audio = document.getElementById("porco");
        audio.play();
    }
    if (imagem2 == 8) {
        var audio = document.getElementById("vaca");
        audio.play();
        
    }else {
        "";
    };
    vef();
}
function marcar3() {
    c.style.backgroundImage = "url("+ endereco[imagem3] +")";
    resposta.push(imagem3);
    if (imagem3 == 0) {
        var audio = document.getElementById("cachorro");
        audio.play();
    }
    if (imagem3 == 1) {
        var audio = document.getElementById("cavalo");
        audio.play();
    }
    if (imagem3 == 2) {
        var audio = document.getElementById("galinha");
        audio.play();
    }
    if (imagem3 == 3) {
        var audio = document.getElementById("gato");
        audio.play();
    }
    if (imagem3 == 4) {
        var audio = document.getElementById("leao");
        audio.play();
    }
    if (imagem3 == 5) {
        var audio = document.getElementById("ovelha");
        audio.play();
    }
    if (imagem3 == 6) {
        var audio = document.getElementById("pato");
        audio.play();   
    }
    if (imagem3 == 7) {
        var audio = document.getElementById("porco");
        audio.play();
    }
    if (imagem3 == 8) {
        var audio = document.getElementById("vaca");
        audio.play();
        
    }else {
        "";
    };
    vef();
}

function marcar4() {
    d.style.backgroundImage = "url("+ endereco[imagem4] +")";
    resposta.push(imagem4);
    if (imagem4 == 0) {
        var audio = document.getElementById("cachorro");
        audio.play();
    }
    if (imagem4 == 1) {
        var audio = document.getElementById("cavalo");
        audio.play();
    }
    if (imagem4 == 2) {
        var audio = document.getElementById("galinha");
        audio.play();
    }
    if (imagem4 == 3) {
        var audio = document.getElementById("gato");
        audio.play();
    }
    if (imagem4 == 4) {
        var audio = document.getElementById("leao");
        audio.play();
    }
    if (imagem4 == 5) {
        var audio = document.getElementById("ovelha");
        audio.play();
    }
    if (imagem4 == 6) {
        var audio = document.getElementById("pato");
        audio.play();   
    }
    if (imagem4 == 7) {
        var audio = document.getElementById("porco");
        audio.play();
    }
    if (imagem4 == 8) {
        var audio = document.getElementById("vaca");
        audio.play();
        
    }else {
        "";
    };
    vef();
}

function marcar5() {
    e.style.backgroundImage = "url("+ endereco[imagem5] +")";
    resposta.push(imagem5);
    if (imagem5 == 0) {
        var audio = document.getElementById("cachorro");
        audio.play();
    }
    if (imagem5 == 1) {
        var audio = document.getElementById("cavalo");
        audio.play();
    }
    if (imagem5 == 2) {
        var audio = document.getElementById("galinha");
        audio.play();
    }
    if (imagem5 == 3) {
        var audio = document.getElementById("gato");
        audio.play();
    }
    if (imagem5 == 4) {
        var audio = document.getElementById("leao");
        audio.play();
    }
    if (imagem5 == 5) {
        var audio = document.getElementById("ovelha");
        audio.play();
    }
    if (imagem5 == 6) {
        var audio = document.getElementById("pato");
        audio.play();   
    }
    if (imagem5 == 7) {
        var audio = document.getElementById("porco");
        audio.play();
    }
    if (imagem5 == 8) {
        var audio = document.getElementById("vaca");
        audio.play();
        
    }else {
        "";
    };
    vef();
}

function marcar6() {
    f.style.backgroundImage = "url("+ endereco[imagem6] +")";
    resposta.push(imagem6);
    
    if (imagem6 == 0) {
        var audio = document.getElementById("cachorro");
        audio.play();
    }
    if (imagem6 == 1) {
        var audio = document.getElementById("cavalo");
        audio.play();
    }
    if (imagem6 == 2) {
        var audio = document.getElementById("galinha");
        audio.play();
    }
    if (imagem6 == 3) {
        var audio = document.getElementById("gato");
        audio.play();
    }
    if (imagem6 == 4) {
        var audio = document.getElementById("leao");
        audio.play();
    }
    if (imagem6 == 5) {
        var audio = document.getElementById("ovelha");
        audio.play();
    }
    if (imagem6 == 6) {
        var audio = document.getElementById("pato");
        audio.play();   
    }
    if (imagem6 == 7) {
        var audio = document.getElementById("porco");
        audio.play();
    }
    if (imagem6 == 8) {
        var audio = document.getElementById("vaca");
        audio.play();
        
    }else {
        "";
    };
    vef();
}

function marcar7() {
    g.style.backgroundImage = "url("+ endereco[imagem7] +")";
    resposta.push(imagem7);
    if (imagem7 == 0) {
        var audio = document.getElementById("cachorro");
        audio.play();
    }
    if (imagem7 == 1) {
        var audio = document.getElementById("cavalo");
        audio.play();
    }
    if (imagem7 == 2) {
        var audio = document.getElementById("galinha");
        audio.play();
    }
    if (imagem7 == 3) {
        var audio = document.getElementById("gato");
        audio.play();
    }
    if (imagem7 == 4) {
        var audio = document.getElementById("leao");
        audio.play();
    }
    if (imagem7 == 5) {
        var audio = document.getElementById("ovelha");
        audio.play();
    }
    if (imagem7 == 6) {
        var audio = document.getElementById("pato");
        audio.play();   
    }
    if (imagem7 == 7) {
        var audio = document.getElementById("porco");
        audio.play();
    }
    if (imagem7 == 8) {
        var audio = document.getElementById("vaca");
        audio.play();
        
    }else {
        "";
    }; 
    vef();
}

function marcar8() {
    h.style.backgroundImage = "url("+ endereco[imagem8] +")";
    resposta.push(imagem8);
    
    if (imagem8 == 0) {
        var audio = document.getElementById("cachorro");
        audio.play();
        vef();
    }
    if (imagem8 == 1) {
        var audio = document.getElementById("cavalo");
        audio.play();
        vef();
    }
    if (imagem8 == 2) {
        var audio = document.getElementById("galinha");
        audio.play();
        vef();
    }
    if (imagem8 == 3) {
        var audio = document.getElementById("gato");
        audio.play();
        vef();
    }
    if (imagem8 == 4) {
        var audio = document.getElementById("leao");
        audio.play();
        vef();
    }
    if (imagem8 == 5) {
        var audio = document.getElementById("ovelha");
        audio.play();
        vef();
    }
    if (imagem8 == 6) {
        var audio = document.getElementById("pato");
        audio.play();   
        vef();
    }
    if (imagem8 == 7) {
        var audio = document.getElementById("porco");
        audio.play();
        vef();
    }
    if (imagem8 == 8) {
        var audio = document.getElementById("vaca");
        audio.play();
        vef();
        
    }else {
        "";
    }
    vef();
}

function marcar9() {
    i.style.backgroundImage = "url("+ endereco[imagem9] +")";
    resposta.push(imagem9);
    vef();
    if (imagem9 == 0) {
        var audio = document.getElementById("cachorro");
        audio.play();
    }
    if (imagem9 == 1) {
        var audio = document.getElementById("cavalo");
        audio.play();
    }
    if (imagem9 == 2) {
        var audio = document.getElementById("galinha");
        audio.play();
    }
    if (imagem9 == 3) {
        var audio = document.getElementById("gato");
        audio.play();
    }
    if (imagem9 == 4) {
        var audio = document.getElementById("leao");
        audio.play();
    }
    if (imagem9 == 5) {
        var audio = document.getElementById("ovelha");
        audio.play();
    }
    if (imagem9 == 6) {
        var audio = document.getElementById("pato");
        audio.play();   
    }
    if (imagem9 == 7) {
        var audio = document.getElementById("porco");
        audio.play();
    }
    if (imagem9 == 8) {
        var audio = document.getElementById("vaca");
        audio.play();
        
    }else {
        "";
    }
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
                window.location.href = "./about.html";
            }, 2000);
        }
        return true;
    };    

    // Verifica se a 'resposta' é idêntica à 'respostaS'
    if (arraysIguais(resposta, respostaS)) {
        infor.innerHTML = "Certa Resposta!!!";
        setTimeout(() => {
            document.location.href = "./about.html";
        }, 2000);
    } else {
        arraysDiferentes(resposta, respostaS);

    }
}

function game() {
    window.location.href = "./about.html";
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
            <button id="sons" onclick="game2()">Sons</button>
        `;
    } else {
        console.error("Nenhum elemento com a classe 'front' foi encontrado.");
    }
}

