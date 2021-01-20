import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PDF from "../Resume/Resume.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    return (
        <div>
            <Document
                file={PDF}
                // onLoadSuccess={this.onDocumentLoadSuccess}
            >
            <Page pageNumber={1}/>    
            </Document>

        </div>
    )
}

export default Resume;