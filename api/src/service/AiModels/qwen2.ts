import ollama  from "ollama"

export default async function askQwen(question : any) {  
  const response = await ollama.chat({
    model: 'qwen2.5-coder:3b-instruct-q4_K_M',
    messages: [{role: 'user', content: question}],
  })
  return response.message.content
}


