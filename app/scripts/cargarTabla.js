'use strict'

//TABLA

var headerTabla = document.querySelector('#headerTabla')
var contenido = document.querySelector('#contenido')
headerTabla.innerHTML = ''
contenido.innerHTML = ''
var tablaCandidaturas = false;
var tablaOfertas = false;
var texto = document.querySelector('#textoBusqueda')
// CARGAR TABLA CANDIDATURAS
        //TRAER DATOS
        function traer() {
            fetch("../data/candidaturas.json")
                .then(res => res.json())
                .then(datos => {
                    // console.log(datos)
                    tablaCandidaturas = true;
                    tablaOfertas = false;
                    tabla(datos)
                })
        }
        //CREAR TABLA
        function tabla(datos) {
            // console.log(datos)
            headerTabla.innerHTML = ''
            if (!document.getElementById(`headerCandidaturas`))
            headerTabla.innerHTML += `  <tr id="headerCandidaturas">
            <th scope="col">Data Pres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">DNI</th>
            <th scope="col">Telf</th>
            <th scope="col">Email</th>
            <th scope="col">Titulacion</th>
        </tr> `
             contenido.innerHTML = ''
            for(let valor of datos){
                // console.log(valor.nombre)
                if (!document.getElementById(`${valor.idCandidate}`))
                contenido.innerHTML += `

                <tr id=${valor.idCandidate}>
                    <th scope="row">${ valor.dataPresentacion }</th>
                    <td>${ valor.surname }</td>
                    <td>${ valor.dni }</td>
                    <td>${ valor.telf }</td>
                    <td>${ valor.email }</td>
                    <td>${ valor.titulacionPracticas.name }</td>
                </tr>

                `
            }
        }
//BUSCADOR

      function buscar() {
        if(tablaCandidaturas === true){
        fetch("../data/candidaturas.json")
        .then(res => res.json())
        .then(datos => {
          // console.log(datos)
          tablaFilter(datos)

      })}else {
        fetch("../data/ofertas.json")
        .then(res => res.json())
        .then(datos => {
          // console.log(datos)
          tablaFilterOfertas(datos)
      })
      }
      }
      function tablaFilter(datos) {
       // console.log(datos)

  contenido.innerHTML = ''

  for(let valor of datos){
      // console.log(valor.nombre)
      let nombre = valor.surname.toLowerCase();
      let textoBuscar = texto.value.toLowerCase();
      if(nombre.indexOf(textoBuscar) !== -1){
      contenido.innerHTML += `
      <tr>
          <td scope="row">${ valor.dataPresentacion }</td>
          <td>${ valor.surname }</td>
          <td>${ valor.dni }</td>
          <td>${ valor.telf }</td>
          <td>${ valor.email }</td>
          <td>${ valor.titulacionPracticas.name }</td>
      </tr>

      `
  }else{
    contenido.innerHTML += ""
  }
}
}

//TABLA
// CARGAR TABLA OFERTAS
      //TRAER DATOS OFERTAS
        function traerOfertas() {

            fetch("../data/ofertas.json")
                .then(res => res.json())
                .then(datos => {
                  tablaOfertas = true;
                  tablaCandidaturas = false;
                    // console.log(datos)
                    cargarTablaOfertas(datos)
                })
        }
        //CREAR TABLA OFERTAS
        function cargarTablaOfertas(datos) {
            // console.log(datos)
            headerTabla.innerHTML = ''
            if (!document.getElementById(`headerOfertas`))
            headerTabla.innerHTML += `  <tr id="headerOfertas">
            <th scope="col">Data Pres</th>
            <th scope="col">Compañia</th>
            <th scope="col">DNI</th>
            <th scope="col">Telf</th>
            <th scope="col">Email</th>
            <th scope="col">Titulacion</th>
        </tr> `
             contenido.innerHTML = ''
            for(let valor of datos){
                // console.log(valor.nombre)
                if (!document.getElementById(`${valor.idInternshipOffer}`))
                contenido.innerHTML += `

                <tr id=${valor.idInternshipOffer}>
                    <th scope="row">${ valor.dataPresentacion }</th>
                    <td>${ valor.companyData.company }</td>
                    <td>${ valor.companyData.CIF }</td>
                    <td>${ valor.companyData.telf }</td>
                    <td>${ valor.companyData.email }</td>
                    <td>${ valor.requestPrimaryTitulation.name }</td>
                </tr>

                `
            }
        }
//BUSCADOR


      function tablaFilterOfertas(datos) {
       // console.log(datos)

  contenido.innerHTML = ''

  for(let valor of datos){
      // console.log(valor.nombre)
      let nombreCompañia = valor.companyData.company.toLowerCase();
      let textoBuscar = texto.value.toLowerCase();
      if(nombreCompañia.indexOf(textoBuscar) !== -1){
      contenido.innerHTML += `
      <tr>
          <td scope="row">${ valor.dataPresentacion }</td>
          <td>${ valor.companyData.company }</td>
          <td>${ valor.companyData.CIF }</td>
          <td>${ valor.companyData.telf }</td>
          <td>${ valor.companyData.email }</td>
          <td>${ valor.requestPrimaryTitulation.name }</td>
      </tr>

      `
  }else{
    contenido.innerHTML += ""
  }
}
}

/*
document.getElementById("textoBusqueda").addEventListener("focusout", () => {
  if (document.getElementById("textoBusqueda").value === "") {
      tablaProductos.innerHTML = "";
      cargarDatos();
  }
}); */





 /* //NOTAS


 $.getJSON("../data/notas.json", function (json) {
  //Create a HTML div notas
  var div_notes = document.getElementById("asideNotas");


  json["notes"].forEach((elemnt) => {
    var nota = document.createElement("DIV");
    nota.className = "nota";

    var name = document.createElement("DIV");
    name.innerHTML = elemnt.nombre;

    var text = document.createElement("DIV");
    text.innerHTML = elemnt.descripcion;

    nota.appendChild(name);
    nota.appendChild(text);

    div_notes.appendChild(nota);

});
 });



//Nueva Nota

const form = document.getElementById("formulario");

let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");

const formIsValid = {
    nombre: false,
    descripcion: false,
}

const Note= {
    nombre: "",
    descripcion: "",
};

form.addEventListener("submit", e => {
    e.preventDefault();
    validateForm();
});

nombre.addEventListener("change", e => {
    if (e.target.value.trim().length > 0) {
        formIsValid.nombre = true;
        Note.nombre = e.target.value;
    }
});

descripcion.addEventListener("change", e => {
    if (e.target.value.trim().length > 0) {
        formIsValid.descripcion = true;
        Note.descripcion = e.target.value;
    }
});

 const validateForm = () => {
    const formValues = Object.values(formIsValid);
    const valid = formValues.findIndex(value => value == false);
    if (valid == -1) {
        form.submit();
        // Send the request
        var requestURL = '../data/notas.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);


        alert("Nota añadido");

    } else alert("Form invalid");
} */

//MENSAJES
$.getJSON("../data/mensajes.json", function (json) {
  //Create a HTML Table element.
  var div_messages = document.getElementById("asideMensajes");

  json["mensajes"].forEach((elemnt) => {
    var mensaje = document.createElement("DIV");
    mensaje.className = "mensaje";

    var name = document.createElement("DIV");
    name.innerHTML = elemnt.user;

    var text = document.createElement("DIV");
    text.innerHTML = elemnt.descripcion;

    mensaje.appendChild(name);
    mensaje.appendChild(text);

    div_messages.appendChild(mensaje);
  });
});

