const express = require('express')
const ProfileController = require("../controllers/ProfileController");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
const router = express.Router();


//API

router.post("/registrations", ProfileController.registration)
router.post("/login", AuthVerifyMiddleware, ProfileController.Login)
// AuthVerifyMiddleware needed
router.post("/profileUpdate", AuthVerifyMiddleware, ProfileController.ProfileUpdate)
module.exports = router;