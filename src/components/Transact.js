import React, { useState } from "react";
import styled from "styled-components";

const MarketplaceContainer = styled.div`
  text-align: center;
`;

const ItemCard = styled.div`
  background: #f4f4f4;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  display: inline-block;
  width: 200px;
`;

const BuyButton = styled.button`
  background: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SellButton = styled.button`
  background: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Marketplace = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 15 },
  ]);

  const handleBuy = (itemId) => {
    // Implement the buy logic here (e.g., connecting to a smart contract).
    console.log(`Bought item with ID: ${itemId}`);
  };

  const handleSell = () => {
    // Implement the sell logic here (e.g., creating a new item listing).
    console.log("Item listed for sale");
  };

  return (
    <MarketplaceContainer>
      <h1>Blockchain Marketplace</h1>
      <div>
        {items.map((item) => (
          <ItemCard key={item.id}>
            <h2>{item.name}</h2>
            <p>Price: {item.price} ETH</p>
            <BuyButton onClick={() => handleBuy(item.id)}>Buy</BuyButton>
          </ItemCard>
        ))}
      </div>
      <div>
        <h2>Sell an Item</h2>
        <SellButton onClick={handleSell}>Sell Item</SellButton>
      </div>
    </MarketplaceContainer>
  );
};

export default Marketplace;