const formElem = document.getElementById("user-form");
console.log(formElem);
const distanceInput = document.getElementById("distance");
console.log(distanceInput);
const ageInput = document.getElementById("age");
console.log(ageInput);

//  event click sul bottone

formElem.addEventListener("submit", function (event){
    event.preventDefault();
    
    //prelevo tutti i valori dal form
    const age = ageInput.value.trim();
    const distance = distanceInput.value.trim();

    let totalPrice;

    let partialPrice = (0.21 * parseInt(distance))
    console.log(parseInt(distance));

    console.log(typeof distance)

    let discount;
    if(parseInt(age)<18){
        discount = (partialPrice * 20)/ 100
    }else if(parseInt(age)>65){
        discount = (partialPrice * 40)/ 100
    }else {discount = 0;}

    totalPrice = (partialPrice-discount).toFixed(2);

    let result = `il costo del biglietto è ${totalPrice}€`

    console.log(age,distance,partialPrice,discount,result)
})