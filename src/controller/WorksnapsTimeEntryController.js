const studentModel = require("../models/studentModel");
const worksnapsTimeEntryModel = require("../models/worksnapsTimeEntryModel");

//const getStudentsWithTimeEntries = async (req, res) => {
exports.getTimeEntriesByStudentId = async (req, res) => {
  try {
    console.log("req.params:", req.params);
    const studentId = req.params.studentId;
    console.log("studentId:", studentId);
    const timeEntries = await worksnapsTimeEntryModel
      .find({ student: studentId })
      .populate("student", "firstName lastName")
      .select("timeEntries");
    console.log("timeEntries:", timeEntries);
    res.status(200).json(timeEntries);
    console.log(timeEntries);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//   exports.getTimeEntriesByStudentId = async (req, res) => {
//     try {
//         console.log('req.params:', req.params);
//       const studentId = req.params.studentId;
//       console.log('studentId:', studentId);
//       const timeEntries = await worksnapsTimeEntryModel.aggregate([
//         {
//           $match: { student: studentId }
//         },
//         {
//           $lookup: {
//             from: 'students',
//             localField: 'student',
//             foreignField: '_id',
//             as: 'student'
//           }
//         },
//         {
//             $project: {
//                 _id: 0,
//                 student: {
//                   $arrayElemAt: ['$student', 0]
//                 },
//                 timeEntries: 1
//               }
//             }
//           ]);
//           res.status(200).json(timeEntries);
//         } catch (err) {
//           res.status(400).json({ message: err.message });
//         }
//       };

exports.createTimeEntry = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const timeEntryData = req.body;
    timeEntryData.timestamp = new Date();
    // Create a new WorksnapsTimeEntry document with the provided data
    const newTimeEntry = await worksnapsTimeEntryModel.create({
      student: studentId,
      timeEntries: timeEntryData,
    });

    res.status(201).json(newTimeEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
//module.exports={getTimeEntriesByStudentId}
