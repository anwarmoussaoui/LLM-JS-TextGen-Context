# JS-ContextTextGen
A JavaScript-based text generation tool using Hugging Face Transformers to augment prompts with contextual information, simulating a lightweight Retrieval-Augmented Generation (RAG) approach.
# Overview
This project leverages the _@huggingface/transformers_ library to create a text generation pipeline with the _Qwen2.5-Coder-0.5B-Instruct_ model. It includes a mechanism to inject a large array of contextual data (e.g., book prices) into prompts for generating informed responses.



### expected outout :
```
The price of '1984' is $8.50.
```