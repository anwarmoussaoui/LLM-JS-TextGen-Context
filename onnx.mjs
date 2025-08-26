import { pipeline, TextStreamer } from "@huggingface/transformers";

// Create a text generation pipeline
const generator = await pipeline(
  "text-generation",
  "onnx-community/Qwen2.5-Coder-0.5B-Instruct",
  { dtype: "q4" },
);


const infos = [
    "The price of 'The Great Gatsby' is $10.99.",
    "The price of '1984' is $8.50.",
    "The price of 'To Kill a Mockingbird' is $12.75.",
    "The price of 'Pride and Prejudice' is $9.00.",
    "The price of 'Moby Dick' is $11.25."
  ];


// Combine infos into a single context string
const context = infos.join(" ");

// Define the messages for the LLM
const messages = [
  { role: "system", content: "You are a helpful assistant." },
  { 
    role: "user", 
    content: `Context: ${context}\nQuestion: What is the price of '1984'?` 
  },
];

// Create text streamer
const streamer = new TextStreamer(generator.tokenizer, {
  skip_prompt: true,

})

// Generate a response
const result = await generator(messages, { max_new_tokens: 512, do_sample: false, streamer });