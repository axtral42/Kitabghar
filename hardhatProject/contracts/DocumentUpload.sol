// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract DocumentUpload {
    struct Document {
        string url;
        uint256 reward; // Reward in tokens
    }

    mapping(address => Document[]) public documents;
    mapping(address => uint256) public userTokens; // User's token balances

    event DocumentUploaded(
        address indexed uploader,
        string url,
        uint256 reward
    );

    constructor() {}

    function uploadDocument(string memory url, uint256 reward) external {
        require(reward > 0, "Reward must be greater than zero");

        // Store the document and reward
        documents[msg.sender].push(Document(url, reward));

        // Add the reward to the uploader's token balance
        userTokens[msg.sender] += reward;

        emit DocumentUploaded(msg.sender, url, reward);
    }

    function getDocumentCount(address user) external view returns (uint256) {
        return documents[user].length;
    }

    function getDocument(
        address user,
        uint256 index
    ) external view returns (string memory url, uint256 reward) {
        require(index < documents[user].length, "Document index out of range");
        Document storage doc = documents[user][index];
        return (doc.url, doc.reward);
    }
}
