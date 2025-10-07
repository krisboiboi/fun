const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next-button');

let currentState = {};

const gameData = {
    intro: {
        story: "You are a time traveler who has just activated your malfunctioning time machine. It can go anywhere, but the machine is unstable. Your goal is to fix the machine before you get lost in time forever. Choose your first destination.",
        choices: [
            { text: "Ancient Egypt", nextState: "egypt" },
            { text: "The Year 2050", nextState: "future" },
            { text: "The Jurassic Period", nextState: "jurassic" }
        ]
    },
    egypt: {
        story: "You land in Ancient Egypt. The pyramids are grand, and the air smells of sand and history. A local priest approaches you with a riddle.",
        choices: [
            { text: "Answer the riddle", nextState: "egyptRiddle" },
            { text: "Run away", nextState: "runAway" }
        ]
    },
    future: {
        story: "You arrive in the future. Flying cars zoom overhead, and neon lights illuminate the streets. A futuristic citizen offers you a holographic map of the city.",
        choices: [
            { text: "Accept the map", nextState: "futureMap" },
            { text: "Ignore the citizen and explore", nextState: "futureExplore" }
        ]
    },
    jurassic: {
        story: "You land in the Jurassic Period. Massive dinosaurs roam the land. A herbivorous dinosaur seems curious about you. Do you want to interact?",
        choices: [
            { text: "Approach the dinosaur", nextState: "jurassicApproach" },
            { text: "Run away", nextState: "runAway" }
        ]
    },
    egyptRiddle: {
        story: "The priest asks: 'I have cities, but no houses. I have forests, but no trees. I have rivers, but no water. What am I?'",
        choices: [
            { text: "A map", nextState: "correctAnswer" },
            { text: "A desert", nextState: "wrongAnswer" }
        ]
    },
    correctAnswer: {
        story: "The priest smiles and gives you a magical artifact. 'This will help you repair your time machine.' You now have the 'Ancient Key'.",
        choices: [
            { text: "Go back to the time machine", nextState: "machine" }
        ]
    },
    wrongAnswer: {
        story: "The priest shakes his head. 'You have failed to answer the riddle. The timeline has become unstable!' You must try again.",
        choices: [
            { text: "Try again", nextState: "egypt" }
        ]
    },
    runAway: {
        story: "You run away and activate the time machine again. Where will you go next?",
        choices: [
            { text: "Ancient Egypt", nextState: "egypt" },
            { text: "The Year 2050", nextState: "future" },
            { text: "The Jurassic Period", nextState: "jurassic" }
        ]
    },
    futureMap: {
        story: "You accept the map. It reveals secret areas that could help you fix your time machine. However, one of the locations is marked as dangerous. Will you go?",
        choices: [
            { text: "Go to the secret location", nextState: "futureDanger" },
            { text: "Explore the safe zones", nextState: "futureSafe" }
        ]
    },
    futureDanger: {
        story: "The secret location is a high-tech lab. It’s guarded by drones, but you find a part needed for your time machine. You also trigger an alarm.",
        choices: [
            { text: "Escape with the part", nextState: "escape" },
            { text: "Stay and fight", nextState: "fight" }
        ]
    },
    futureSafe: {
        story: "You find a safe location with no danger. Inside, you discover a device that can repair your time machine. You’re closer to fixing it!",
        choices: [
            { text: "Return to the time machine", nextState: "machine" }
        ]
    },
    escape: {
        story: "You manage to escape the lab, but the timeline is getting more unstable. Hurry, fix the time machine!",
        choices: [
            { text: "Go back to the time machine", nextState: "machine" }
        ]
    },
    machine: {
        story: "You finally arrive at the time machine with all the parts and artifacts. It's time to fix it and escape the collapsing timeline!",
        choices: [
            { text: "Fix the machine", nextState: "win" }
        ]
    },
    win: {
        story: "Congratulations! You have successfully fixed the time machine and restored balance to the timeline. You are now a hero of time!",
        choices: [
            { text: "Play again", nextState: "intro" }
        ]
    }
};

function startGame() {
    currentState = gameData.intro;
    updateGame();
}

function updateGame() {
    storyElement.textContent = currentState.story;
    choicesElement.innerHTML = '';
    
    currentState.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => {
            currentState = gameData[choice.nextState];
            updateGame();
        };
        choicesElement.appendChild(button);
    });
}

nextButton.addEventListener('click', () => {
    // Just a placeholder for future enhancements.
});

startGame();
