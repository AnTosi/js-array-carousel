// devo creare carosello che scorre hero image e rende .active il thumbnail in questione, inoltre cambia il testo della hero image
// per i bottoni servono due event listener
// 

//prima cosa importo gli array gentilmente offerti

//ho cambiato nell'html la parte del testo, ho aggiunto h2 per mettere title (potevo farlo anche da qua nell'innerHTML tbh)

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const itemsRef = document.querySelector(".items");
const thumbsRef = document.querySelector(".thumbs");

let heroImage = ``;
// let thumb = ``;
let active = 0;


// ora viene il macello: comincio il/i ciclo/i

//boh, mi dà l'idea che questo mi dovrebbe funzionare ma non è così, ora pusho e mangio

//provo a mettere i+1 come lunghezza
// let currentImage = items[i];

for (let i = 0; i < title.length; i++) {
    heroImage += `
        <div class="heroImage">
            <div class="imageContainer">
                <img src="./assets/${items[i]}" alt="">
            </div>

            <div class="heroText">
                <h2 class="title">
                    ${title[i]}
                </h2>
                <p class="text">
                    ${text[i]}
                </p>
            </div>
        </div>`;
}


// qua stampo tutto il ciclo sopra, thumb con + perché mi servono tutte insieme
heroImageContainer.innerHTML = heroImage;

document.getElementsByClassName("heroImage")[active].classList.add("active");

document.getElementsByClassName("thumb")[active].classList.add("active");

