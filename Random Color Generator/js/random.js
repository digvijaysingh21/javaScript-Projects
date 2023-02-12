const getColor = ()=>{
    //hex code
    //The Decimal color 16777215 is a light color, and the websafe version is hex FFFFFF, and the color name is white
    const randomNumber = Math.floor(Math.random() * 16777215);
    //now from above we get random number now to convert them into hex code
   const randomCode = "#" + randomNumber.toString(16);
   document.body.style.backgroundColor = randomCode;
   document.getElementById("color-code").innerText = randomCode;
}

//when we click on button it will call getColor
//here we get random numbers

// event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
// init call that is initial call
getColor();