const navSlide = ()=> {
        const menu = document.querySelector('.menu');
        const header = document.querySelector('.nav__links');
    
        menu.addEventListener('click', ()=>{
            header.classList.toggle('nav-active');
        });
    }
    
    navSlide();