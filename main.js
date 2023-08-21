// here i need all the variables to make the funtions work
// the API_KEY is empty, insert your own ChatGPT api

const API_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = "gpt-3.5-turbo";

const API_KEY = "";

const loader = document.querySelector('.loader');
const modal = document.querySelector(".modal");
const closeModal = document.querySelector('.modal-x');
const speakingModal = document.querySelector('.modal-speaking');



async function playCharacter(nameCharacter) {

    loader.classList.remove("loader-dnone");
   
    const action = getRandomAction();

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}` 
        },
        body: JSON.stringify({
            model: MODEL,
            messages: [
                {
                    role: "user",
                    content: `Sei ${nameCharacter} e ${action} con un massimo di 150 caratteri senza mai uscire dal tuo personaggio`
                }
            ],
        })
    })

    const data = await response.json();

    const message = data.choices[0].message.content;
    speakingModal.innerHTML = `
        <h2>${nameCharacter}</h2>
        <p>${message}</p>
    `;
  
    loader.classList.add("loading-dnone");
    modal.classList.remove("modal-dnone");
}

function getRandomAction() {
    const actions = [
        'Raccontami qualcosa di divertente',
        'Cosa sono i cartoni animati',
        'Come si cucina la pizza',
        'Cosa sono i segreti',
        'Chi è il miglior allenatore di pokemon',
        'Quanti polli servono per deporre 10000 uova'
    ];

    const indexRandom = Math.floor(Math.random() * actions.length);

    return actions[indexRandom];
}

const characters = document.querySelectorAll(".character");

characters.forEach(function(element) {
    element.addEventListener("click", function() {
        playCharacter(element.dataset.character);
    })
})

closeModal.addEventListener("click", function() {
    modal.classList.add("modal-dnone");
});