const express = require("express");
const { getProfiles, getProfileById, createProfile, updateProfile, deleteProfile } = require("../controllers/profileController");


const router = express.Router();

router.get("/", getProfiles);
router.get("/:id", getProfileById);
router.post("/", createProfile);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

router.get("/", async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = router;
