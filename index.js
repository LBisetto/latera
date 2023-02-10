
document.getElementById('buttonLogin1').addEventListener('click', function(){
    closeLogin();
});
      
document.getElementById('closeLogin').addEventListener('click', function(){
    closeLogin();
});

document.getElementById('closeSingup').addEventListener('click', function(){
    closeSingup();
});

document.getElementById('buttonSingup1').addEventListener('click', function(){
    closeSingup();
});


function closeLogin(){
    document.getElementById("checkLogin").click();
    if(document.getElementById("checkSingup").checked){
        document.getElementById("checkSingup").click(); 
    }
}

function closeSingup(){
    document.getElementById("checkSingup").click();
    if(document.getElementById("checkLogin").checked){
        document.getElementById("checkLogin").click(); 
    }
}


/* Registro */ 


function validarRegistro(){
    let nome = frmSingup.nome.value
    let senha = frmSingup.senha.value
    let cSenha = frmSingup.cSenha.value
    let email = frmSingup.email.value

    if(validarNome(nome,4,15)){
        displayReset()
        document.getElementById("frmSingupNomeErro").innerHTML = "Preencha o campo Usuário com um valor válido!";
        frmSingup.nome.focus()
        document.getElementById("frmSingupNome").style.borderColor = "#ff0000";
        return false
        
    }else if(validaSenha(senha,cSenha,8)){
        displayReset()
        document.getElementById("frmSingupSenhaErro").innerHTML = "Preencha o campo com um valor válido!";
        document.getElementById("frmSingupcSenhaErro").innerHTML = "Preencha o campo com um valor válido!";
        frmSingup.senha.focus()
        document.getElementById("frmSingupSenha").style.borderColor = "#ff0000";
        document.getElementById("frmSingupcSenha").style.borderColor = "#ff0000";
        return false
        
    }else if(validarEmail(email,50)){
        displayReset()
        document.getElementById("frmSingupEmailErro").innerHTML = "Preencha o campo Email com um valor válido!";
        frmSingup.email.focus()
        document.getElementById("frmSingupEmail").style.borderColor = "#ff0000";
    }else{
        document.forms["frmSingup"].submit()
    }
    
    
}


function validarNome(input, tamanhoMim,tamanhiMax) {
    if(input.length === 0 ){
        return true
    }
    else if( input.length > tamanhiMax) {
        return true
    }else if(input.length < tamanhoMim){
        return true
    }
    var pattern = /^[a-zA-Z0-9 ._]*$/;
    return !pattern.test(input);
}

function validaSenha(senha, cSenha, tamanho){
    if((senha.length === 0) || (cSenha.length === 0)){
        return true

    }
    else if(senha.length < tamanho) {
        return true
    }
    else if(senha !== cSenha){
        return true
    }
    else{
        return false
    }
}


function validarEmail(input, tamanho) {
    if(input.length === 0 ){
        return true
    }
    else if( input.length > tamanho) {
        return true
    }else if(!(input.includes("@")) || !(input.includes("."))){
        return true
    }
    var pattern = /^[a-zA-Z0-9 @._]*$/;
    return !pattern.test(input);
}

function displayReset(){
    document.getElementById("frmSingupNomeErro").innerHTML = "";
    document.getElementById("frmSingupSenhaErro").innerHTML = "";
    document.getElementById("frmSingupcSenhaErro").innerHTML = "";
    document.getElementById("frmSingupEmailErro").innerHTML = "";

    document.getElementById("frmSingupNome").style.borderColor = "#66bbff";
    document.getElementById("frmSingupSenha").style.borderColor = "#66bbff";
    document.getElementById("frmSingupcSenha").style.borderColor = "#66bbff";
    document.getElementById("frmSingupEmail").style.borderColor = "#66bbff";
}