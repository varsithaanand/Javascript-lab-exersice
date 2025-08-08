let rand=Math.floor(Math.random()*100+1);
console.log(rand);
let attempts=0;
function guessGame(){
    let input=document.getElementById("num").value;
    if(rand==input)
    {
        document.writeln("You won the game \n Your attemps"+attempts);
    }
    else if(rand>input)
    {
        document.getElementById("res").innerText="Too low";
        attempts++;
    }
    else if(rand<input)
    {
        document.getElementById("res").innerText="Too high";
        attempts++;
    }
}