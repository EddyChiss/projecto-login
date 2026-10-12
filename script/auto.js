senha = document.querySelector("input#senha");
function mostrar_senha(){
    if (senha.type === "password"){
        senha.type = "text"
    }
    else{
        senha.type = "password"
    }
}