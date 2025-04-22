// (Login/Signup UI)
import React, { useState } from 'react';

const AuthForm = ({ handleLogin, handleSignUp, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>MoneyMind Auth</h1>
      {error && <p style={styles.error}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={() => handleLogin(email, password)} style={styles.button}>Login</button>
      <button onClick={() => handleSignUp(email, password)} style={styles.buttonAlt}>Sign Up</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #1f1c2c, #928DAB)',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  input: {
    margin: '10px',
    padding: '12px',
    width: '250px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    background: '#333',
    color: '#fff',
  },
  button: {
    margin: '10px',
    padding: '12px',
    width: '270px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    background: '#06d6a0',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: '0.3s',
  },
  buttonAlt: {
    margin: '10px',
    padding: '12px',
    width: '270px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    background: '#118AB2',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: '0.3s',
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
    marginBottom: '10px',
  },
};

export default AuthForm;
