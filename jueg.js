const choices = ['piedra', 'papel', 'tijera'];
            const resultDisplay = document.getElementById('result');

            document.querySelectorAll('button').forEach(button => {
                button.addEventListener('click', () => {
                    const playerChoice = button.id;
                    const computerChoice = choices[Math.floor(Math.random() * 3)];

                    const result = getResult(playerChoice, computerChoice);
                    resultDisplay.textContent = `El jugador eligió  ${playerChoice}. La computadora eligió ${computerChoice}. ${result}`;
                });
            });

            function getResult(player, computer) {
                if (player === computer) {
                    return 'Es un empate';
                } 
                else if (
                    (player === 'piedra' && computer === 'tijera') ||
                    (player === 'papel' && computer === 'piedra') ||
                    (player === 'tijera' && computer === 'papel')
                ) 
                {
                    return '¡Ganaste!';
                } 
                else {
                    return '¡Perdiste!';
                }
            }