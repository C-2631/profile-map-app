const Profile = require("../models/Profile");

// ✅ GET all profiles
const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// ✅ GET a single profile by ID
const getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// ✅ CREATE a new profile
const createProfile = async (req, res) => {
  try {
    const { name, address, lat, lng } = req.body;
    const newProfile = new Profile({ name, address, lat, lng });
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(400).json({ error: "Invalid profile data" });
  }
};

// ✅ UPDATE a profile by ID
const updateProfile = async (req, res) => {
  try {
    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProfile) return res.status(404).json({ error: "Profile not found" });
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(400).json({ error: "Invalid update request" });
  }
};

// ✅ DELETE a profile by ID
const deleteProfile = async (req, res) => {
  try {
    const deletedProfile = await Profile.findByIdAndDelete(req.params.id);
    if (!deletedProfile) return res.status(404).json({ error: "Profile not found" });
    res.status(200).json({ message: "Profile deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { getProfiles, getProfileById, createProfile, updateProfile, deleteProfile };
