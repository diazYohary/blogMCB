import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import LoadingScreen from "../LoadingScreen/LoadingScreen";
import CloseButton from "../CloseButton/CloseButton";
import pdfIcon from '@/assets/img/Icons/pdf.svg'
import styles from './PDFViewer.module.scss'

const goToPage = (targetPage) => {
    const element = document.querySelector(`[data-page-number="${targetPage}"]`);

    if (element) {
        element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    } else {
        console.warn(`No se encontró la página: ${targetPage}`);
    }
};

const sampleUlr='https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf';

// ~ MAIN COMPONENT

const PDFViewer = ({url}) => {
    const fileUrl=url || sampleUlr;
    const [isOpen, setIsOpen]=useState(false);
    const [isLoading, setIsLoading]=useState(false);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const bodyClass = styles.no_scroll;
        
        if (isOpen) {
            document.body.classList.add(bodyClass);
        } else {
            document.body.classList.remove(bodyClass);
            setPageNumber(1);
            setIsLoading(true);
        }

        return () => document.body.classList.remove(bodyClass);
    }, [isOpen, fileUrl]);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setIsLoading(false);
    }

    if (!isOpen) {
        return (
        <button className="mcb-cta-btn" onClick={() => setIsOpen(true)}>
            Ver PDF
        </button>
        );
    }

    return (
        <div className={styles.document_overlay}>
            {isLoading && (<LoadingScreen/>)}

            <div className={`${styles.document_panel} mcb-flex mcb-jc-c mcb-ai-c`}>
                <nav className={`${styles.document_panel_cont} mcb-flex mcb-gap-20 mcb-ai-c mcb-jc-sb`}>
                    <div className="mcb-flex mcb-gap-10 mcb-ai-c">
                        <CloseButton onClose={()=>setIsOpen(false)}/>
                        <img src={pdfIcon} alt="PDF" />
                        <p className={styles.document_name}>Vista previa</p>
                    </div>                    
                </nav>
            </div>

            <div className={`mcb-flex-c mcb-ai-c ${styles.document_cont}`}>
                <Document
                    file={fileUrl} 
                    onLoadSuccess={onDocumentLoadSuccess}
                    className={`mcb-flex-c ${styles.document}`}
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={window.innerWidth > 600 ? 600 : window.innerWidth - 30}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            className={styles.document_page}
                        />
                    ))}
                </Document>
            </div>

            {numPages > 1 && (
                <footer className={`mcb-flex mcb-jc-c mcb-gap-20 ${styles.document_page_controls}`}>
                    <button 
                    className={styles.document_page_controls_nav}
                    disabled={pageNumber <= 1} 
                    onClick={() => {
                        setPageNumber(pageNumber - 1);
                        goToPage(pageNumber - 1);
                    }}
                    >
                    Anterior
                    </button>
                    
                    <span className="mcb-page-info">
                    {pageNumber} / {numPages}
                    </span>

                    <button 
                    className={styles.document_page_controls_nav}
                    disabled={pageNumber >= numPages} 
                    onClick={() => {
                        setPageNumber(pageNumber + 1);
                        goToPage(pageNumber+1);
                    }}
                    >
                    Siguiente
                    </button>
                </footer>
            )}
        </div>
    )
}

export default PDFViewer
