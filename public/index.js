'use strict';

const cards = [
    {
        id: 1,
        name: "2) naruto uzumaki",
        img: "images/naruto3thumb.jpg",
        text: "Naruto started off as a goofy kid who liked to play pranks on everyone. However, he was suffering too, as the people of Konoha used to see him as a monster. Refusing to get bogged down, he promised to become the Hokage, and that too, the strongest of all time."
    },
    {
        id:2,
        name:"3) sasuke uchiha",
        img: "images/sasuke.jpg",
        text: "After witnessing the massacre of the entire Uchiha clan at the hands of his elder brother, Itachi, Sasuke became vengeful to the core. At a tender age, he was deeply traumatized and held on to a grudge against his brother. Sasuke toiled in the dark and honed his Uchiha prowess."
    },
    {
        id: 3,
        name: "4) hashirama senju",
        img: "images/senju.png",
        text: "The title “God of Shinobis” speaks volumes about Hashirama’s strength. He was the first person to start the Kage system and also became the first Hokage of Konoha. Hashirama was proficient enough to perform complex Jutsus without the need for hand seals."
    },
    {
        id: 4,
        name: "5) madara uchiha",
        img: "images/madara.jpeg",
        text: "Madara is a legendary warrior whose name still evokes nightmares for many. He was the only person capable enough to go against Hashirama Senju. After attaining mastery over Magekyo Sharingan, Madara was able to control Nine-Tails with ease."
    },
    {
        id: 5,
        name: "6) might guy",
        img: "images/might.jpg",
        text: "might Guy lacked skills in Ninjutsu and never really managed to pass the academy like the others. However, he trained rigorously and pushed himself beyond his limits to attain unparalleled physical strength."

    },
    {
        id: 6,
        name: "7) obito uchiha",
        img: "images/obito2.jpg",
        text: "In his childhood, Obito was inefficient in all aspects of a Shinobi, be it Ninjutsu, Taijutsu, or even his clan’s Kekkei Genkai Dojutsu: Sharingan. During the Third Great Ninja War, he was proclaimed dead after being crushed by a giant boulder, but Madara Uchiha saved him and took him under his tutelage."
    },
    {
        id: 7,
        name: "8) nagato uzumaki",
        img: "images/nagato.jpg",
        text: "Although Nagato was kind and stated to be the Child of Prophecy, the death of his beloved friend Yahiko took a heavy toll on him, making him the very person he hated."
    },
    {
        id: 8,
        name: "9) itachi uchiha",
        img: "images/itachi.jpg",
        text: "Itachi was a born prodigy of the Uchiha clan. Even at a tender age, he used to think like Hokage. He became an ANBU at the age of 11, and subsequently, in just two years, he managed to become the captain of his team."

    },
    {
        id: 9,
        name:"10) kakashi hatake",
        img: "images/kakashi.jpg",
        text:"Kakashi has been a genius since his childhood. As a Genin, he outsmarted many Jonin-level Shinobis with ease. After the death of Rin and Obito, Kakashi detached himself from the world he lived in and carried an omnipresent rage, which made him a ruthless shinobi in the ANBU Division."
    }

];

const cardImg = document.getElementById("person-img");
const characterName = document.getElementById("character");
const cardInfo = document.getElementById("info");

// select the button
const prevBtn = document.querySelector(".prev-btn");
const nxtBtn = document.querySelector(".next-btn");

let curItem = 0;

const showCard = function(card){
    const item = cards[card];
    cardImg.src = item.img;
    characterName.textContent = item.name;
    cardInfo.textContent = item.text; 

};

// load intial item
// window.addEventListener("DOMContentLoaded", function(){
//     // console.log("bakdjk")
//     showCard(curItem);
    
// });

// show next card
nxtBtn.addEventListener("click", function(){
    curItem++;
    if (curItem > cards.length - 1){
        curItem = 0;
    }
    showCard(curItem);   
});

// prev btn
prevBtn.addEventListener("click", function(){
    curItem--;
    if(curItem < 0){
        curItem = cards.length - 1;
    }

    showCard(curItem)
})
