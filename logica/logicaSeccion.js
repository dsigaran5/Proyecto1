let datos = "https://rickandmortyapi.com/api/character";
fetch(datos)
	.then((response) => response.json())
	.then((data) => mostrar(data.results));

  function mostrar(data) {
  let dat = Object.values(data[0]);
  var foo = dat.map(function(bar){
    return `<li>${bar}</li>`
  })
  
	document.getElementById("datos").innerHTML = foo;
}
