// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BuyMaterials {
    address public owner;
    uint256 public itemCount;
    uint256 public nextItemId;

    struct Item {
        address seller;
        string name;
        string description;
        uint256 price;
        bool available;
    }

    mapping(uint256 => Item) public items;

    event ItemAdded(uint256 itemId, address seller, string name, uint256 price);
    event ItemPurchased(uint256 itemId, address buyer);

    constructor() {
        owner = msg.sender;
        itemCount = 0;
        nextItemId = 1;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    modifier itemExists(uint256 itemId) {
        require(itemId > 0 && itemId <= itemCount, "Item does not exist");
        _;
    }

    modifier itemAvailable(uint256 itemId) {
        require(items[itemId].available, "Item is not available");
        _;
    }

    function addItem(
        string memory name,
        string memory description,
        uint256 price
    ) public {
        require(bytes(name).length > 0, "Name cannot be empty");
        require(price > 0, "Price must be greater than zero");

        items[nextItemId] = Item(msg.sender, name, description, price, true);
        itemCount++;
        emit ItemAdded(nextItemId, msg.sender, name, price);
        nextItemId++;
    }

    function purchaseItem(
        uint256 itemId
    ) public payable itemExists(itemId) itemAvailable(itemId) {
        require(msg.value >= items[itemId].price, "Insufficient funds sent");

        address seller = items[itemId].seller;
        uint256 itemPrice = items[itemId].price;
        items[itemId].available = false;
        payable(seller).transfer(itemPrice);
        emit ItemPurchased(itemId, msg.sender);
    }
}
