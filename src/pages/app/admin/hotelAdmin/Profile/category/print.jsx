// YourComponent.js
import React from "react";
import PrintList from "./PrintList";
import ExportToExcel from "./ExportToExcel";
import pdfFile from "../../../../../../assets/pdf/pdf.pdf"; // Replace with the actual path to your PDF file

const YourComponent = ({ data }) => {
  const handlePrintList = () => {
    // Open PDF file in a new window for printing
    window.open(pdfFile, "_blank");
  };

  return (
    <div>
      {/* Your existing component content */}
      <button onClick={handlePrintList}>Print List</button>

      {/* Print-friendly version */}
      <PrintList data={data} />

      {/* Export to Excel */}
      <ExportToExcel data={data} />
    </div>
  );
};

export default YourComponent;
