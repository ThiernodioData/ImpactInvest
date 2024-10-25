// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserManagement {
    struct User {
        string email;
        address publicKey;
        bool exists;
        uint256 createdAt;
    }

    mapping(address => User) public users;
    uint256 public totalUsers;

    event UserRegistered(address indexed userAddress, string email, uint256 timestamp);

    function registerUser(string memory _email) public {
        require(!users[msg.sender].exists, "User already exists");
        require(bytes(_email).length > 0, "Email cannot be empty");

        users[msg.sender] = User({
            email: _email,
            publicKey: msg.sender,
            exists: true,
            createdAt: block.timestamp
        });

        totalUsers++;
        
        emit UserRegistered(msg.sender, _email, block.timestamp);
    }

    function getUser(address _userAddress) public view returns (string memory email, address publicKey, uint256 createdAt) {
        require(users[_userAddress].exists, "User does not exist");
        User memory user = users[_userAddress];
        return (user.email, user.publicKey, user.createdAt);
    }

    function userExists(address _userAddress) public view returns (bool) {
        return users[_userAddress].exists;
    }
}