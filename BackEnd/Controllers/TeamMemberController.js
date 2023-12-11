const TeamMember = require("../Models/TeamMemberModel");

// Controller for updating a team member by ID
const updateTeamMember = async (req, res) => {
  try {
    const { memberId } = req.params;
    const { name, email, role, avatarUrl, hr } = req.body;

    // Check if the team member exists
    const member = await TeamMember.findById(memberId);
    if (!member) {
      return res.status(404).json({ message: "Team member not found" });
    }

    // Update team member properties
    member.name = name;
    member.email = email;
    member.role = role;
    member.avatarUrl = avatarUrl;
    member.hr = hr;

    // Save the updated team member
    await member.save();

    res.status(200).json({ message: "Team member updated", member });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


// Controller for getting a specific team member by ID
const getTeamMemberById = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await TeamMember.findById(id);
    if (!member) {
      return res.status(404).json({ message: "Team member not found" });
    }

    res.status(200).json({ member });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


// Controller for creating a new team member
const createTeamMember = async (req, res) => {
  try {
    const { name, email, role, avatarUrl, hr } = req.body;

    // Check if team member with given email already exists
    const existingMember = await TeamMember.findOne({ email });
    if (existingMember) {
      return res.status(400).json({ message: "Team member with this email already exists" });
    }

    // Create new team member
    const newMember = new TeamMember({ name, email, role, avatarUrl, hr });
    await newMember.save();

    res.status(201).json({ message: "New team member created", member: newMember });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Controller for getting all team members of a HR
const getTeamMembers = async (req, res) => {
  try {
    const { id } = req.params;
    const teamMembers = await TeamMember.find({ hr: id });
    res.status(200).json({ teamMembers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Controller for deleting a team member
const deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if team member exists
    const member = await TeamMember.findByIdAndDelete(id)
    if (!member) {
      return res.status(404).json({ message: "Team member not found" });
    }
    res.status(200).json({ message: "Team member deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createTeamMember, getTeamMembers, deleteTeamMember, updateTeamMember, getTeamMemberById };