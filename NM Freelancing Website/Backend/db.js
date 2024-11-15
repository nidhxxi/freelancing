// db.js
const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://freelancingdb:freelancingdb@cluster0.4wyhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}

module.exports = connectDB;
