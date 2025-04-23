// (List of user expenses)
import React from 'react';

const ExpenseList = ({ expenses }) => {

  const categoryGroup = expenses.reduce((cat, expense) => {
    if(!cat[expense.category]) {
      cat[expense.category] = [];
    }
    cat[expense.category].push(expense);

    return cat;
  }, {});
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Your Expenses</h3>
      {Object.entries(categoryGroup).map(([category, group]) => (
        <div>
          <h4>{category}</h4>
            <ul style={styles.list}>
            {group.map((expense, index) => (
              <li key={index} style={styles.expenseItem}>
                {expense.name}: <span style={styles.amount}>${expense.amount}</span>
              </li>
              ))}
            </ul>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '10px',
    backdropFilter: 'blur(5px)',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
    color: '#fff',
    textAlign: 'center',
    marginTop: '20px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  expenseItem: {
    margin: '0 10px',
    padding: '12px',
    borderRadius: '5px',
    background: 'linear-gradient(135deg, #06d6a0, #118AB2)',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    display: 'inline-block',
  },
  amount: {
    fontWeight: 'bold',
    color: '#ffcc00',
  },
};

export default ExpenseList;
