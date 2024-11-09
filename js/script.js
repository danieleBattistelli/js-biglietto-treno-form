//seleziono tutti gli input

const formElem = document.getElementById("user-form");
//console.log(formElem);
const nameInput = document.getElementById("username");
//console.log(username);
const distanceInput = document.getElementById("distance");
//console.log(distanceInput);
const ageInput = document.getElementById("age");
//console.log(ageInput);

//Elementi della card

const userName = document.getElementById("username-card");
const discountCard = document.getElementById("discount-card");
const carriage = document.getElementById("carriage-card");
//genero carriage card
let carriageCard= Math.floor(Math.random() * (10-1 +1))+1;
console.log(carriageCard);

const code = document.getElementById("code-card");
//genero code-card
let codeCard = Math.floor(Math.random() * (100000-1 +1))+1;
console.log(codeCard);
const price = document.getElementById("ticket-price-card");


//  event click sul bottone

formElem.addEventListener("submit", function (event){
    event.preventDefault();
    
    //prelevo tutti i valori dal form
    const age = ageInput.value.trim();
    const distance = distanceInput.value.trim();
    const name = nameInput.value.trim();

    let totalPrice;
    let partialPrice = (0.21 * parseInt(distance))
    //console.log(parseInt(distance));

    //console.log(typeof distance)

    let discount;
    if(parseInt(age)<18){
        discount = (partialPrice * 20)/ 100
    }else if(parseInt(age)>65){
        discount = (partialPrice * 40)/ 100
    }else {discount = 0;}

    totalPrice = (partialPrice-discount).toFixed(2);

    let result = `il biglietto è stato acquistato da ${name}, ha ${age} anni, ha usufruito dello sconto di ${discount}€ con un costo iniziale di ${partialPrice} quindi il costo del biglietto per ${distance}Km è ${totalPrice}€`

    console.log(result)

    //Inserisco i valori nella card
    userName.innerHTML = `${name}`
    discountCard.innerHTML = `${discount}€`
    carriage.innerHTML = `${carriageCard}`
    code.innerHTML = `${codeCard}`
    price.innerHTML = `${totalPrice}€`
    
})