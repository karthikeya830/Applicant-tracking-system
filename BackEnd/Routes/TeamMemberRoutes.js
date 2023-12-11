const express = require('express');
const router = express.Router();
const teamMemberController = require('../Controllers/TeamMemberController');

// Get all team members
router.get('/:id', teamMemberController.getTeamMembers);

// Create a new team member
router.post('/', teamMemberController.createTeamMember);

// Get a specific team member
router.get('/single/:id', teamMemberController.getTeamMemberById);

// Update a team member
router.put('/:id', teamMemberController.updateTeamMember);

// Delete a team member
router.delete('/:id', teamMemberController.deleteTeamMember);

module.exports = router;
