const mySkills = ["Web Developer", "3D Artist", "Graphics Designer", "Color Grading Expert", "Frontend Innovator", "Electronics Engineer"];

var skill = document.querySelector("div.information p.desc span");
var skillIndex = 0;

let renderedTxt = "";
let i = 0;

function renderTextUp(skills) {     //to animate writing text
    let item = skills[skillIndex];
    if(i < item.length) {
        renderedTxt += item[i];
        skill.innerHTML = renderedTxt;
        i++;
        setTimeout(() => {
            renderTextUp(skills);
        }, 50);
    } else {
        setTimeout(() => {
            renderTextDown(skills);
        }, 1500);
    }
}

function renderTextDown(skills) {       //to animate deleting text
    if(i > 0) {
        renderedTxt = renderedTxt.slice(0, -1);
        skill.innerHTML = renderedTxt;
        i--;
        setTimeout(() => {
            renderTextDown(skills);
        }, 50);
    } else {
        setTimeout(() => {
            if(skillIndex < skills.length-1) {
                skillIndex++;
            } else {
                skillIndex = 0;
            }
            i = 0;
            renderedTxt = "";
            renderTextUp(skills);
        }, 1000);
    }
}

setTimeout(() => {      //loop starts here
    renderTextUp(mySkills);
}, 2000);

//to createt active links
let sections = document.querySelectorAll("div.boxes");
let navLinks;

window.onscroll = () => {
    if(window.innerWidth > 630) {
        navLinks = document.querySelectorAll("nav a");
    } else {
        navLinks = document.querySelectorAll("div.link-box a");
    }
    let scrollPosition = window.scrollY + window.innerHeight / 3;

    sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const currentId = section.getAttribute('id');
            // Remove 'active' class from all links and set it on the current section's link
            navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
            }
        });
    }
  });
}

function toggleMenu() {
    let box = document.querySelector("div.link-box");
    if(box.classList.contains("open")) {
        box.classList.remove("open");
    } else {
        box.classList.add("open");
    }
}