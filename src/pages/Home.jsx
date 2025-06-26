import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('https://backendfinal-2-ghhp.onrender.com/api/topics')
      .then(res => res.json())
      .then(data => setTopics(data))
      .catch(err => console.error('Error fetching topics:', err));
  }, []);

  return (
    <div className="home">
      <h1>Discussion Topics</h1>
      <ul className="topic-list">
        {topics.map(topic => (
          <li key={topic._id} className="topic">
            <a href={`/topic/${topic._id}`}><h2>{topic.title}</h2></a>
            <p>{topic.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
