// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract InvestmentPlatform is Ownable {
    struct Project {
        uint256 id;
        string name;
        string description;
        uint256 fundingGoal;
        uint256 currentFunding;
        bool isActive;
        address payable beneficiary;
    }

    mapping(uint256 => Project) public projects;
    uint256 public projectCount;

    IERC20 public paymentToken;

    event ProjectCreated(uint256 indexed projectId, string name, uint256 fundingGoal);
    event InvestmentMade(uint256 indexed projectId, address investor, uint256 amount);
    event ProjectFunded(uint256 indexed projectId);

    constructor(address _paymentToken) {
        paymentToken = IERC20(_paymentToken);
    }

    function createProject(string memory _name, string memory _description, uint256 _fundingGoal, address payable _beneficiary) external onlyOwner {
        projectCount++;
        projects[projectCount] = Project(projectCount, _name, _description, _fundingGoal, 0, true, _beneficiary);
        emit ProjectCreated(projectCount, _name, _fundingGoal);
    }

    function invest(uint256 _projectId, uint256 _amount) external {
        Project storage project = projects[_projectId];
        require(project.isActive, "Project is not active");
        require(project.currentFunding + _amount <= project.fundingGoal, "Exceeds funding goal");

        require(paymentToken.transferFrom(msg.sender, address(this), _amount), "Transfer failed");

        project.currentFunding += _amount;
        emit InvestmentMade(_projectId, msg.sender, _amount);

        if (project.currentFunding == project.fundingGoal) {
            project.isActive = false;
            require(paymentToken.transfer(project.beneficiary, project.currentFunding), "Transfer to beneficiary failed");
            emit ProjectFunded(_projectId);
        }
    }

    function getProject(uint256 _projectId) external view returns (Project memory) {
        return projects[_projectId];
    }
}