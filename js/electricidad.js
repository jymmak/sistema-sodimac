
var imagenes = [
  { title: "Energía", img: "encendido.png", text: "Sistema Óptimo de Electricidad" },
  { title: "Energía", img: "generador.png", text: "Fallas Técnicas de Electricidad, se activo el generador eléctrico y el sistema de alerta por favor llame a mantenimiento." },
];
window.addEventListener("load", function load() {
  var i = Math.floor(Math.random() * imagenes.length);
  /* document.getElementById("box").innerHTML = "<img class='width' src='../assets/img/" + imagenes[i].img+ "' alt='" + imagenes[i].text+ "' /><div class='card text-white bg-danger mb-3' style='max-width: 18rem;'><div class='card-body'><p>" + imagenes[i].text + "</p></div></div>";
   */
  document.getElementById("box").innerHTML = "<div class='card border-info mb-3 text-center'><div class='card-header text-info'>Información</div><div class='card-body text-info'><img class='card-title width'  src='../assets/img/" + imagenes[i].img + "'</h5><p class='card-text'>" + imagenes[i].text + "</p></div></div>";

}, false);