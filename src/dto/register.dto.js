module.exports = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'username e password são obrigatórios' });
  }
  next();
};