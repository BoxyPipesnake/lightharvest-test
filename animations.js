// const carruselContainer = document.querySelector('#carouselExampleIndicators')
// const carruselInner = document.querySelector('.carousel-inner');
const carruselItems = document.querySelectorAll(".carousel-item");
const fondoCarrusel = document.querySelector(".testimonios");
const controls = document.querySelectorAll(".btn-control");

// Función para cambiar el color de fondo según el slide actual
function cambiarColorFondo(slideIndex) {
  if (slideIndex === 0) {
    fondoCarrusel.style.backgroundColor = "rgb(237, 162, 63)";
  } else if (slideIndex === 1) {
    fondoCarrusel.style.backgroundColor = "rgb(56, 128, 84)";
  } else if (slideIndex === 2) {
    fondoCarrusel.style.backgroundColor = "rgb(237, 122, 63)";
  }
}

// Event listener para el cambio automático de slide
document.addEventListener("slid.bs.carousel", function (event) {
  const slideIndex = event.to;
  cambiarColorFondo(slideIndex);
});

// Event listener para los botones de control
controls.forEach((control, position) => {
  control.addEventListener("click", function () {
    // Eliminar la clase 'active' de todos los controles
    controls.forEach((c) => c.classList.remove("active"));
    // Agregar la clase 'active' al control actual
    control.classList.add("active");

    // Obtener el índice del slide actual
    const activeSlideIndex = Array.from(carruselItems).findIndex((item) =>
      item.classList.contains("active")
    );
    cambiarColorFondo(activeSlideIndex);
  });
});

// carruselItems.forEach((item)=> {
//     if(item.classList.contains('active')){

//     }

// })
