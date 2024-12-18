import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navbar from "../components/navbar";
import PDF from "../assets/My CV.pdf";

import "../style/site.scss";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import PDFViewer from "../components/pdf-viewer";

const ResumePage = () => {
    return(
    <Layout>
        <SEO title="Resume" />
        <Navbar/>
        <PDFViewer fileName={PDF}/>
    </Layout>
    );
};

export default ResumePage;

export const Head = () => <title>Résumé</title>;
