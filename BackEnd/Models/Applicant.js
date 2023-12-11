const mongoose = require('mongoose');

const Applicant = new mongoose.Schema({                // unique ID for the applicant
    firstName: String,              // first name of the applicant
    lastName: String,               // last name of the applicant
    email: String,                  // email address of the applicant
    phone: String,                  // phone number of the applicant
    address: String,                // address of the applicant
    resume: String,                 // URL or file path to the applicant's resume
    coverLetter: String,            // URL or file path to the applicant's cover letter
    jobApplied: String,           // ID of the job the applicant applied for
    status: String,                 // applied, under review, rejected, selected, etc.
    notes: String,                  // notes about the applicant
    createdBy: String,            // ID of the user who created the applicant record
    created_at: Date,               // timestamp of when the applicant was created
    updated_at: Date                // timestamp of when the applicant was last updated
  }
  )

const ApplicantModel = mongoose.model('Applicant', Applicant)

module.exports = ApplicantModel