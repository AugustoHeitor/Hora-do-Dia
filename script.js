function carregar(){
    let caixa1 = window.document.getElementById('caixa1');
    let caixa2 = window.document.getElementById('caixa2');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    var horas = data.getHours();

    caixa1.innerHTML = `Agora são ${horas} horas.`

    if(horas >= 0 && horas < 12){
        img.src = 'imagens/manha.png'
        window.document.body.style =("background-color: green;")
    }else if(horas >= 12 && horas < 18){
        img.src = 'imagens/tarde.png'
        window.document.body.style =("background-color: orange;")
    }else{
        img.src = 'imagens/noite.png'
        window.document.body.style =("background-color: black;")
    }
}