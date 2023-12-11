const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    resume: {
        type: String,
        required: true,
    },
    coverLetter: {
        type: String,
        required: true,
    },
    jobId :{
        type:String
    },
    appliedDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Application', applicationSchema);
