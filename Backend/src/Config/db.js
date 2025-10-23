const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
// const DB_URL = "mongodb+srv://manishachoudhary_db_user:v3zCEIV62S5hKo6J@phonebook.k9gosp2.mongodb.net/?retryWrites=true&w=majority&appName=Phonebook"
const DB_URL = process.env.DB_URL;


mongoose.connect(DB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('connect to MongoDB failed', err));


// mongoose.connect(DB_URL, ()=>{
//     console.log("database connected");
// })
// const connectDB = async ()=>{
//     try{
//         await mongoose.connect(DB_URL);
//         console.log("Database connected");
        
//     }catch(error){
//         console.error(error);
//     }
// }
// module.exports = {connectDB};















// const connectDB = async () => {
//   try {
//     await mongoose.connect(DB_URL);
//     console.log("Database connected successfully!");
//   } catch (error) {
//     console.error("Database connection failed:", error);

//   }
// };

// module.exports = connectDB;
