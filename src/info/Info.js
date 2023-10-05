import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

export let colors = ["rgb(24, 86, 141)", "rgb(62, 212, 137)"] 

export const info = {
    firstName: "Jeroben",
    lastName: "Guzmán",
    initials: "JG",
    position: "Desarrollador Full Stack",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🌎',
            text: 'En Hermosillo, México'
        },
        {
            emoji: "💼",
            text: "Desarrollador Full Stack Freelancer"
        },
        {
            emoji: "📧",
            text: "jeroguzman@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/jeroguzmanc/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/jeroguzman",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/jeroben-azhael-guzman-castillo-26bb5078/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/j0rbe3n",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Hola soy Jeroben. Soy Ingeniero de Software Freelancer. Soy autodidacta, y disfruto mucho de la lectura, en especial acerca de ciencia y tecnologia, me considero bueno en lo que hago y lo disfruto",
    skills:
        {
            proficientWith: ['javascript', 'react', 'python', 'django', 'ruby on rails', 'nodejs', 'express', 'mongodb', 'postgresql', 'git', 'html', 'css', 'sass', 'mui', 'bootstrap', 'tailwindcss'],
            exposedTo: ['aws', 'firebase', 'docker', 'kubernetes', 'redis', 'socket.io', 'typescript', 'go']
        },
    hobbies: [
        {
            label: 'Lectura',
            emoji: '📖'
        },
        {
            label: 'Juegos TCG',
            emoji: '🃏'
        },
        {
            label: 'Peliculas',
            emoji: '🎥'
        },
        {
            label: 'Anime',
            emoji: '📺'
        }

    ],
    portfolio: [
        {
            title: "Simply OCR",
            live: "https://pypi.org/project/simply-ocr/", 
            source: "https://github.com/jeroguzman/simply-ocr",
            image: mock1
        },
        {
            title: "Perfilador Multibancario",
            live: "https://perfiladormultibancario.com/",
            image: mock2
        },
        {
            title: "Menu Bebidas Jakarta",
            live: "http://menu.jakarta.mx/",
            image: mock3
        },
        {
            title: "climaApp",
            source: "https://github.com/jeroguzman/climaApp",
            image: mock4
        }
    ]
}