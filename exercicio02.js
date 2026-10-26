function destacarMensagem(){
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = ("ISSO É UMA MENSAGEM");
    mensagem.classList.toggle("destaque");
}
