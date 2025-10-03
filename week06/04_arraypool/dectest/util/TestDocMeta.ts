import { TestDetails } from './TestData';
import { TestDocumentDone } from '../doc-states/done';


/**
 * Document header
 */
export type TestDocumentHeader = {
  docTitle: string,
  docDescription: string
}


/**
 * Package information around the document
 * and its details
 */
export type TestDocumentPackage = {
  document: TestDocumentDone;
  details: TestDetails
}

