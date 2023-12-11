const express = require('express');
const router = express.Router();
const applicationController = require('../Controllers/ApplicationController');

// Get all applications for a job
router.get('/', applicationController.getApplications);

// Get a single application by ID
router.get('/:id' , applicationController.getApplicationById);

// Create a new job application
router.post('/', applicationController.createApplication);

module.exports = router;
