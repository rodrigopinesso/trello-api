const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('mongo conectou');
  } catch (err) {
    console.error('mongo nao conectou:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
