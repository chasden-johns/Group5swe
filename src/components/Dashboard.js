//(Main UI for logged-in users)
import React from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const Dashboard = ({ user, handleLogout, handleAddExpense, expenses }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome, {user.email}!</h1>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
      <h2 style={styles.subtitle}>Financial Tracker</h2>
      <ExpenseForm handleAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    overflowY: 'auto',
    background: 'linear-gradient(135deg, #1f1c2c, #928DAB)',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  button: {
    margin: '10px',
    padding: '12px',
    width: '270px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    background: 'linear-gradient(90deg, #ff8c00, #ff0080)',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: '0.3s',
  },
};

export default Dashboard;
