
const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
    firstName: {
      type: String,
      trim: true,
      required:true,
      default: '',

    },
    lastName: {
      type: String,
      trim: true,
      required:true,
      default: ''
    },
    displayName: {
      type: String,
      trim: true,
      required:true,
    },
    municipality: {
      type: String,
      required:true,
    
    }
  },{timestamps:true});
  module.exports=mongoose.model("student",StudentSchema)