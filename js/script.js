


const learnMoreBtn= document.querySelector('.learn-more');
const sectionHow= document.querySelector('.section-how');
const linksContainer= document.querySelector('.main-nav-list');
const featuredSection= document.querySelector('.section-featured');
const header= document.querySelector('.header')

learnMoreBtn.addEventListener('click', function() {

    sectionHow.scrollIntoView({
        behavior: 'smooth'
    })
})


linksContainer.addEventListener('click',function(e) {
    e.preventDefault()
    const link= e.target

    if(!link.classList.contains('main-nav-link')) return;

    console.log(link);

    document.querySelector(`.${link.getAttribute('href')}`).scrollIntoView({
        behavior: 'smooth'
    })
});



// const stickyNav= function(entries, observer) {
//     const [entry]= entries;
//     if(!entry.isIntersecting) 
//     header.classList.add('nav-fixed');

//     else  
//     header.classList.remove('nav-fixed');

// }


// const navObserver= new IntersectionObserver(stickyNav, {
//     root: null,
//     threshold: 0,
//     rootMargin: '100px'

// });


// navObserver.observe(sectionHow)



const navIconContainer= document.querySelector('.btn-mobile-nav');
const navIcon= document.querySelectorAll('.icon-mobile-nav')


navIconContainer.addEventListener('click', function(e) {
    console.log(e.target.getAttribute('name'), "Event");


    navIcon.forEach((icon)=> {
       icon.style.display='block'
    });

    e.target.style.display= 'none';


    if(e.target.getAttribute('name') == 'menu-outline') {
      document.querySelector('header').classList.add('nav-open');
    }else {
        document.querySelector('header').classList.remove('nav-open')

    }

})


