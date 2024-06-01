import OpenAI, { ClientOptions } from 'openai';

const openaiOptions: ClientOptions = {
    apiKey: process.env.OPENAI_API_KEY || '',
};

const openai = new OpenAI(openaiOptions);

export async function getDemandForecasting(prompt: string) {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: prompt }],
    });
    return response.choices[0].message.content;
}
