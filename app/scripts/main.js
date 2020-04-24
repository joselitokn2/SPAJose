console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
'use strict'
// Store
//localStorage.lastname = "Smith";
// Retrieve
//document.getElementById("result").innerHTML = localStorage.lastname;
var anhadirNotas = document.getElementById(anhadirNotas);
anhadirNotas.addEventListener

anhadirNotas.addEventListener("click", e => {
  e.preventDefault();
  modal();
});

/*
function guardarNota() {
modal.style.display = "none";
//Guarda contenido
var tituloNota = document.getElementById("tituloNota").value;
var cuerpoNota = document.getElementById("cuerpoNota").value;

if (tituloNota !== "" && cuerpoNota !== "") {
var nota = new Nota(tituloNota, cuerpoNota);
console.log(nota.tituloNota);
console.log(nota.cuerpoNota);

notasGuardadas.push(nota);
console.log(notasGuardadas);
}

if (notasGuardadas.length > 0) {

var notes = document.getElementById("notes");

var card = document.createElement("div");
card.classList.add("card");
card.classList.add("m-1");
card.setAttribute("id", tituloNota);

notes.appendChild(card);

var cardBody = document.createElement("div");
cardBody.classList.add("card-body");

card.appendChild(cardBody);

var cardTitle = document.createElement("h5");
cardTitle.classList.add("card-title");
cardTitle.appendChild(document.createTextNode(tituloNota));

cardBody.appendChild(cardTitle);

var cardText = document.createElement("p");
cardText.classList.add("card-text");
cardText.appendChild(document.createTextNode(cuerpoNota));

cardBody.appendChild(cardText);

var cardBtn = document.createElement("button");
cardBtn.classList.add("btn");
cardBtn.appendChild(document.createTextNode("Eliminar"));

cardBtn.onclick = function() {
  var i = notasGuardadas.indexOf(nota);
  if (i !== -1) {
      notasGuardadas.splice(i, 1);
  }
  console.log(notasGuardadas);
}



cardBody.appendChild(cardBtn);
}
}
 */
