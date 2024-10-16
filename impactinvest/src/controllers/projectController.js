const Project = require('../models/Project');
const blockchainService = require('../services/blockchainService');

exports.createProject = async (req, res) => {
  try {
    const { title, description, fundingGoal, deadline } = req.body;
    const blockchainProjectId = await blockchainService.createProject(req.user._id, fundingGoal, deadline);
    const project = new Project({
      title,
      description,
      entrepreneur: req.user._id,
      fundingGoal,
      deadline,
      blockchainProjectId
    });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Project creation failed', error: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ isActive: true }).populate('entrepreneur', 'name');
    res.json(projects);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch projects', error: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('entrepreneur', 'name');
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch project', error: error.message });
  }
};