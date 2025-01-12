/*================ toggle icon navbar =================== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*================ scroll section active link =================== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
        
    });
    /*================ sticky navbar =================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

    /*================ remove toggle icon and navbar =================== */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*================ scroll reveal =================== */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'})
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', {origin: 'button'})
ScrollReveal().reveal('.home-content h1, .about-img, .carousel', {origin: 'left'})
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'})

/*================ typed js =================== */
const typed = new Typed('.multiple-text',{
    strings: ["Frontend Developer", 'Web Designer', 'Photographer', 'Data Analyst', "Financial Analyst"],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
})

/*================ carousel js =================== */
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")
        
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex=slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex=0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })
})
/*================ contact js =================== */
const btn = document.getElementById('contact-button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_iol3sqq';
        var params ={
            from_name : document.getElementById('from_name').value,
            subject : document.getElementById('subject').value,
            email_id : document.getElementById('email_id').value,
            phone_number : document.getElementById('phone_number').value,
            message : document.getElementById('message').value
        }
        
        emailjs.send(serviceID, templateID, params)
        .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
        }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));

    });
});
function reload(){
    var container = document.getElementById("photography");
    var content = container.innerHTML;
    console.log(container,content)
    container.innerHTML= content; 
    console.log("REFRESH")
};
$(document).ready(function(){
    var oldindex;
    // Function to initialize the carousel
    function initCarousel() {
        $('.carousel').carousel({
            onCycleTo: function(data){
                oldindex= $(data).index();
            }
        });
    }
    

    // Initialize the carousel on document ready
    initCarousel();

    // Reinitialize the carousel on window resize
    $(window).resize(function(){

        // Destroy the existing carousel instance (optional)
        $('.carousel').carousel('destroy');

        
        // Reinitialize the carousel
        var currentindex = oldindex;
        initCarousel();
        $('.carousel').carousel('set', currentindex);

    });
    

});
