document.addEventListener("DOMContentLoaded", function () {
    const colors = ["red", "blue", "green"];

    document.querySelectorAll(".color-button").forEach(button => {
        button.addEventListener("click", function () {
            const userChoice = this.id;
            const systemChoice = colors[Math.floor(Math.random() * colors.length)];

            let resultText;
            if (userChoice === systemChoice) {
                resultText = `You both chose ${systemChoice}. You win!`;
            } else {
                resultText = `You chose ${userChoice}, the system chose ${systemChoice}. You lose.`;
            }

            document.getElementById("result").textContent = resultText;
        });
    });
});
