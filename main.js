// here i need all the variables to make the funtions work
// the API_KEY is empty, insert your own ChatGPT api

const API_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = "gpt-3.5-turbo";

const API_KEY = "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";

const loader = document.querySelector('.loader');
const modal = document.querySelector(".modal");
const closeModal = document.querySelector('.modal-x');
const speakingModal = document.querySelector('.modal-speaking');