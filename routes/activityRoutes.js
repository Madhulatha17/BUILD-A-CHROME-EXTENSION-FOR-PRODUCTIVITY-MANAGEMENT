const express =
require("express");

const router =
express.Router();

const {
 saveActivity,
 getReport
} =
require("../controllers/activityController");

router.post("/",saveActivity);

router.get("/report",getReport);

module.exports = router;
