// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ImpactInvest is ERC20, Ownable {
    struct Project {
        address entrepreneur;
        uint256 fundingGoal;
        uint256 currentFunding;
        uint256 deadline;
        bool isActive;
        mapping(address => uint256) investments;
    }

    mapping(uint256 => Project) public projects;
    uint256 public projectCount;

    event ProjectCreated(uint256 indexed projectId, address entrepreneur, uint256 fundingGoal, uint256 deadline);
    event InvestmentMade(uint256 indexed projectId, address investor, uint256 amount);
    event ProjectFunded(uint256 indexed projectId);

    constructor() ERC20("ImpactInvest Token", "IIT") {
        _mint(msg.sender, 1000000 * 10**decimals());
    }

    function createProject(uint256 _fundingGoal, uint256 _deadline) external {
        require(_fundingGoal > 0, "Funding goal must be greater than 0");
        require(_deadline > block.timestamp, "Deadline must be in the future");

        projectCount++;
        Project storage newProject = projects[projectCount];
        newProject.entrepreneur = msg.sender;
        newProject.fundingGoal = _fundingGoal;
        newProject.deadline = _deadline;
        newProject.isActive = true;

        emit ProjectCreated(projectCount, msg.sender, _fundingGoal, _deadline);
    }

    function invest(uint256 _projectId, uint256 _amount) external {
        Project storage project = projects[_projectId];
        require(project.isActive, "Project is not active");
        require(block.timestamp < project.deadline, "Project deadline has passed");
        require(_amount > 0, "Investment amount must be greater than 0");

        transfer(address(this), _amount);
        project.investments[msg.sender] += _amount;
        project.currentFunding += _amount;

        emit InvestmentMade(_projectId, msg.sender, _amount);

        if (project.currentFunding >= project.fundingGoal) {
            project.isActive = false;
            emit ProjectFunded(_projectId);
        }
    }

    // Add more functions for withdrawing funds, distributing profits, etc.
}