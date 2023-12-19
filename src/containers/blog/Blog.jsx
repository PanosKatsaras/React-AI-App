import React from 'react';
import {Article} from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

//Import blog images from imports.js file
//Passing imgUrl, date and text as props 
const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">AI blog</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jun 26, 2023" text="The Future of Work with AI: Discuss how AI is reshaping industries and job roles." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 11, 2023" text="AI in Healthcare: Explore the transformative impact of AI in healthcare." />
        <Article imgUrl={blog03} date="Oct 11, 2023" text="AI and Climate Change: AI technologies are being used to tackle environmental issues such as climate modeling." />
        <Article imgUrl={blog04} date="Nov 10, 2023" text="AI in Business: AI is transforming businesses, from customer service chatbots to predictive analytics." />
        <Article imgUrl={blog05} date="Dec 03, 2023" text="AI and Cybersecurity: Discuss the role of AI in cybersecurity measures and AI-powered cyber attacks." />
      </div>
    </div>
  </div>
);

export default Blog;