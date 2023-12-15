import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

//An Array of features
const featuresData = [
  {
    title: 'impressive AI model',
    text: 'GPT-3 is an impressive AI language model. Its ability to understand context, generate human-like responses, and provide valuable information across a wide range of topics is truly remarkable.',
  },
  {
    title: 'A valuable tool',
    text: 'The vast knowledge base and up-to-date information make it a valuable tool for learning, problem-solving, and even entertainment. Its diverse capabilities, from aiding in research to providing creative prompts, have made it a go-to resource for many users.',
  },
  {
    title: 'Adaptability',
    text: 'One of its standout features is adaptability.It adjusts its responses based on the conversation, making each interaction personalized and relevant. Whether it is providing explanations, brainstorming ideas, or just chatting, GPT-3’s responses are consistently impressive.',
  },
  {
    title: 'An invaluable assistant',
    text: 'Overall, GPT-3 has proven to be an invaluable assistant, offering a glimpse into the incredible potential of AI in enhancing various aspects of our lives.',
  },
];

//Passing array feature items with map function and a key attribute
const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;