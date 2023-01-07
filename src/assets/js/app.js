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

const   buttonOpen = document.querySelectorAll(".button__open");

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


