// your code goes here
/* ======================================
   RB Designs Premium Portfolio
====================================== */

// Sticky Navbar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5,5,5,.92)";
        navbar.style.boxShadow = "0 10px 30px rgba(255,0,0,.15)";
        navbar.style.transition = ".3s";

    } else {

        navbar.style.background = "rgba(10,10,10,.72)";
        navbar.style.boxShadow = "none";

    }

});


// Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// Reveal Animation

const revealElements = document.querySelectorAll(
".hero-content,.card,.service,.about-text,form"
);

function reveal(){

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// Smooth Image Hover

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

card.style.transform=
`perspective(900px)
rotateY(${(x-card.clientWidth/2)/30}deg)
rotateX(${-(y-card.clientHeight/2)/30}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});


// Typing Hero Effect

const title=document.querySelector(".hero h3");

const text=title.innerText;

title.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();


// Scroll Progress Bar

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.left="0";
progress.style.top="0";
progress.style.height="3px";
progress.style.width="0%";
progress.style.background="#ff0000";
progress.style.boxShadow="0 0 12px red";
progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight=
document.documentElement.scrollHeight-window.innerHeight;

const progressWidth=
(window.pageYOffset/totalHeight)*100;

progress.style.width=progressWidth+"%";

});


// Footer Year

const year=new Date().getFullYear();

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML=`© ${year} RB Designs. All Rights Reserved.`;

}
