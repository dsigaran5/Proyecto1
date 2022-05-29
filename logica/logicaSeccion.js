let datos = "https://rickandmortyapi.com/api/character";

function mostrar(data) {
 /*  document.getElementById("nombre").innerText = data[0].name;
  document.getElementById("imagen").src = data[0].image;
 */
  let da = data[0];

  let claves = Object.keys(da)

  /* for(const value in da){
      console.log(da[value]);
      document.getElementById("datos").innerText = value + " " + da[value];
  } */
  for (let index = 0; index < claves.length; index++) {
      const element = claves[index];
      
      console.log(da[element])
      document.getElementById("datos").innerHTML = da[element];
  }

}

fetch(datos)
  .then((response) => response.json())
  .then((data) => mostrar(data.results));
