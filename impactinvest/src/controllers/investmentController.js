const Investment = require('../models/Investment');
const Project = require('../models/Project');
const blockchainService = require('../services/blockchainService');

exports.makeInvestment = async (req, res) => {
  try {
    const { projectId, amount } = req.body;
    const project = await Project.findById(projectId);
    if (!project || !project.isActive) {
      return res.status(400).json({ message: 'Invalid or inactive project' });
    }
    
    const transactionHash = await blockchainService.invest(project.blockchainProjectId, amount, req.user._id);
    
    const investment = new Investment({
      investor: req.user._id,
      project: projectId,
      amount,
      transactionHash
    });
    await investment.save();
    
    project.currentFunding += amount;
    if (project.currentFunding >= project.fundingGoal) {
      project.isActive = false;
    }
    await project.save();
    
    res.status(201).json(investment);
  } catch (error) {
    res.status(400).json({ message: 'Investment failed', error: error.message });
  }
};

exports.getInvestments = async (req, res) => {
  try {
    const investments = await Investment.find({ investor: req.user._id }).populate('project', 'title');
    res.json(investments);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch investments', error: error.message });
  }
};