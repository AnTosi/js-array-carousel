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

const heroImgCont = document.querySelector(".heroImageContainer");

let heroImage = ``;
// let thumb = ``;
let current = 3;


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
console.log(heroImage);

// qua stampo tutto il ciclo sopra per avere le 5 hero image nascoste
heroImgCont.innerHTML = heroImage;

document.getElementsByClassName("heroImage")[current].classList.add("active");

document.getElementsByClassName("thumb")[current].classList.add("active");

// event listener con freccetta giù
document.getElementById("down").addEventListener ("click", function(){
    //current conta nostra posizione, il if minore a 4 è tentativo per rendere ciclo "infinito"
    if ([current] < 4) {
        ++[current];

    //qua cerco di selezionare "tutte" quelle che hanno active e glie lo levo, poi lo metto alla nostra posizione
        document.querySelector(".heroImage.active").remove("active");
    //uso get el by class name per avere un array di tutti gli elementi con quella classe, così da poter selezionare l'[n-esimo] elemento dell'array
        document.getElementsByClassName("heroImage")[current].classList.add("active");

    //come sopra ma per le foto della thumbnail
        document.querySelector(".thumb.active").remove("active");
        document.getElementsByClassName("thumb")[current].classList.add("active");
    }
})