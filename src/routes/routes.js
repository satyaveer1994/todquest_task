const express = require("express");
const router = express.Router();
const studentController=require("../controller/studentController")
const WorksnapsTimeEntryController = require("../controller/WorksnapsTimeEntryController")


router.post('/students',studentController.createStudent)
router.post('/timeEntries',WorksnapsTimeEntryController.createTimeEntry)
router.get('/students/:studentId/time-entries',WorksnapsTimeEntryController.getTimeEntriesByStudentId)
//router.get('/students/time-entries',WorksnapsTimeEntryController.getStudentsWithTimeEntries);

module.exports = router;