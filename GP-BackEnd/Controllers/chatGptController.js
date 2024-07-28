const { OpenAI } = require("openai");
require("dotenv").config();



const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


const chatWithOpenAI = async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }],
            max_tokens: 150,
        });

        const reply = response.choices[0].message.content.trim();
        res.json({ reply });
    } catch (error) {
        console.error('Error generating chat response:', error);
        res.status(500).json({ error: 'Error occurred while chatting with ChatGPT' });
    }
};

module.exports = { chatWithOpenAI };