require('dotenv').config(); 
require('express-async-errors'); //instead of using unnecessary try and catch blocks
const express = require('express');
const multer = require("multer");
const upload = multer({dest: 'uploads/'})
const app = express();
const authRouter = require('./routes/authRoute')
const postsRouter = require('./routes/postsRoute')
const authMiddleware = require('./middleware/authentication')

//connectDB
const connect = require('./db/connect')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// extra packages

// routes
app.use('/api/v1/auth', upload.single("testImage"), authRouter)
app.use('/api/v1/posts', authMiddleware, postsRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connect(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();