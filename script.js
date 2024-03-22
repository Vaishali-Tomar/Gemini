import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCl2Ste-OJ61OsjXdBtDOM8hAjZY6eBnmk";
const genAI = new GoogleGenerativeAI(API_KEY);

document.querySelector(".btn").addEventListener("click", async function() {
  const userInput = document.querySelector(".user-input").value.trim();
  if (userInput !== "") {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = userInput;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
   // console.log(response);
    
    // Append user message
    const chatBox = document.querySelector(".chat-box");
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("box", "user-msg");
    userMessageDiv.innerHTML = `<p>User: ${userInput}</p>`;
    chatBox.appendChild(userMessageDiv);

    // Append bot response
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("box", "bot-msg");
    botMessageDiv.innerHTML = `<p>Bot: ${text}</p>`;
    chatBox.appendChild(botMessageDiv);

    // Clear input
    document.querySelector(".user-input").value = "";
    chatBox.firstElementChild.scrollIntoView();
  }
});

const manu = document.getElementById('icon');

manu.addEventListener('click', () => {
  manu.classList.toggle('expanded');
});




