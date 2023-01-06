const menu = document.querySelector(".menu");
const button = document.querySelector(".header__mobile");

button.addEventListener("click", () =>{

    if (menu.classList.toggle("active")){
        menu.classList.add('active');
        // body.classList.add('noscroll');
    }else{
        menu.classList.remove('active');
        // body.classList.remove('noscroll');
    }
})
