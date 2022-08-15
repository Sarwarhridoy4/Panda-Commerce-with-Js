console.log('isConnected')
//Javascript Conneted Successfully

//Assign class
const h2Collecrtion = document.getElementsByTagName("h2");
// console.log(h2Collecrtion);
for(const h2 of h2Collecrtion){
    h2.classList.add("lightblue");
}
//bagpack section
const bagPack = document.getElementById('bags');
// console.log(bagPack);
bagPack.style.backgroundColor ='tomato';

//Card border redious
const Cards = document.getElementsByClassName('card');
// console.log(Cards);
for(const card of Cards){
    // console.log(card);
    card.classList.remove("rounded");
    card.classList.add("bend-corner");
}

//Added Eventlistener to subscribe button

const subscribeButton = document.getElementById('subscribe');
subscribeButton.addEventListener('click',function(){
    console.log('I just got clicked by user..');
})

//Adding EventListenet to all section button to remove buttons
const ShoesSection = document.getElementById('shoes');
// console.log(ShoesSection);
const ShoesButtons = ShoesSection.getElementsByClassName("btn");
// console.log(ShoesButtons);
for(const ShoesButton of ShoesButtons){
    ShoesButton.addEventListener('click', function(event){
        event.target.remove(event.target);
    });
}
const BagsSection = document.getElementById('bags');
// console.log(ShoesSection);
const BagsButtons = BagsSection.getElementsByClassName("btn");
// console.log(ShoesButtons);

for(const BagsButton of BagsButtons){
    BagsButton.addEventListener('click', function(event){
        event.target.remove(event.target);
    });
}

// Change bg of get in touck on dblclick event
const getInTouch = document.getElementById('get-in-touch');
getInTouch.addEventListener('dblclick',function(){
    getInTouch.style.backgroundColor = '#9FF990';
})

// Change image on mouse enter

document.getElementById('change-img').addEventListener('mouseenter',function(){
    const findImage = document.getElementById('change-img');
    findImage.src = '/images/shoes/shoe-1.png';
})
