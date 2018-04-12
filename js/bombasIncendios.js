

var imagenes = [
  { t: "58", title:"temperatura",img: "termometro1.png", text: "Temperatura Elevada", img2:"medir.png", presion:"9", text2:"Baja Presión y Sistema de Bomba Activado", img3:"humoSi.png", humo:"Humo Detectado", text3:"Alarma de incendio encendido"},
  { t: "14.7", title:"temperatura",img: "termometro.png", text: "Temperatura Promedio - No hay incendio", img2:"medir.png", presion:"15", text2:"Presión Normal y Sistema de Bomba Desactivado", img3:"humoNo.png", humo:"Humo NO Detectado", text3:"Alarma de incendio Apagado"},
  ];
  window.addEventListener("load", function load(){
  var i = Math.floor(Math.random()*imagenes.length);
  /* document.getElementById("box").innerHTML = "<img class='width' src='../assets/img/" + imagenes[i].img+ "' alt='" + imagenes[i].text+ "' /><div class='card text-white bg-danger mb-3' style='max-width: 18rem;'><div class='card-body'><p>" + imagenes[i].text + "</p></div></div>";
   */
  document.getElementById("tem").innerHTML = "<div class='card border-info mb-3 text-center'><div class='card-header text-info'>Temperatura</div><div class='card-body text-info'><img class='card-title width'  src='../assets/img/" + imagenes[i].img+ "'</h5><p class='card-text'>"+'T:'+imagenes[i].t+'°'+'C'+"</p>"+imagenes[i].text+"</div></div>";
    document.getElementById("pres").innerHTML = "<div class='card border-info mb-3 text-center'><div class='card-header text-info'>Presión</div><div class='card-body text-info'><img class='card-title width'  src='../assets/img/" + imagenes[i].img2+ "'</h5><p class='card-text'>"+'P:'+imagenes[i].presion+' PSI'+"</p>"+imagenes[i].text2+"</div></div>";
    document.getElementById("humo").innerHTML = "<div class='card border-info mb-3 text-center'><div class='card-header text-info'>Humo</div><div class='card-body text-info'><img class='card-title width'  src='../assets/img/" + imagenes[i].img3+ "'</h5><p class='card-text'>"+imagenes[i].humo+"</p>"+imagenes[i].text3+"</div></div>";
    
  },false);