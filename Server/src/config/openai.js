
// class para novas pesquisas
const { Configuration, OpenAIApi } = require('openai');
require("dotenv").config()

module.exports = class openai{
	static configuration(){
		const configuration = new OpenAI({
			apiKey: process.env.OPEN_AI_KEY,
		  })
		
		  return new OpenAIApi(configuration)
		
		}
		
	static textCompletion({prompt}){
		return{
			model: "gpt-3.5-turbo-instruct-0914",
			prompt: `${prompt}`,
			temperature: 0,
			max_tokens: 256,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		  

		}
	}
}
