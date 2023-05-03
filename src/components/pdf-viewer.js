import * as React from "react";
import File from "../assets/Tuan_Resume_Stage.pdf"
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
      <div
        style={{
          maxHeight: "1440px",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Viewer
          fileUrl={File}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
};

export default PDFViewer;
