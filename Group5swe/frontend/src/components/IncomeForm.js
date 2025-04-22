import React, { useState } from 'react';

const IncomeForm = ({ handleAddIncome }) => {
  const [newIncome, setNewIncome] = useState({
    source: '',
    amount: ''
  });

  const submitIncome = (e) => {
    e.preventDefault();
    handleAddIncome(newIncome);
    setNewIncome({ source: '', amount: '' });
  };

  return (
    <form onSubmit={submitIncome} style={styles.form}>
      <input
        type="text"
        placeholder="Income Source"
        value={newIncome.source}
        onChange={(e) =>
          setNewIncome({ ...newIncome, source: e.target.value })
        }
        style={styles.input}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={newIncome.amount}
        onChange={(e) =>
          setNewIncome({ ...newIncome, amount: e.target.value })
        }
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>
        Add Income
      </button>
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
      background: 'linear-gradient(90deg, #00c853, #b2ff59)',
      color: '#fff',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: '0.3s',
    },
  };
  
  export default IncomeForm;