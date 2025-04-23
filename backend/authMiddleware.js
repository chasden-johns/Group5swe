const admin = require('firebase-admin');

async function authenticateToken(req, res, next) {
  const header = req.headers.authorization || '';
  const match = header.match(/^Bearer (.+)$/);
  if (!match) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const idToken = match[1];
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Token verification failed:', err);
    res.status(403).json({ error: 'Unauthorized' });
  }
}

module.exports = authenticateToken;