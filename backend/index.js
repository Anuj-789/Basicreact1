require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Model
const User = require("./models/userschema");

// Test route
app.get("/", (req, res) => {
    res.send("Hello world");
});

// POST API (save data)
app.post("/add-user", async (req, res) => {
  try {
    const { name, age } = req.body;

    const newUser = new User({ name, age });

    await newUser.save();

    res.json({ message: "Data saved successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error saving data" });
  }
});

// GET API (optional for later)
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});