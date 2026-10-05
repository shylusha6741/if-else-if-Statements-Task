// ______________if else if________________________
// 1.Traffic Signal
let signal="yellow";
if(signal=="red"){
    console.log("Stop");
}else if(signal=="yellow"){
    console.log("get ready");
}else if(signal=="green"){
    console.log("Go");
}else{
    console.log("Invalid signal");
}

// 2.Time of the Day
let hour=15;
if(hour<12){
    console.log("Good Morning");
}else if(hour<17){
    console.log("Good Afternoon");
}else if(hour<21){
    console.log("Good Evening");
}else{
    console.log("Good Night");
}


// 3. Mobile Battery Status
let battery=45;
if(battery>=80){
    console.log("Battery is High");
}else if(battery>=50){
    console.log("Battery is Medium");
}else if(battery>=20){
    console.log("Battery is Low");
}else{
    console.log("Connect charger immediately")
}

// 4.Delivery Charge
let distance=18;
if (distance<=5){
    console.log("Delivery charge=20rs");
}else if(distance<=10){
    console.log("Delivery charge=40rs");
}else if(distance<=20){
    console.log("Delivery charge=60rs")
}else{
    console.log("Delivery charge=80rs")
}

// 5. Internet Data Usage
let data=7;
if (data<=2){
    console.log("very low usage");
}else if(data<=5){
    console.log("Normal Usage");
}else if(data<=10){
    console.log("High Usage");
}else{
    console.log("very high usage");
}

//6. Hotel Room Category
let budget=6500;
if(budget<2000){
    console.log("standard Room");
}else if(budget<5000){
    console.log("Deluxe Room");
}else if(budget<8000){
    console.log("Premium Room");
}else{
    console.log("Luxury Suite");
}

