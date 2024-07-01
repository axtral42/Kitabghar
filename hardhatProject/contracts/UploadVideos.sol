// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VideoStorage {
    mapping(address => string) public videoHashes;

    function uploadVideo(string memory ipfsHash) public {
        videoHashes[msg.sender] = ipfsHash;
    }

    function getVideoHash(address user) public view returns (string memory) {
        return videoHashes[user];
    }
}
