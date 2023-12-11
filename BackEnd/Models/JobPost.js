const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  recruitmentQuota: {
    type: Number,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  hrId: {
    type:String
  },
  location: {
    type: String,
    required: true
  },
  informationToInterviewer: {
    type: String,
    required: true
  },
  NoOfApplications: {
    type: Number,
  },
  datePosted: {
    type: Date,
    default: Date.now
  }
});

const JobPost = mongoose.model('JobPost', jobPostSchema);

module.exports = JobPost;