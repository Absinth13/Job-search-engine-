//const botones = document.querySelectorAll(".button-apply-job");
//queryselector solo se puede aplicar a un elemento
// queryselectorAll es para agregar mas elementos. Siempre devuelve un nodelist (array-like)
//con todos los botones que encuentra o una lista vacia []si no encuentra ninguno.

//botones.forEach((boton) => {
//  boton.textContent = "¡Aplicado!";
// boton.classList.add("is-applied");
//  boton.disabled = true;
//});
//});

//-------------------------------------tercera forma----------
//const jobsListingSection = document.querySelector('.jobs-listings')

//jobsListingSection.addEventListener('click', function(event) {
  //const element = event.target

  //if (element.classList.contains('button-apply-job')) {
  ///  element.textContent = '¡Aplicado!'
   // element.classList.add('is-applied')
   // element.disabled = true
//  }
//})

document.addEventListener("click", function (event) {
  const element = event.target;
  if (element.classList.contains("button-apply-job")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});




//----comentarios con otros eventos interesantes 

//const searchInput = document.querySelector("#empleos-search-input");

//searchInput.addEventListener("input", function () {
//console.log("se dispara cuando el campo pierde el foco");
//});

//const searchForm = document.querySelector("#empleos-search-form");

//searchForm.addEventListener("submit", function (event) {
//event.preventDefault(); //previene que se recargue la página
// console.log("submit");
//});