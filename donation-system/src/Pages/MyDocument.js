import { Document, Page } from 'react-pdf';
import sampleFile from './M2.pdf';

function MyDocument() {
    return (
        <Document file={sampleFile}>
            <Page pageNumber={1} />
        </Document>
    );
}

export default MyDocument;