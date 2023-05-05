const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];




let currentSlide = 1;

document.querySelector("#titolo h2").innerText = images[0].title;
document.querySelector("#titolo h3").innerText = images[0].text;
document.getElementById("slidePrimary").innerHTML = `<img id="firstSlide" class="imgPrimary" src="./img/01.webp" alt="">`;



// THUMBNAILS 
let thumbnailsHTML = "";
for (let i = 0; i < images.length; i++) {
    const element = images[i];
    thumbnailsHTML += `<img class="imgSecondary thumb"  src="${images[i].image}" alt="${images[i].title}"></img>`;
}
document.getElementById("slides").innerHTML = thumbnailsHTML;


//Crea event handlers per le thumb
const thumbnailsElem = document.getElementsByClassName("thumb");
for (let i = 0; i < thumbnailsElem.length; i++) {
    const thumb = thumbnailsElem[i];
    thumb.addEventListener("click", function() {
        cambiaSlide(i+1);
    });
}

//Crea l'event handler per il pulsante previous
document.getElementById("before").addEventListener("click", function(){
    if (currentSlide > 1) {
        cambiaSlide(currentSlide-1);
    }else{
        cambiaSlide(images.length);    
    }
        
});

//Crea l'event handler per il pulsante next
document.getElementById("next").addEventListener("click", function(){
    if (currentSlide < images.length) {
        cambiaSlide( currentSlide+1)
    } else{
        currentSlide = 0;
    }
        

});


function cambiaSlide(toSlide) {
    if(toSlide >= 1 && toSlide <= images.length) {

        currentSlide = toSlide;
        const currentObj = images[toSlide-1];
        document.getElementById("firstSlide").src = currentObj.image;
        document.querySelector("#titolo h2").innerText = currentObj.title;
        document.querySelector("#titolo h3").innerText = currentObj.text;

    } 
}
