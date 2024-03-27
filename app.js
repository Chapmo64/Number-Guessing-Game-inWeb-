let min = 50;
let max = 100;
let answer = Math.floor(Math.random() * (max - min + 1) + min);
let attempt = 0;
let running = true;

        function checkGuess() {
            let guess = parseInt(document.getElementById('userGuess').value);

            const dum = document.getElementById("dum");

            if (isNaN(guess) || guess < min || guess > max) {
                dum.textContent = `What are u, A DUMASS!!`;
            } else {
                attempt++;
                if (guess < answer) {
                    dum.textContent = `Bigger!`;
                } else if (guess > answer) {
                    dum.textContent = `Smaller!`;
                } else {
                    dum.textContent = `Congratulations! You took ${attempt} attempts and the number was ${answer}`;
                    console.log(answer);
                    running = false;
                }
            }
        }
