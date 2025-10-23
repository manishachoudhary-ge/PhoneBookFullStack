const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
// const DB_URL = "mongodb+srv://manishachoudhary_db_user:v3zCEIV62S5hKo6J@phonebook.k9gosp2.mongodb.net/?retryWrites=true&w=majority&appName=Phonebook"
const DB_URL = process.env.DB_URL;


mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('connect to MongoDB failed', err));


