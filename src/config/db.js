const mongoose = require ('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('conectou no mongo');
    } catch (err) {
        console.error('nao conectou no mongo:', err,message);
        process.exit(1);
    }
};

module.exports = connectDB;