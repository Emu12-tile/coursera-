// functional programming
var shoes=100;
var tax=1.2;
function totalPrices(shoes,tax){
    return shoes*tax;
}
var toPay=totalPrices(shoes,tax);
console.log(toPay);