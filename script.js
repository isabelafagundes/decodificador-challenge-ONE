const btnCripto = document.querySelector('#btn-cripto');
const btnDescri = document.querySelector('#btn-descri');
const exibirMensagem = document.querySelector('#exibir-msg');
const btnCopy = document.querySelector('#copy');
const texto = document.querySelector('#texto');
const imagem = document.querySelector('.imagem');

btnCripto.addEventListener('click', function(e){
    
    e.preventDefault();

    const regex = /\W|_/;
    const mensagem = document.querySelector('#input');
    let mensagemValue = mensagem.value;
    
    if(mensagemValue == ''){
        alert("Digite um texto!");
    }else if(!( mensagemValue == (mensagemValue.toLowerCase()) )){
        alert("Use apenas letras minúsculas!");
    }else if(regex.test(mensagemValue) == true){
        alert("Não use caracteres especiais!");
    }else if(!(mensagemValue == '')){
        criptografar(mensagemValue);
    }

});

btnDescri.addEventListener('click', function(e){

    e.preventDefault();

    const mensagem = document.querySelector('#input');
    let mensagemValue = mensagem.value;
    let textoExibidoValue = document.querySelector('#exibir-msg').innerHTML;
    
    if(mensagemValue == ''){
        alert("Digite um texto!");
        console.log(textoExibidoValue);
    }else if(!( mensagemValue == (mensagemValue.toLowerCase()) )){
        alert("Use apenas letras minúsculas!");
    }else if(regex.test(mensagemValue) == true){
        alert("Não use caracteres especiais!");
    }else if(!(mensagemValue == '')){
        descriptografar(mensagemValue);
        descriptografar(textoExibidoValue);
    }

});

function botaoCopiar(){

    navigator.clipboard.writeText(exibirMensagem.value);
    alert('Texto copiado para a área de transferência !');
    
}


function criptografar(vogal){

        if(vogal.includes('e') || vogal.includes('i') || vogal.includes('a') || vogal.includes('o') || vogal.includes('u')){
            vogal = vogal.replaceAll('e', 'enter');
            vogal = vogal.replaceAll('i', 'imes');
            vogal = vogal.replaceAll('a', 'ai');
            vogal = vogal.replaceAll('o', 'ober');
            vogal = vogal.replaceAll('u', 'ufat');
            exibirMensagem.innerHTML = vogal;
            texto.innerHTML = '';
            mensagemValue = vogal;
            imagem.style.display = 'none';
            btnCopy.style.display = 'flex';
    }
 
}

function descriptografar(palavra){

    if(palavra.includes('enter') || palavra.includes('imes') || palavra.includes('ai') || palavra.includes('ober') || palavra.includes('ufat')){
        palavra = palavra.replaceAll('enter', 'e');
        palavra = palavra.replaceAll('imes', 'i');
        palavra = palavra.replaceAll('ai', 'a');
        palavra = palavra.replaceAll('ober', 'o');
        palavra = palavra.replaceAll('ufat', 'u');
        exibirMensagem.innerHTML = palavra;
        texto.innerHTML = '';
        imagem.style.display = 'none';
        btnCopy.style.display = 'flex';
        mensagemValue = palavra;
    }

}