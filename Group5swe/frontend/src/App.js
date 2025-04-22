import React, { useState, useEffect } from 'react';
import { auth } from './firebaseConfig.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import AuthForm from './components/Authform.js';
import Dashboard from './components/Dashboard';

const App = () => {
  const [user, setUser] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setIncomes([]);
      return;
    }
  
    const fetchIncomes = async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        const res = await fetch('http://localhost:8000/income', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setIncomes(data);
      } catch (err) {
        console.error('Failed to load incomes from API:', err);
      }
    };
  
    fetchIncomes();
  }, [user]);

  useEffect(() => {
    if (!user) {
      setExpenses([]);
      return;
    }
  
    const fetchExpenses = async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        const res = await fetch('http://localhost:8000/expenses', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setExpenses(data);
      } catch (err) {
        console.error('Failed to load expenses from API:', err);
      }
    };
  
    fetchExpenses();
  }, [user]);

  const handleSignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAddExpense = async ({ name, category, amount }) => {
    if (!user) return;
  
    try {
      const token = await auth.currentUser.getIdToken();
      const res = await fetch('http://localhost:8000/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          category,
          amount: parseFloat(amount),
          uid: user.uid,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const { id } = await res.json();
      setExpenses(prev => [{ id, name, category, amount: parseFloat(amount) }, ...prev]);
    }
    catch (err) {
      console.error('Error adding expense via API:', err);
    }
  };

  const handleAddIncome = async ({ source, amount }) => {
    if (!user) return;
    try {
      const parsed = parseFloat(amount);
      const token = await auth.currentUser.getIdToken();
      const res = await fetch('http://localhost:8000/income', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          source,
          amount: parsed,
          uid: user.uid,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const { id } = await res.json();

      setIncomes(prev => [{ id, source, amount: parsed }, ...prev]);
    } catch (err) {
      console.error('Error adding income via API:', err);
    }
  };

  return user ? (
    <Dashboard user={user} handleLogout={handleLogout} handleAddExpense={handleAddExpense} handleAddIncome={handleAddIncome} expenses={expenses} incomes={incomes}/>
  ) : (
    <AuthForm handleLogin={handleLogin} handleSignUp={handleSignUp} error={error} />
  );
};

export default App;
