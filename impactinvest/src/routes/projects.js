const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, projectController.createProject);
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProjectById);

module.exports = router;