//(Form for adding expense cards)
import React, { useState } from 'react';

const ExpenseForm = ({ handleAddExpense }) => {
  const [newExpense, setNewExpense] = useState({ name: '', category: '', amount: '' });

  const submitExpense = (e) => {
    e.preventDefault();
    handleAddExpense(newExpense);
    setNewExpense({ name: '', category: '', amount: '' });
  };

  return (
    <form onSubmit={submitExpense} style={styles.form}>
      <input
        type="text"
        placeholder="Expense Name"
        value={newExpense.name}
        onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
        style={styles.input}
        required
      />
      <input
        type="text"
        placeholder="Expense Category"
        value={newExpense.category}
        onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
        style={styles.input}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={newExpense.amount}
        onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>Add Expense</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '10px',
    backdropFilter: 'blur(5px)',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
  },
  input: {
    margin: '10px',
    padding: '12px',
    width: '250px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    background: '#222',
    color: '#fff',
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

export default ExpenseForm;
