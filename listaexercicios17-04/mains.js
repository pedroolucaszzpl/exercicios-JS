function caneta() { //exercicio 01
    alert("Caneta azul...Azul caneta");
}

function cubo() {  //exercicio 02
    let lado = Number(window.prompt("Digite um número"));
    let cubo = lado * lado * lado;
    alert(`O cubo deste número é ${cubo}`);
}

function temp() {  //exercicio 03
    let c = Number(window.prompt("Temperatura em graus Celsius"));
    let k = 273.15;
    let transformation = c + k;
    alert(`Em Kelvin, a temperatura é de ${transformation}`);
}

function area() {  //exercicio 04
    let altura = Number(window.prompt("Digite a altura do triângulo"));
    let base = Number(window.prompt("Digite a base do triângulo"));
    let area = base * altura / 2;

    alert(`A área do triângulo é de ${area}`);
}

function circulo() {  //exercicio 05
    let raio = Number(window.prompt("Digite o raio do círculo"));
    let pi = 3.14;
    let area = raio * raio * pi;
    let perimetro = 2 * pi * raio;

    alert(`A área do círculo é igual a ${area}, o perímetro igual a ${perimetro}`)
}

function number() {  //exercicio 06
    let num = parseInt(window.prompt("Digite um número"));

    if (num % 2 == 0) {
        alert(`Seu número é par`)
    }
    else {
        alert("Seu número é impar")
    }
}

function calculo() {  //exercicio 07
    let num1 = Number(window.prompt("Digite um número"));
    let num2 = Number(window.prompt("Digite o segundo número"));

    let soma = num1 + num2;
    let sub = num1 - num2;
    let multi = num1 * num2;
    let divi = num1 / num2;

    alert(`A soma desses dois números é igual a ${soma}
A subtração é igual a ${sub}
A multiplicação é igual a ${multi}
A divisão é igual a ${divi}`)
}

function montante() {  //exercicio 08
    let inicial = parseInt(window.prompt("Digite seu investimento inicial"));
    let tempo = Number(window.prompt("Digite o tempo de investimento, em meses"));
    let taxa = parseInt(window.prompt("Digite qual a taxa de juros em percentual"));

    let mon = inicial * (1 + taxa) * tempo;
    alert(`O valor do montante é de R$ ${mon}`)
}

function fatorial() {  //exercicio 09
    let fato = parseInt(window.prompt("Digite um número inteiro positivo"));
    let fat = fato

    if (fato == 0 || fato == 1)
        alert("1");

    while (fato > 1) {
        fato--;
        fat *= fato;
    }
    alert(`${fat}`)
}

function personagem() {  //exercicio 10
    let personagem = window.prompt("Escolha um personagem Gumball=1 Tokyo=2 Denver=3");
    let vezes = parseInt(window.prompt("Quantas vezes você quer ver esse personagem"));
    let gumball = "<img src= 'img/gumballimg.jpg'>";
    let tokio = "<img src= 'img/tokioimg.jpg'>";
    let denver = "<img src='img/denverimg.jpg";

    if (personagem == 1) {
        for (let seq = 0; seq < vezes; seq++)
            document.write(gumball)
    } else if (personagem == 2) {
        for (let seq = 0; seq < vezes; seq++)
            document.write(tokio)
    } else if (personagem == 3) {
        for (let seq = 0; seq > vezes; seq++)
            document.write(denver)
    }
}

function primo() { //exercicio 11
    let numero = parseInt(window.prompt("Digite um número"));
    let resposta = document.getElementById('resposta');
    let divisores = 0;

    for (var count = 1; count <= numero; count++)
        if (numero % count == 0)
            divisores++;

    if (divisores == 2)
        alert('É primo');
    else
        alert('Não é primo');

}

function baskara() {  //exercicio 12
    let a = parseInt(window.prompt("Digite o valor A da equação"));
    let b = parseInt(window.prompt("Digite o valor B da equação"));
    let c = parseInt(window.prompt("Digite o valor C da equação"));
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        alert("Sem raízes reais");
    } else {
        let rdelta = Math.sqrt(delta);
        let calculop = (b + Math.sqrt(delta)) / (2 * a);
        let calculon = (b - Math.sqrt(delta)) / (2 * a);

        alert(`As raizes da equação são: ${calculop} e ${calculon}`)
    }
}

function musica(){ //exercicio 13
    const escolha = prompt("Você prefere músicas do estilo: nacional ou internacional?");
    let videoId= "";

    if(escolha.toLowerCase()==="nacional"){
        videoId = "https://youtu.be/prNwKbJNL2g";
    }else if(escolha.toLowerCase()==="internacional"){
        videoID = "https://youtu.be/1G4isv_Fylg";
    }else{
        alert("Escolha inválida!");
        return;
    }

const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
window.open(videoUrl, "_blank");
}

function backg(){ //exercicio 15
    let hex = window.prompt("Digite em hexadecimal uma cor: Exemplo: #000000");
    let element = document.getElementById("container");
    let element2 = document.getElementById("div-img");
    let bombom = '<img src="./img/serenata.png">';
   
    if(hex != null && hex != ""){
    element.style.backgroundColor = (hex);
    element2.innerHTML(bombom);
    }
}

