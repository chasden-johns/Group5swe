const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
require('dotenv').config();
const authenticateToken = require('./authMiddleware.js');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true
}));

app.use(express.json());

const serviceAccount = require('./firebaseServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.firestore();

app.get('/expenses', authenticateToken, async (req, res) => {
  try {
    const uid = req.user.uid;
    const snapshot = await db
      .collection('expenses')
      .where('uid', '==', uid)
      .orderBy('timestamp','desc')
      .get();

    const expenses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(expenses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch expenses' });
  }
});

app.post('/expenses', authenticateToken, async (req, res) => {
  try {
    const uid = req.user.uid;
    const { name, category, amount } = req.body;
    const docRef = await db.collection('expenses').add({
      name, category, amount, uid,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(201).json({ id: docRef.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not add expense' });
  }
});

app.get('/income', authenticateToken, async (req, res) => {
  try {
    const uid = req.user.uid;
    const snapshot = await db
      .collection('income')
      .where('uid', '==', uid)
      .orderBy('timestamp','desc')
      .get();

    const incomes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(incomes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch income' });
  }
});

app.post('/income', authenticateToken, async (req, res) => {
  try {
    const uid = req.user.uid;
    const { source, amount } = req.body;
    const docRef = await db.collection('income').add({
      source, amount, uid,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(201).json({ id: docRef.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not add income' });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});