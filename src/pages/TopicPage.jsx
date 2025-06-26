import React from 'react';
import { useParams } from 'react-router-dom';
import './TopicPage.css';

function TopicPage() {
  const { id } = useParams();
  return (
    <div className="topic-page">
      <h1>Topic #{id}</h1>
      <p>This is a placeholder for detailed topic content and replies.</p>
    </div>
  );
}

export default TopicPage;