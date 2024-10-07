document.addEventListener("DOMContentLoaded", function () {
    const games = ["prisonersDilemma", "battleOfSexes", "chicken", "ultimatum", "trust"];
    
    // Randomly select a game of the day
    const todaysGame = games[Math.floor(Math.random() * games.length)];

    // Call the appropriate game logic based on today's selection
    if (todaysGame === "prisonersDilemma") {
        prisonersDilemmaGame();
    } else if (todaysGame === "battleOfSexes") {
        battleOfSexesGame();
    } else if (todaysGame === "chicken") {
        chickenGame();
    } else if (todaysGame === "ultimatum") {
        ultimatumGame();
    } else if (todaysGame === "trust") {
        trustGame();
    }
    
    function prisonersDilemmaGame() {
        document.getElementById("game-title").textContent = "Prisoner's Dilemma";
        document.getElementById("game-instructions").textContent = "Choose to cooperate or defect.";
        
        const gameArea = document.getElementById("game-area");
        gameArea.innerHTML = `
            <button class="choice-button" id="cooperate">Cooperate</button>
            <button class="choice-button" id="defect">Defect</button>
        `;
        
        document.querySelectorAll(".choice-button").forEach(button => {
            button.addEventListener("click", function () {
                handlePrisonersDilemmaChoice(this.id);
            });
        });
    }
    
    function battleOfSexesGame() {
        document.getElementById("game-title").textContent = "Battle of the Sexes";
        document.getElementById("game-instructions").textContent = "Choose Opera or Football.";
        
        const gameArea = document.getElementById("game-area");
        gameArea.innerHTML = `
            <button class="choice-button" id="opera">Opera</button>
            <button class="choice-button" id="football">Football</button>
        `;
        
        document.querySelectorAll(".choice-button").forEach(button => {
            button.addEventListener("click", function () {
                handleBattleOfSexesChoice(this.id);
            });
        });
    }
    
    function chickenGame() {
        document.getElementById("game-title").textContent = "Chicken (Hawk-Dove)";
        document.getElementById("game-instructions").textContent = "Choose Hawk or Dove.";
        
        const gameArea = document.getElementById("game-area");
        gameArea.innerHTML = `
            <button class="choice-button" id="hawk">Hawk</button>
            <button class="choice-button" id="dove">Dove</button>
        `;
        
        document.querySelectorAll(".choice-button").forEach(button => {
            button.addEventListener("click", function () {
                handleChickenChoice(this.id);
            });
        });
    }
    
    function ultimatumGame() {
        document.getElementById("game-title").textContent = "Ultimatum Game";
        document.getElementById("game-instructions").textContent = "Propose a split of $10.";
        
        const gameArea = document.getElementById("game-area");
        gameArea.innerHTML = `
            <input type="number" id="propose-amount" min="1" max="10" value="5">
            <button class="choice-button" id="submit-proposal">Submit Proposal</button>
        `;
        
        document.getElementById("submit-proposal").addEventListener("click", function () {
            handleUltimatumChoice();
        });
    }
    
    function trustGame() {
        document.getElementById("game-title").textContent = "Trust Game";
        document.getElementById("game-instructions").textContent = "Send some amount of money. It will be multiplied by 3.";
        
        const gameArea = document.getElementById("game-area");
        gameArea.innerHTML = `
            <input type="number" id="send-amount" min="1" max="10" value="5">
            <button class="choice-button" id="submit-send">Send Money</button>
        `;
        
        document.getElementById("submit-send").addEventListener("click", function () {
            handleTrustChoice();
        });
    }

    function handlePrisonersDilemmaChoice(choice) {
        const opponentChoice = Math.random() < 0.5 ? "cooperate" : "defect";
        let resultText;
        if (choice === "cooperate" && opponentChoice === "cooperate") {
            resultText = "Both cooperated! +2 points.";
        } else if (choice === "cooperate" && opponentChoice === "defect") {
            resultText = "You cooperated, but they defected. 0 points.";
        } else if (choice === "defect" && opponentChoice === "cooperate") {
            resultText = "You defected while they cooperated. +3 points.";
        } else {
            resultText = "Both defected. +1 point.";
        }
        document.getElementById("result").textContent = resultText;
        updateScore(resultText);
    }

    function handleBattleOfSexesChoice(choice) {
        const opponentChoice = Math.random() < 0.5 ? "opera" : "football";
        let resultText;
        if (choice === opponentChoice) {
            resultText = `Both chose ${choice}! +2 points.`;
        } else {
            resultText = `You chose ${choice}, but they chose ${opponentChoice}. 0 points.`;
        }
        document.getElementById("result").textContent = resultText;
        updateScore(resultText);
    }

    function handleChickenChoice(choice) {
        const opponentChoice = Math.random() < 0.5 ? "hawk" : "dove";
        let resultText;
        if (choice === "hawk" && opponentChoice === "hawk") {
            resultText = "Both chose Hawk! -1 point.";
        } else if (choice === "hawk" && opponentChoice === "dove") {
            resultText = "You chose Hawk, they chose Dove. +2 points.";
        } else if (choice === "dove" && opponentChoice === "hawk") {
            resultText = "You chose Dove, they chose Hawk. +1 point.";
        } else {
            resultText = "Both chose Dove! +1 point.";
        }
        document.getElementById("result").textContent = resultText;
        updateScore(resultText);
    }

    function handleUltimatumChoice() {
        const proposedAmount = document.getElementById("propose-amount").value;
        const accept = Math.random() < 0.5;
        let resultText;
        if (accept) {
            resultText = `Offer accepted! You receive ${10 - proposedAmount} points.`;
        } else {
            resultText = "Offer rejected! 0 points.";
        }
        document.getElementById("result").textContent = resultText;
        updateScore(resultText);
    }

    function handleTrustChoice() {
        const sentAmount = document.getElementById("send-amount").value;
        const returnedAmount = Math.random() < 0.5 ? sentAmount *
