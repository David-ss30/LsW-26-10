function mudartexto(){
    if(titulo != "color"){
    const titulo = document.getElementById("titulo");

    titulo.textContent = "Olá mundo!";
    titulo.classList.add("titulo");
    titulo.classList.add("color");
    }else{
        const titulo = document.getElementById("titulo");
        titulo.textContet= "Bemvindo!"
        titulo.classList.add("color2")
    }
}