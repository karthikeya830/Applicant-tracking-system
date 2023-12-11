const express = require('express');
const { getJobs, createJob, getJobById, updateJob, deleteJob, getJobByHrId } = require('../Controllers/JobControllers')
const router = express.Router();

router.route('/').get(getJobs)
router.route('/hr/:id').get(getJobByHrId)
router.route('/create').post(createJob);
router.route('/update/:id').post(updateJob);
router.route('/delete/:id').post(deleteJob);
router.route('/:id').get(getJobById);

module.exports = router