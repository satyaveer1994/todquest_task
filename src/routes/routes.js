const express = require("express");
const router = express.Router();
const studentController=require("../controller/studentController")
const WorksnapsTimeEntryController = require("../controller/WorksnapsTimeEntryController")


router.post('/students',studentController.createStudent)
///router.get('/students/time-entries',WorksnapsTimeEntryController.getAllStudentEntry);

module.exports = router;