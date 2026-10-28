import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(0);
  const previewRef = useRef(null);

  useEffect(() => {
    const preview = previewRef.current;
    let frame;
    const observer = new ResizeObserver(([entry]) => {
      const nextWidth = Math.floor(entry.contentRect.width);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setWidth(nextWidth));
    });
    observer.observe(preview);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div>
      <Container fluid className="resume-section page-with-header">
        <Particle />
        <Container className="page-header">
        <h1 className="project-heading">
          My <strong className="purple">Resume </strong>
        </h1>
        <p style={{ color: '#8C7960' }}>
          Here is my latest resume.
        </p>
      </Container>

        <div className="resume resume-preview" ref={previewRef}>
          <Document file={pdf}>
            {width > 0 && (
              <Page pageNumber={1} width={width} renderTextLayer={false} />
            )}
          </Document>
        </div>

        <Row className="resume-download">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
