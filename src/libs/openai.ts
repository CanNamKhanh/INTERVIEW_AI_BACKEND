import OpenAI from "openai";

export const openai = new OpenAI({
  //   apiKey: process.env.OPENAI_API_KEY,
  apiKey: process.env.OPENROUTER_API_KEY,

  baseURL: "https://openrouter.ai/api/v1",
});

export const AI_MODEL = "gpt-4o-mini";
