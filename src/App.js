import React, { useState } from 'react';

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
    // Implement your play functionality here
    console.log('Playing:', link, 'with ID:', id);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        First join the discord bot to continue with the service of playing music
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
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#3498db',
    color: '#fff',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
  },
};

export default App;
