import { TestDocumentDraft } from './draft';
import { TestDetails } from '../util/TestData';
import { TransitionMap }
  from './transition';

/**
 * Incomplete Test Document
 */
export class TestDocumentIncomplete
  extends TestDocumentDraft {

  constructor(docTitle: string, desc: string) {
    super(docTitle, desc);
  }

  finish(testDetails: TestDetails) {
    const pkg = TransitionMap.get("TestDocumentDone")!;
    const TestDocumentDone = pkg.trigger;
    const {title, description} = this.review();
    return TestDocumentDone.next(
      title, description,
      {
        testData: null,
        testDetails
      })
  }
  
}

