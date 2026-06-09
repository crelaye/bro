// IMAGE SLIDER

const images = [
  "./ye1.jpeg",
  "./ye2.jpeg",
  "./ye3.jpeg",
  "./ye4.jpeg",
  "./ye5.jpeg",
  "./ye6.jpeg",
  "./ye7.jpeg",
  "./ye8.jpeg",
  "./ye9.jpeg",
  "./ye10.jpeg",
  "./ye11.jpeg",
  "./ye12.jpeg",
  "./ye13.jpeg",
  "./ye14.jpeg",
  "./ye15.jpeg",
  "./ye16.jpeg",
  "./ye17.jpeg",
  "./ye18.jpeg",
  "./ye19.jpeg",
  "./ye20.jpeg",
  "./ye.jpeg",
];

let currentIndex = 0;

const sliderImage =
document.getElementById(
  "sliderImage"
);

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

/* NEXT */

nextBtn.addEventListener(
  "click",
  () => {

    currentIndex++;

    if(
      currentIndex >= images.length
    ){
      currentIndex = 0;
    }

    sliderImage.src =
    images[currentIndex];

  }
);

/* PREVIOUS */

prevBtn.addEventListener(
  "click",
  () => {

    currentIndex--;

    if(currentIndex < 0){
      currentIndex =
      images.length - 1;
    }

    sliderImage.src =
    images[currentIndex];

  }
);



// IMAGE SLIDER

const image = [
  "./acr.jpeg",
  "./acr2.jpeg",
  "./acr1.jpeg",
];

let currentInde = 0;

const sliderImag =
document.getElementById(
  "sliderImag"
);

const nextBt =
document.querySelector(".nxt");

const prevBt =
document.querySelector(".prv");

/* NEXT */

nextBt.addEventListener(
  "click",
  () => {

    currentInde++;

    if(
      currentInde >= image.length
    ){
      currentInde = 0;
    }

    sliderImag.src =
    image[currentInde];

  }
);

/* PREVIOUS */

prevBt.addEventListener(
  "click",
  () => {

    currentInde--;

    if(currentInde < 0){
      currentInde =
      image.length - 1;
    }

    sliderImag.src =
    image[currentInde];

  }
);