// open mobile menu

const   menu = document.querySelector(".menu"),
        button = document.querySelector(".header__mobile");

button.addEventListener("click", () =>{
    if (menu.classList.toggle("active")){
        menu.classList.add('active');
        // body.classList.add('noscroll');
    }else{
        menu.classList.remove('active');
        // body.classList.remove('noscroll');
    }
})


// Open block about 
import Swiper from 'swiper';

const buttonOpen = document.querySelectorAll(".button__open");

buttonOpen.forEach(elem => {
    elem.addEventListener("click", () => {
            console.log( );
            if (elem.classList.toggle('active')){
                elem.classList.add('active')
                elem.parentElement.parentElement.classList.add('active')
            }
            else {
                elem.classList.remove('active')
                elem.parentElement.parentElement.classList.remove('active')
            }
        }
    )
});

const   btnLocationNext = document.querySelector("#swiper-button-location-next"),
        btnLocationPrev = document.querySelector("#swiper-button-location-prev"),
        locationItems = document.querySelectorAll('.location__item'),
        locationItem = document.querySelector('.location__item');

let windowWidth = window.screen.width;


if (windowWidth >= 1240) {
    let widthSlide = locationItem.scrollWidth + 26;

    btnLocationNext.addEventListener("click", () => {
        locationItems.forEach(elem => {
            elem.style.left = widthSlide + 'px';
        });
        
    })
}

//Главный слайдер на странице 

// const   next = document.getElementById('button__next'),
//         prev = document.getElementById('button__pre'),
//         slides = document.querySelectorAll('.slide__block'),
//         dots   = document.querySelectorAll('.dots');


// let index = 0;

// const activeSlide = n => {
//     for(slide of slides){
//         slide.classList.remove('active');
//     }
//     slides[n].classList.add('active');
// }

// const activeDot = n => {
//     for(dot of dots){
//         dot.classList.remove('dots-active');
//     }
//     dots[n].classList.add('dots-active');
// }

// const prepareCurrentSlide = ind =>{
//     activeSlide(ind);
//     activeDot(ind);
// }

// const nextSlide = () =>{
//     if(index == slides.length - 1){
//         index = 0;
//         prepareCurrentSlide(index);
//     }else{
//         index++;
//         prepareCurrentSlide(index);
//     }
// }

// const prevSlide = () => {
//     if(index == 0){
//         index = slides.length - 1;
//         prepareCurrentSlide(index);
//     }else{
//         index--;
//         prepareCurrentSlide(index);
//     }
// }

// // dots.forEach((item, indexDot) => {
// //     item = addEventListener('click', () =>{
// //         index = indexDot;
// //         prepareCurrentSlide(index);
// //     })
// // })

// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);


// setInterval(nextSlide, 10000)





