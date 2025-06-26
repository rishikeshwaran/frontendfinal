import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateTopic.css'; // Import CSS for styling
function CreateTopic() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (!token) {
    alert('Please login to create a topic');
    navigate('/login');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/topics', {
      method: 'POST',
      headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}` // ✅ Correct format
},

      body: JSON.stringify({ title, description }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Topic created!');
      navigate('/');
    } else {
      alert(data.message || 'Failed to create topic');
    }
  };

  return (
    <div className="create-topic">
      <h2>Create Topic</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateTopic;
