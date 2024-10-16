const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  entrepreneur: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fundingGoal: { type: Number, required: true },
  currentFunding: { type: Number, default: 0 },
  deadline: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  blockchainProjectId: { type: Number, required: true }
});

module.exports = mongoose.model('Project', ProjectSchema);