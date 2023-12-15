import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

//Passing title and text as props 
const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 is an AI-powered conversational agent. It belongs to the family of GPT (Generative Pre-trained Transformer) models and is designed to engage in natural language conversations with users." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT-3 is often referred to as a chatbot due to its ability to engage in conversation and provide responses in a manner akin to chatting with a human." />
      <Feature title="Knowledge base" text="The knowledge base of GPT-3 comprises a vast repository of information gathered from diverse sources across the internet. It encompasses data from websites, articles, books and more." />
      <Feature title="Education" text="Can provide personalized tutoring experiences by adapting to the learning style and pace of individual students. It can offer explanations, answer queries, and provide additional resources tailored to the student's needs." />
    </div>
  </div>
);

export default WhatGPT3;