const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// use API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
    // select LLM model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = "write a storyline for a retro fantasy rpg";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}
run();