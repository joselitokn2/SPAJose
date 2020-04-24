'use strict'

//TABLA

//const tablaProductos = document.getElementById("cuerpoTabla");

$.getJSON("../data/candidatures.json", function (json) {
  var columnNames = [
    "Fecha Pres.",
    "Apellidos",
    "DNI",
    "Telf",
    "Email",
    "Titulacion",
  ];
  var totalColumns = columnNames.length;

  //Create a HTML Table element.
  var table = document.createElement("TABLE");

  //table.border = "1";
  table.className="table table-hover table-bordered";

  //Add the header row.
  var row = table.insertRow(-1);
  for (var i = 0; i < totalColumns; i++) {
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = columnNames[i];
    row.appendChild(headerCell);
  }

  var datamap = {
    "Fecha Pres.": "dataPresentacion",
    Apellidos: "surname",
    DNI: "dni",
    Telf: "telf",
    Email: "email",
    Titulacion: "test",
  };

  function getData(dataname, idx) {
    if (dataname == "Titulacion") {
      return json["candidatures"][idx]["titulacionPracticas"]["name"];
    } else {
      return json["candidatures"][idx][datamap[dataname]];
    }
  }

  // Add the data rows.
  for (var i = 0; i < json["candidatures"].length; i++) {
    row = table.insertRow(-1);
    columnNames.forEach(function (columnName) {
      var cell = row.insertCell(-1);
      cell.innerHTML = getData(columnName, i);
    });
  }

  var dvTable = document.getElementById("tabla");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);
});

 //NOTAS

/*
 $.getJSON("../data/notas.json", function (json) {
  //Create a HTML div notas
  var div_notes = document.getElementById("asideNotas");

  json["notes"].forEach((nota) => {
    var note = document.createElement("DIV");
    note.className = "note";

    note.innerHTML = nota.name;
    div_notes.appendChild(note);
  });
}); */

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


