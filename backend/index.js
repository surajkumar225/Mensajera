const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
const connectDB = require("./Config/db.js");
const userRoutes = require("./Routes/userRoutes");

const app = express();
dotenv.config();
connectDB();
  
app.use(express.json()); //To accept json data

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.get("/api/user", userRoutes);
// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   const singleChat = chats.find((c) => c.id === req.params.id);
//   res.send(singleChat);
// });

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on PORT ${PORT}`));
