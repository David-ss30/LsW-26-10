const titulo = document.getElementById("titulo");
const mensagem = document.querySelector(".mensagem");

console.log(mensagem);
console.log(titulo);

// titulo.textContent = "Novo titulo";
titulo.innerHTML = "<u>Novo titulo</u>";

mensagem.classList.add("erro");


