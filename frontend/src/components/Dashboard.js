//(Main UI for logged-in users)
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import IncomeForm from './IncomeForm'
import BalanceDisplay from './BalanceDisplay';
import BudgetGoals from './BudgetGoals';

const Dashboard = ({ user, handleLogout, handleAddExpense, handleAddIncome, expenses, incomes }) => {
  const [budgetGoal, setBudgetGoal] = useState(null);

  const handleSetBudgetGoal = (goal) => {
    setBudgetGoal(goal);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome, {user.email}!</h1>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
      <h2 style={styles.subtitle}>Financial Tracker</h2>
      
      <BalanceDisplay expenses={expenses} incomes={incomes} />
      
      <div style={styles.row}>
        <div style={styles.column}>
          <ExpenseForm handleAddExpense={handleAddExpense} />
        </div>
        <div style={styles.column}>
          <BudgetGoals handleSetBudgetGoal={handleSetBudgetGoal} budgetGoal={budgetGoal} />
        </div>
        <div style={styles.column}>
          <IncomeForm handleAddIncome={handleAddIncome} />
        </div>
      </div>
      
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
  row: {
    display: 'flex',
    justifyContent: 'space-between', // Align components side by side
    alignItems: 'flex-start',
    width: '100%',
    marginTop: '20px',
    gap: '15px', // Add spacing between components
  },
  column: {
    flex: 1, // Ensure both components take equal width
    maxWidth: '48%', // Limit the width of each column
  },
};

export default Dashboard;