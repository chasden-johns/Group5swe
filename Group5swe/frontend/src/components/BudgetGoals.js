import React, { useState } from 'react';

const BudgetGoals = ({ handleSetBudgetGoal, budgetGoal }) => {
  const [goal, setGoal] = useState(budgetGoal || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal) {
      handleSetBudgetGoal(parseFloat(goal));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Set Your Budget Goal</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your budget goal"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Set Goal</button>
      </form>
      {budgetGoal && (
        <p style={styles.goalDisplay}>
          Current Budget Goal: <strong>${budgetGoal.toFixed(2)}</strong>
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginTop: '10px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.1)', // Match the semi-transparent style
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    color: '#fff',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '80%',
    fontSize: '1rem',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    background: 'linear-gradient(90deg, #28a745, #218838)', // Green gradient for button
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  goalDisplay: {
    marginTop: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
};

export default BudgetGoals;