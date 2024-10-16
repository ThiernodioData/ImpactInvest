const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
  investor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  transactionHash: { type: String, required: true }
});

module.exports = mongoose.model('Investment', InvestmentSchema);