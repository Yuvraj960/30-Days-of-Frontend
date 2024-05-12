const hamburger_menu = document.querySelector('.hamburger'),
    container = document.querySelector('.container');



    hamburger_menu.addEventListener("click", ()=>
    {
        container.classList.toggle("active");
    })