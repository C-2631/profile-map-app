const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Use the connection string from MongoDB Compass
const MONGO_URI = "mongodb://localhost:27017/profile_map_app"; 

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB"));
db.on("error", (error) => console.error("MongoDB connection error:", error));

// Define Profile Schema
const profileSchema = new mongoose.Schema({
  name: String,
  address: String,
  lat: Number,
  lng: Number,
});

const Profile = mongoose.model("Profile", profileSchema);

// API Route to get profiles
app.get("/api/profiles", async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
