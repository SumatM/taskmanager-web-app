const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
    default:'Pending'
  },
  priority: {
    type: String,
    require: true,
    default:'low'
  },
  startTime: {
    type: String,
    require: true,
  },
  endTime:{
    type:String,
    require: true
  },
  userId: { type: mongoose.Schema.Types.ObjectId, require:true },
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = { taskModel };
