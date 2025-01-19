var projectsBox = document.getElementById("projects");
const allProjects = [
    {
        src: "images/projects/tic.png",
        pName: "Tic Tac Toe",
        descr: "Tic Tac Toe is a pass and play game developed by me. Try choosing a variety of Avtars and usernames. Just an effort to make your time fun with friends. Don't forget to check it out and leave a review !",
        url: "https://swaraj-creator.github.io/Tic-Tac-Toe/"
    }, {
        src: "images/projects/beatify.png",
        pName: "Beatify - Music Player",
        descr: "Beatify is not just a music player, I tried to make it a whole vibe, with the all new Neumorphism UI! From streaming songs to saving them in you favourites, everything has to be made possible soon...",
        url: ""
    }, {
        src: "images/projects/car.png",
        pName: "Car Dash",
        descr: "Car Dash... as per the name, is a car game made for fun. Try a variety of Exclusive Cars, Roads and Maps to run. Just make sure you maintain the speed & don't crash over other drivers..! And yeah, Don't forget the Fuel.",
        url: ""
    }, {
        src: "images/projects/search.png",
        pName: "Custom Chrome Homepage",
        descr: "Are you bored of your boring Browser HomePage? Well, I have found a solution just like this one. Creating a custom page, adding all useful and favourite websites & setting up directory as default. Sounds Cool...?",
        url: ""
    }, {
        src: "images/projects/aspirion.png",
        pName: "Aspirion - Chat App",
        descr: "Aspirion is an all new Eyes-Pleasing Glassmorphism UI based Chatting Application. Here, you can connect with your Friends, or chat in groups. Don't forget trying out different Wallpapers...!",
        url: ""
    }, {
        src: "images/projects/snake.png",
        pName: "Snakes & Ladders",
        descr: "Just trying to do something creative and got an idea of this one. A console based Snake & Ladders game, which prints the board every time the players have their turn. Have Fun with Coder-Like-Vibe !",
        url: "https://github.com/Swaraj-creator/Snakes-Ladders-Python"
    }
];

const allSkills = ["JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind", "DSA", "Git", "React.js", "Node.js", "Three.js", "WebGL", "MySQL", "Adobe Lightroom", "Blender 3d", "Python", "Kali Linux", "Davinci Resolve", "Arduino IDE", "C++", "Java", "Android Studio", "Open CV", "Pygame", "JSX", "Microsoft Office"];
var skillsBox = document.getElementById("skills");

function createProjects() {
    for(let i=0; i<allProjects.length; i++) {
        let item;
        if(allProjects[i].url == "") {
            item = `<div class="project-item">
                        <div class="img" style="background-image: url('${allProjects[i].src}');">
                            <span class="unpublished">Launching Soon</span>
                        </div>
                        <p class="project-name">${allProjects[i].pName}</p>
                        <p class="desc">${allProjects[i].descr}</p>
                        <a class="disabled"><span>Check Out</span></a>
                    </div>`;
        } else {
            item = `<div class="project-item">
                        <div class="img" style="background-image: url('${allProjects[i].src}');">
                            <span class="published">Published</span>
                        </div>
                        <p class="project-name">${allProjects[i].pName}</p>
                        <p class="desc">${allProjects[i].descr}</p>
                        <a href="${allProjects[i].url}"><span>Check Out</span></a>
                    </div>`;
        }
    
        projectsBox.insertAdjacentHTML("beforeend", item);
    }

    projectsBox.insertAdjacentHTML("beforeend", "<p class='creative-txt'>Fun fact: You’re currently scrolling through one of my Best Creations...!</p>");
}

for(let i=0; i<allSkills.length; i++) {
    let item = `<span class="skillItem">${allSkills[i]}</span>`;
    skillsBox.insertAdjacentHTML("beforeend", item);
}

createProjects();
