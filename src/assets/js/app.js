const mainPopUp = document.querySelector(".popUp");


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

//##############################
//##### Form back call #########
//##############################

const   formButton = document.querySelectorAll(".from-back-call"),
        backForm = document.querySelector(".popUp__form"),
        graduateButton = document.querySelector(".form__gratitude"),
        graduateform = document.querySelector(".popUp__gratitude")

formButton.forEach(elem => {
    elem.addEventListener("click", () => {
        mainPopUp.classList.add("active")
        backForm.classList.add("active")
    })
})

graduateButton.addEventListener("click", () => {
    backForm.classList.remove("active")
    graduateform.classList.add("active")
})

//###############################
//####### Slider location #######
//###############################

const   locationButtonNext = document.querySelector("#swiper-button-location-next"),
        locationButtonPrev = document.querySelector("#swiper-button-location-prev"),
        locationNav = document.querySelector(".location__nav"),
        windowWidth = document.documentElement.clientWidth;
        
        let move = 0;

        const doSwipe = (locationNav, move) => { 
            locationNav.style.left = -move + 'px';
        }

        const swiperLocation = (wrapper, moveStep, moveStepMax, buttonNext, buttonPrev) => {

            let move = 0;

            buttonNext.addEventListener('click', () => {
                move += moveStep;
                
                if(move > moveStepMax){
                    move = 0;
                }
            
                doSwipe(wrapper, move);
            });

            buttonPrev.addEventListener('click', () => {
                move -= moveStep;
            
                if(move < 0){
                    move = moveStepMax;
                }
               
                doSwipe(wrapper, move);
            });
        }

        swiperLocation(locationNav, 421, 842, locationButtonNext, locationButtonPrev)

        if (windowWidth <= 1240){
            swiperLocation(locationNav, 285, 570, locationButtonNext, locationButtonPrev)
        }
        if (windowWidth <= 892) {
            swiperLocation(locationNav, 350, 1400, locationButtonNext, locationButtonPrev)
        }
        
        
//##############################
//####### Slider comment #######
//##############################

const   reviewsButtonNext = document.querySelector("#swiper-button-reviews-next"),
        reviewsButtonPrev = document.querySelector("#swiper-button-reviews-prev"),
        reviewsNav = document.querySelector(".reviews__slider-wrapper");

        console.log(reviewsNav);
        
        const swiperReviews = (wrapper, moveStep, moveStepMax, buttonNext, buttonPrev) => {
            let move = 0;

            buttonNext.addEventListener('click', () => {
                move += moveStep;
                
                if(move > moveStepMax){
                    move = 0;
                }

                wrapper.classList.add("slide-move-right")
                
                wrapper.addEventListener("animationend", () =>{
                    wrapper.classList.remove("slide-move-right")
                })
            
                doSwipe(wrapper, move);
            });

            buttonPrev.addEventListener('click', () => {
                move -= moveStep;
            
                if(move < 0){
                    move = moveStepMax;
                }

                wrapper.classList.add("slide-move-left")
                
                wrapper.addEventListener("animationend", () =>{
                    wrapper.classList.remove("slide-move-left")
                })
               
                doSwipe(wrapper, move);
            });

        }

        // console.log(reviewsNav.children[0].children[0].classList.add("slide-move-left"));

        swiperReviews(reviewsNav, 1040, 1041, reviewsButtonNext, reviewsButtonPrev)

        if (windowWidth <= 1240){
            swiperReviews(reviewsNav, 720, 1450, reviewsButtonNext, reviewsButtonPrev)
        }
        if (windowWidth <= 892) {
            swiperReviews(reviewsNav, 360, 1800, reviewsButtonNext, reviewsButtonPrev)
        }


//##############################
//######## Close modal #########
//##############################

const mainClose = document.querySelectorAll(".popUp__close")

const closeModal = () => {
    mainClose.forEach(elem => {
        elem.addEventListener("click", () => {
            mainPopUp.classList.remove("active")
            openPopUpPhoto.classList.remove("active")
            backForm.classList.remove("active")
            graduateform.classList.remove("active")
        })
    })
}

closeModal()

//##############################
//#### Click on button card ####
//##############################

const   numberPhoto = document.querySelectorAll(".card__col"),
        activebuttonFirst = document.querySelectorAll(".card__action_first"),
        openPopUpPhoto = document.querySelector(".popUp__price"),
        photoInput = document.querySelector("#pricePhoto"),
        activeButtonsNumberPhoto = document.querySelectorAll(".card__action-col"),
        makeupArtist = document.querySelectorAll(".makeup-artist"),
        firstCard = document.querySelector(".card__mini"),
        secondCard = document.querySelector(".card__standart"),
        thirdCard = document.querySelector(".card__maxi"),
        buttonSave = document.querySelector(".button-save")


