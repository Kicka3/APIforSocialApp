const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');


dotenv.config();

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Соединение с MongoDB установлено');
    // Дальнейший код после успешного подключения

  } catch (error) {
    console.error('Ошибка подключения к MongoDB:', error);
  }
}
connectToDatabase();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);


app.listen(8800, () => {
  console.log('Backend server is running')
});
