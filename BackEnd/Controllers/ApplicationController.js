const Application = require('../Models/ApplicationModel');

const getApplications = async (req, res) => {
    try {
        const applications = await Application.find();
        res.status(200).json({ applications });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


const createApplication = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            address,
            education,
            resume,
            coverLetter
        } = req.body;

        const application = new Application({
            firstName,
            lastName,
            email,
            phone,
            address,
            education,
            resume,
            coverLetter
        });

        const savedApplication = await application.save();
        res.status(201).json(savedApplication);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getApplicationById = async (req, res) => {
    try {
        const application = await Application.findById(req.params.id);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json({ application });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createApplication,
    getApplications,
    getApplicationById
};
