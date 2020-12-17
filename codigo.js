var contador = 0;
function NuevaPalabra() {
  let contenedorSaludo = document.getElementById("content");

  contenedorSaludo.innerHTML = "Hello there!";

  contador = contador + 1;

  document.getElementById("botonMara").innerHTML =
    "clicked " + contador + " times";

  document.getElementById("contador").value = contador;
}
