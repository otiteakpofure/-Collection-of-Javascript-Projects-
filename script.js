// variable declarations

let btn =  document.querySelector("#new-quote")
let quote = document.querySelector(".quote")
let person = document.querySelector(".person")

const quotes = [
    {
        words:"In the face of inhumanity, a good man reacts, but a great one acts",
        person:"James Rollins",
    },
    {
        words:"Palaces are for the little men not for the great men because great man is humble!",
        person:"Mehmet Murat ildan",
    },
    {
        words:"Greatness lies not in ruling a people, it lies in being the cause of happiness in their lives",
        person:"Abhijit Naskar",
    },
    {
        words:"I have seen great men err and err greatly",
        person:"Bangambiki Habyarimana",
    },
    {
        words: "The greatness of God alone is greater than the greatness of many great men combined.",
        person:"Gift Gugu Mona"
    }

] 

btn.addEventListener("click", function(){
     let random = Math.floor(Math.random() * quotes.length);
     quote.innerText= quotes[random].words;
     person.innerText= quotes[random].person;

})