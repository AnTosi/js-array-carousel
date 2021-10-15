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


// ora viene il macello: comincio il/i ciclo/i

//boh, mi dà l'idea che questo mi dovrebbe funzionare ma non è così, ora pusho e mangio
document.getElementById("down").addEventListener ("click", function() {
    for (let i = 0; i < items.length; i++) {
        const heroImage = items[i];
        document.getElementById("imageContainer").innerHTML = `<img src="./assets/${heroImage}" alt=""></img>`;
    }

}
)

