// =========================================
// ISSAN FOODS WEBSITE
// script.js
// =========================================

// Mobile Navigation

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

// Close Menu When Clicking a Link

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

// Sticky Navbar

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(17,17,17,.95)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}else{

header.style.background="rgba(17,17,17,.70)";
header.style.boxShadow="none";

}

});

// =========================================
// Scroll Reveal Animation
// =========================================

const hiddenElements=document.querySelectorAll(

".about,.brand-card,.timeline-item,.feature,.stats div,.contact-box div,.investor-content"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.2

});

hiddenElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// =========================================
// Counter Animation
// =========================================

const counters=document.querySelectorAll(".counter");

const speed=80;

const runCounter=(counter)=>{

const target=Number(counter.innerText);

let count=0;

const update=()=>{

const increment=Math.ceil(target/speed);

count+=increment;

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

};

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

},{

threshold:.7

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// =========================================
// Back To Top Button
// =========================================

const topButton=document.createElement("div");

topButton.classList.add("top-btn");

topButton.innerHTML="↑";

document.body.appendChild(topButton);

topButton.style.display="none";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="flex";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// =========================================
// Active Navigation Highlight
// =========================================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active-link");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active-link");

}

});

});

// =========================================
// Smooth Fade Hero
// =========================================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// =========================================
// Optional Floating Effect
// =========================================

const heroLogo=document.querySelector(".hero-logo");

if(heroLogo){

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/60;

const y=(window.innerHeight/2-e.pageY)/60;

heroLogo.style.transform=

`translate(${x}px,${y}px)`;

});

}

// =========================================
// Console Message
// =========================================

console.log(

"🚀 Welcome to Issan Foods Website"

);

console.log(

"Designed with ❤️"

);