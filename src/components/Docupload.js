import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const DocumentUploadContainer = styled.div`
  text-align: center;
  
`;

const DocumentInput = styled.input`
  display: none;
`;

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const FileBox = styled.label`
  border: 2px dashed #007bff;
  padding: 50px;
  display: inline-block;
  border-radius: 10px;
  position: relative;
  animation: ${moveUpDown} 2s linear infinite;
  background-color: #f8f9fa;
`;

const UploadButton = styled.label`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  margin-top: 10px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
`;

const DocumentUpload = () => {
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileUpload = (event) => {
    // Perform file upload logic here
    // You can send the selected file to a server or IPFS for actual file storage

    setIsUploaded(true);
  };

  return (
    <DocumentUploadContainer>
      <FileBox htmlFor="fileInput">
        <DocumentInput type="file" id="fileInput" onChange={handleFileUpload} />
        Upload Document
      </FileBox>
      {isUploaded && <SuccessMessage>Uploaded Successfully</SuccessMessage>}
    </DocumentUploadContainer>
  );
};

export default DocumentUpload;