photoInput.oninput = function() {
    this.value = this.value.substr(0, 4);
}                           

const sumPrice = (card, button, buttonSecond) => {
    
    button.addEventListener("click", () => {
        let priceNumber = card.children[1].children[0].innerHTML
       
        button.classList.toggle("active")
        
        if (button.classList.contains("active")) {
            priceNumber = Number(priceNumber) + 2000
            
            card.children[1].children[0].innerHTML = priceNumber
        } else if (!button.classList.contains("active")) {
            priceNumber = Number(priceNumber) - 2000
            
            card.children[1].children[0].innerHTML = priceNumber
        }
        
    })
    
    buttonSecond.addEventListener("click", () => {
        buttonSecond.classList.toggle("active")
    })  

}

let priceMini = firstCard.children[1].children[0].innerHTML,
    priceStandart = secondCard.children[1].children[0].innerHTML,
    priceMaxi = thirdCard.children[1].children[0].innerHTML;

const sumPricePhoto = (card, buttonModal, numberPhoto, priceStart, artist) => {
    function close(mainPopUp, openPopUpPhoto) {
        mainPopUp.classList.remove("active")
        openPopUpPhoto.classList.remove("active")
    }
    
    buttonModal.addEventListener("click", () => {
        photoInput.value = ""
        
        let priceStatic = card.children[1].children[0].innerHTML;
        let finalPrice = 0;

        mainPopUp.classList.add("active")
        openPopUpPhoto.classList.add("active")

        buttonSave.addEventListener("click", () => {

            finalPrice = Number(priceStart) + 250 * photoInput.value
            buttonModal.classList.add("active")

            card.children[1].children[0].innerHTML = finalPrice
            numberPhoto.innerHTML = photoInput.value

            close(mainPopUp, openPopUpPhoto)
            
            if (buttonModal.classList.contains("active") && Number(photoInput.value) === 1 && artist.classList.contains("active")) {
                buttonModal.classList.remove("active")

                card.children[1].children[0].innerHTML = Number(priceStart) + 2000
                numberPhoto.innerHTML = photoInput.value

                close(mainPopUp, openPopUpPhoto)
            } else if (buttonModal.classList.contains("active") && Number(photoInput.value) === 1 && !artist.classList.contains("active")){
                buttonModal.classList.remove("active")

                card.children[1].children[0].innerHTML = priceStart
                numberPhoto.innerHTML = photoInput.value

                close(mainPopUp, openPopUpPhoto)
            }
        })
    }) 
}

const sumPricePhotoMaxi = (card, buttonModal, numberPhoto, priceStart) => {
    function close(mainPopUp, openPopUpPhoto) {
        mainPopUp.classList.remove("active")
        openPopUpPhoto.classList.remove("active")
    }
    
    buttonModal.addEventListener("click", () => {
        photoInput.value = ""
        
        let priceStatic = card.children[1].children[0].innerHTML;
        let finalPrice = 0;

        mainPopUp.classList.add("active")
        openPopUpPhoto.classList.add("active")

        buttonSave.addEventListener("click", () => {

            finalPrice = 0 + 250 * photoInput.value
            buttonModal.classList.add("active")

            card.children[1].children[0].innerHTML = finalPrice
            numberPhoto.innerHTML = photoInput.value

            close(mainPopUp, openPopUpPhoto)

            if (buttonModal.classList.contains("active") && Number(photoInput.value) === 1) {
                buttonModal.classList.remove("active")

                card.children[1].children[0].innerHTML = priceStart
                numberPhoto.innerHTML = photoInput.value

                close(mainPopUp, openPopUpPhoto)
            }
        })
    }) 
}
sumPrice(firstCard, makeupArtist[0], activebuttonFirst[0])
sumPrice(secondCard, makeupArtist[1], activebuttonFirst[1])

sumPricePhoto(firstCard, activeButtonsNumberPhoto[0], numberPhoto[0], priceMini, makeupArtist[0])
sumPricePhoto(secondCard, activeButtonsNumberPhoto[1], numberPhoto[1], priceStandart, makeupArtist[1])
sumPricePhotoMaxi(thirdCard, activeButtonsNumberPhoto[2], numberPhoto[2], priceMaxi)




