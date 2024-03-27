


let min = 50;
let max = 100;
let answer;

answer = Math.floor(Math.random()*(max-min + 1) + min);

let attemp=0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess between ${min}-${max} `);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Dumbass");
    }else if(guess<min||guess>=max){
        window.alert("Dumbass");
    }
    else{
        attemp++;
        if(guess<answer){
            window.alert("Bigger!");
        }else if(guess>answer){
            window.alert("Smaller!");
        }else{
            window.alert(`Nice! You took ${attemp} attempts and the number was ${answer}`);
            console.log(answer);
            running = false;
        }
    }

}
