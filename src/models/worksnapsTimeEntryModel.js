const mongoose = require('mongoose');
const { Schema } = mongoose;

const WorksnapsTimeEntrySchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'student'
  },
  timeEntries: {
    type: Object,
   
  }
});
module.exports=mongoose.model("WorksnapsTimeEntry",WorksnapsTimeEntrySchema)