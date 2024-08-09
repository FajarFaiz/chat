// /pages/api/route.js
import { Configuration, OpenAIApi } from 'openai';


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ensure the API key is set in your .env.local file
})

const openai = new OpenAIApi(configuration)


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests allowed' })
    return
  }

  const { context } = req.body

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-4', // or 'gpt-3.5-turbo'
      messages: context,
    })

    const aiMessage = response.data.choices[0].message.content

    res.status(200).json({ content: aiMessage })
  } catch (error) {
    console.error('Error communicating with OpenAI:', error)
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    })
  }
}
