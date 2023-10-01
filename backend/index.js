import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import bookRoutes from './routes/booksroutes.js'
const app = express();
import cors from 'cors';

//Middleware for pasring body request
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("welcome to the book app");
});


//all routes for books
app.use('/books',bookRoutes)

//listening to the server
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to the database");
  })
  .catch((error) => {
    console.error(error);
  });

//  cvDknrj7fPx8KfWY
