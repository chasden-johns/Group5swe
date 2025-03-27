// (Component to display user's total balance)
import React, { useMemo } from 'react';

const BalanceDisplay = ({ expenses, income = [] }) => {
  // Calculate total balance by summing up income and subtracting expenses
  const totalBalance = useMemo(() => {
    const totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
    const totalIncome = income.reduce((sum, inc) => sum + Number(inc.amount), 0);
    return totalIncome - totalExpenses;
  }, [expenses, income]);


  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Current Balance</h2>
      <div 
        style={{
          ...styles.balanceCard,
          background: `linear-gradient(135deg, ${totalBalance >= 0 ? '#06d6a0, #118AB2' : '#ff0080, #ff8c00'})`,
        }}
      >
        <span style={styles.currencySymbol}>$</span>
        <span style={styles.balanceAmount}>{Math.abs(totalBalance).toFixed(2)}</span>
        <span style={styles.balanceStatus}>{totalBalance >= 0 ? 'Credit' : 'Debt'}</span>
      </div>
      <div style={styles.summary}>
        <div style={styles.summaryItem}>
          <span>Total Expenses</span>
          <span style={{ color: '#ff0080' }}>${expenses.reduce((sum, expense) => sum + Number(expense.amount), 0).toFixed(2)}</span>
        </div>
        <div style={styles.summaryItem}>
          <span>Total Income</span>
          <span style={{ color: '#06d6a0' }}>${income.reduce((sum, inc) => sum + Number(inc.amount), 0).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '600px',
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '10px',
    backdropFilter: 'blur(5px)',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '15px',
  },
  balanceCard: {
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
  currencySymbol: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginRight: '5px',
  },
  balanceAmount: {
    fontSize: '3rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  balanceStatus: {
    fontSize: '1rem',
    opacity: '0.8',
    marginTop: '5px',
  },
  summary: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    padding: '10px',
    background: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
  },
  summaryItem: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px 15px',
  }
};

export default BalanceDisplay;