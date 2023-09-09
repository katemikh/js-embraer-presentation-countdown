function expoCountdown() {
    const expoDate = new Date ("May 23, 2024 00:00");
    const now = new Date();
    const diff = expoDate - now;
    //console.log(diff);

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(diff/msInDay);
    //console.log(displayDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor ((diff%msInDay)/msInHour);
    //console.log(displayHour);
    document.querySelector(".hours").textContent = displayHour;

 const displayMinute = Math.floor ((diff%msInHour)/msInMinute);
    //console.log(displayMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor ((diff%msInMinute)/msInSecond);
    //console.log(displayMinute);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff<=0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval (timerID);
        meetingEmbraer();
        meetingEmbraerTwo();
    }
    
}
let timerID = setInterval (expoCountdown, 1000);

function meetingEmbraer() {

    const heading = document.querySelector("p");
    heading.textContent = "WE ARE HAPPY TO SEE YOU ON EMRAER STAND #7777 MAY 23-25 , 2022!!! ";
    heading.classList.add("red");

}

function meetingEmbraerTwo() {

    const headingTwo = document.querySelector("h1");
    headingTwo.textContent = "The 2022 European Business Aviation Convention & Exhibition (EBACE2022)!!! MAY 23-25 / GENEVA !!! ";
    headingTwo.classList.add("red");
}

const button = document.querySelector ("#myButton");
button.addEventListener ("click", function() {
    document.querySelector("#myAudio").play();
})

//slides fleet

const items = document.querySelectorAll (".item");
//console.log (items);

items.forEach (item => {
    item.addEventListener ("mouseover", ()=> {
        removeFocus ();
        item.classList.add (`selected`);
        
    })
    removeFocus = () => {
        items.forEach (item => {
        item.classList.remove (`selected`);

    })
}

})
