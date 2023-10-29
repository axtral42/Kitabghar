import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PdfCover = styled.div`
  width: 200px;
  height: 300px;
  margin: 10px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }
`;

const PdfButton = styled.button`
  background: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const PdfPage = () => {
  const [pdfs, setPdfs] = useState([
    { id: 1, name: "PDF 1" },
    { id: 2, name: "PDF 2" },
    { id: 3, name: "PDF 3" },
  ]);
  const [downloadedPdf, setDownloadedPdf] = useState(null);

  const handleGetPdf = (pdfId) => {
    // Implement your PDF download logic here.
    console.log(`Downloaded PDF with ID: ${pdfId}`);
    setDownloadedPdf(pdfId);
  };

  return (
    <PageContainer>
      {pdfs.map((pdf) => (
        <PdfCover key={pdf.id}>
          <h3>{pdf.name}</h3>
          <PdfButton onClick={() => handleGetPdf(pdf.id)}>
            {downloadedPdf === pdf.id ? "Downloaded" : "Get PDF"}
          </PdfButton>
        </PdfCover>
      ))}
    </PageContainer>
  );
};

export default PdfPage;