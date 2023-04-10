const studentModel = require("../models/studentModel");
const worksnapsTimeEntryModel = require("../models/worksnapsTimeEntryModel");

const createStudent = async (req, res) => {
  const { firstName, lastName, displayName, municipality } = req.body;

  // Validate input
  if (!firstName || !lastName || !displayName || !municipality) {
    return res
      .status(400)
      .send({ status: false, msg: "Missing required fields" });
  }

  // Create new package
  try {
    const student = await studentModel.create({
      firstName,
      lastName,
      displayName,
      municipality,
    });
    res.status(201).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: error.msg });
  }
};

module.exports = { createStudent };
