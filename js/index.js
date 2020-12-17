//Loader 
window.addEventListener('load', ()=> {
    //Animations

    let controller = new ScrollMagic.Controller();
    let timeLine = new TimelineMax();

    const loader = document.querySelector('.loader');
    const navLinks = document.querySelectorAll('.nav--link');
    const heroHeading = document.querySelector('.hero--heading');
    const heroParagraph = document.querySelector('.hero--paragraph');
    const heroLine = document.querySelector('.hero__line');
    const socialIcon = document.querySelectorAll('.hero__social a');
    const heroImg = document.querySelector('.hero__img');
    const language = document.querySelectorAll('.language button');
    const oMeniHeading = document.querySelector('.o-meni--heading');
    const oMeniParagraph = document.querySelectorAll('.o-meni p');
    const oMeniHeadingSamll = document.querySelectorAll('.o-meni h5');
    const oMeniListItems = document.querySelectorAll('.o-meni ul li');
    const oMeniImg = document.querySelector('.o-meni-img');
    const parallaxImg = document.querySelector('.parallax__img');
    const uslugeHeading = document.querySelector('.usluge--heading');
    const box = document.querySelector('.box');
    const uslugeBoxes = document.querySelectorAll('.usluge .grid__item');

    //Close navigation 
    navLinks.forEach(link => {
        link.addEventListener('click', ()=> {
            nav.classList.remove('nav--open');
            closeNavMenuLines();
        })
    })

    //Loader
    timeLine
    .to(loader, 1, {
        y: '-100%',
        ease: Power3.easeOut
    })

    //Hero Line
    .from(heroLine, .3, {
        width: '0px',
        ease: Power3.ease
    })

    //Hero Text
    .staggerFrom([heroHeading, heroParagraph], .45, {
        y: '35px',
        opacity: 0,
        ease: Power3.ease
    },0.5)

    //Navigation
    .staggerFrom(navLinks, .5, {
        y: '-25px',
        opacity: 0,
        ease: Power3.ease
    },0.2)

    //Social
    .staggerFrom(socialIcon, .5, {
        opacity: 0,
        ease: Power3.ease
    },.2)

    //Language
    .staggerFrom(language, .5, {
        opacity: 0,
        ease: Power3.ease
    },.2)

    //Hero image
    .from(heroImg,.5,{
        opacity: 0,
        scale: 1.5,
        ease: Power3.ease
    })

    let scene = new ScrollMagic.Scene({
        triggerHook: 0
    })

    .setTween(timeLine)
    .addTo(controller)

    //TimeLine 2

    let timeLine2 = new TimelineMax();

    //O meni heading
    timeLine2
    .from(oMeniHeading, .5, {
        y: '35px',
        opacity: 0,
        ease: Power3.ease
    })

    //o meni p
    .staggerFrom([oMeniParagraph],.5,{
        y: '-25px',
        opacity: 0,
        ease: Power3.ease
    },.2)

    //o meni img
    .from(oMeniImg,.5,{
        opacity: 0,
        ease: Power3.ease
    })

    //o meni h5
    .staggerFrom([oMeniHeadingSamll],.5,{
        y: '15px',
        opacity: 0,
        ease: Power3.ease
    },.2)
     
    //o meni ul li
    .staggerFrom([oMeniListItems],.5,{
        y: '-15px',
        opacity: 0,
        ease: Power3.ease
    },.2)


    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.o-meni',
        triggerHook: '300px'
    })

    .setTween(timeLine2)
    .addTo(controller)

    //TimeLine3

    let timeLine3 = new TimelineMax();

    //Parallax img
    timeLine3
    .from(parallaxImg, .5, {
        opacity: 0,
        ease: Power3.ease
    })

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.parallax',
        triggerHook: '100px'
    })

    .setTween(timeLine3)
    .addTo(controller)

    //TimeLine4

    let timeLine4 = new TimelineMax();

    //usluge h2
    timeLine4
    .from(uslugeHeading, .5, {
        y: '35px',
        opacity: 0,
        ease: Power3.ease
    })

    //usluge box
    .from(box,.5,{
        opacity: 0,
        ease: Power3.ease
    })

    //usluge grid items
    .staggerFrom(uslugeBoxes,.5,{
        y: '15px',
        opacity: 0,
        ease: Power3.ease
    },.25)

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.usluge',
        triggerHook: '100px'
    })

    .setTween(timeLine4)
    .addTo(controller)
});

function openNavMenuLines(){
    menuLineTop.classList.add('menu__line--top--open');
    menuLineMid.classList.add('menu__line--mid--open');
    menuLineBottom.classList.add('menu__line--bottom--open');
}

function closeNavMenuLines(){
    menuLineTop.classList.remove('menu__line--top--open');
    menuLineMid.classList.remove('menu__line--mid--open');
    menuLineBottom.classList.remove('menu__line--bottom--open');
}

//Navigation
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const menuLineTop = document.querySelector('.menu__line--top');
const menuLineMid = document.querySelector('.menu__line--mid');
const menuLineBottom = document.querySelector('.menu__line--bottom');

menu.addEventListener('click', ()=> {
    nav.classList.toggle('nav--open');

    //Menu lines animation
    if(nav.classList.contains('nav--open')) {
       openNavMenuLines();
    } else {
        closeNavMenuLines();
    }
})



//Language active btn
var btns = document.querySelectorAll(".lang-btn");

Array.from(btns).forEach(item => {

   item.addEventListener("click", () => {

      var selected = document.getElementsByClassName("active");
      selected[0].className = selected[0].className.replace(" active", "");
      item.className += " active";

   });

});


//Add fixed header on scroll
window.addEventListener('scroll', ()=> {
    let wScroll = window.pageYOffset;
    const header = document.querySelector('.header');
    const navLogo = document.querySelector('.nav--logo');
    const logo = document.querySelector('.logo');

    if(wScroll > 100) {
        navLogo.style.transform = 'scale(0.65)';
        logo.style.transform = 'scale(0.8)';
        header.classList.add('header--scroll');

    } else {
        navLogo.style.transform = 'scale(1)';
        logo.style.transform = 'scale(1)';
        header.classList.remove('header--scroll');  
    }
})

/*Footer year*/
let footerYear = document.querySelector('.year');
let date = new Date;
let currentYear = date.getFullYear();
footerYear.textContent = currentYear;
