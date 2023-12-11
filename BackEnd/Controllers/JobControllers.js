const Job = require('../Models/JobPost')

// GET /jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({  });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getJobByHrId = async (req, res) => {
  const userId = req.params.id; // Assuming the user ID is passed as a URL parameter
  console.log(userId)
  try {
      const user = await Job.find({ hrId : userId });

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
  } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
  }
};


// POST /jobs
const createJob = async (req, res) => {
  const job = new Job({
    title: req.body.title,
    description: req.body.description,
    department: req.body.department,
    jobType: req.body.jobType,
    hrId:req.body.hrId,
    experience: req.body.experience,
    recruitmentQuota: req.body.recruitmentQuota,
    salary: req.body.salary,
    location: req.body.location,
    informationToInterviewer: req.body.informationToInterviewer,
  });

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET /jobs/:id
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job == null) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PATCH /jobs/:id
const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job == null) {
      return res.status(404).json({ message: 'Job not found' });
    }
    job.title = req.body.jobTitle || job.title;
    job.description = req.body.jobDescription || job.description;
    job.department = req.body.department || job.department;
    job.jobType = req.body.jobType || job.jobType;
    job.experience = req.body.experience || job.experience;
    job.recruitmentQuota = req.body.recruitmentQuota || job.recruitmentQuota;
    job.salary = req.body.salary || job.salary;
    job.location = req.body.location || job.location;
    job.informationToInterviewer = req.body.informationToInterviewer || job.informationToInterviewer;

    const updatedJob = await job.save();
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /jobs/:id
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job == null) {
      return res.status(404).json({ message: 'Job not found' });
    }
    await job.deleteOne()
    // await job.remove();
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getJobs,
  createJob,
  getJobById,
  updateJob,
  deleteJob,
  getJobByHrId
};
