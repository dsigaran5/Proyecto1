let datos = "https://rickandmortyapi.com/api/character";
fetch(datos)
  .then((response) => response.json())
  .then((data) => cambiar(data.results));
  
  


  
  var x = 0;

  function sumar (x, data){
    if(x === 0){

      console.log( data[0].name, x)
    }
    else if(x === 1){
      console.log( data?.[1].name, x)

    }
    
    
    // console.log();
  
    // console.log(x, data[x].id)
  
    // document.getElementById('cont').innerText = x
    
    
  //   for (let index = 0; index < data.length; index++) {
  //     // let cl = Object.values(data[index].id);
  //     // const element = `${index}${data}`;
  // }
  
  
  // console.log(data);
  
  
  
  
  
  // console.log(data)
  // if (data !== undefined) {
  
  
  
  
  
  //   console.log(cl);
  //   var foo = cl.map(function (bar) {
  //     return `<li>${bar}</li>`
  //   })
  //   document.getElementById("datos").innerHTML = `${foo.join("")}</li>`;
  
  // }
  // console.log(cl.length);

  }  


  
  function cambiar(data) {
    sumar(x++, data)

    

}
