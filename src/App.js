import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  const [link, setLink] = useState('');
  const [id, setId] = useState('');

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePlayClick = () => {
    // <Link to 'http://localhost:3000/play'>
    console.log('Playing:', link, 'with ID:', id);
  };


  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        First join the Discord bot to continue with the service of playing music
      </h1>
      <div style={styles.column}>
        <label style={styles.label}>Enter Link:</label>
        <input
          type="text"
          value={link}
          onChange={handleLinkChange}
          style={styles.input}
        />
      </div>
      <div style={styles.column}>
        <label style={styles.label}>Enter ID:</label>
        <input
          type="text"
          value={id}
          onChange={handleIdChange}
          style={styles.input}
        />
      </div>
      <button onClick={handlePlayClick} style={styles.button}>
        Play
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '12px 20px',
    fontSize: '18px',
    backgroundColor: '#3498db',
    color: '#fff',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
};

export default App;
