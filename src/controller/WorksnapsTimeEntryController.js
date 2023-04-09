const studentModel= require("../models/studentModel");
const worksnapsTimeEntryModel = require("../models/worksnapsTimeEntryModel");
const WorksnapsTimeEntry= require("../models/worksnapsTimeEntryModel")




// const getAllStudentEntry=async (req, res) => {
//     // Find all WorksnapsTimeEntry documents and populate their 'student' field with their corresponding Student document
//     // worksnapsTimeEntryModel.find().populate('student').exec((err, timeEntries) => {
//     //   if (err) {
//     //     console.error(err);
//     //     return res.status(500).json({ error: 'Error fetching time entries' });
//     //   }
//       // Create an object to store each student's time entries
//       const timeEntry = await worksnapsTimeEntryModel
//         .find()
//         .populate("student")
        
//       if (!timeEntry) {
//         return res.status(400).send({ status: false, msg: "Package not found" });
//       }
//       const students = {};
//       // Loop through each time entry
//       students.forEach((timeEntry) => {
//         // Get the student associated with the time entry
//         const student = timeEntry.student;
//         // If we haven't seen this student before, add them to the object
//         if (!students[student._id]) {
//           students[student._id] = {
//             firstName: student.firstName,
//             lastName: student.lastName,
//             timeEntries: {}
//           };
//         }
//         // Add the time entries to the student's object
//         students[student._id].timeEntries[timeEntry._id] = timeEntry.timeEntries;
//       });
//       // Return the object with each student's time entries
//       return res.json(students);
//     }
  



// // const getAllStudentEntry = async (req, res) => {
// //     //const { id } = req.params;
  
// //     try {
// //       const package = await worksnapsTimeEntryModel
// //         .find()
// //         .populate("student")
        
// //       if (!package) {
// //         return res.status(400).send({ status: false, msg: "Package not found" });
// //       }
// //       res.json(package);
// //     } catch (error) {
// //       console.error(error);
// //       res.status(500).send({ status: false, msg: error.msg });
// //     }
// //   };
  
//   module.exports={getAllStudentEntry}




// this api is pending i update morning