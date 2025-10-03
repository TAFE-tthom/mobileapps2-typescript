import { TestDocumentHeader }
  from '../util/TestDocMeta';
import { TestDetails} from '../util/TestData';
import { TestDocumentBase, TransitionMap } from './base';

import {
  TestDetailsInheritedBuilder,
  TestDetailsBuilder} from
  './suite-states/details';
import { TransitionNextData } from './transition';




export class TestDocumentDraft
  extends TestDocumentBase {

  #header: TestDocumentHeader;
  #testDetails: TestDetails | null = null;

  
  constructor(docTitle: string,
    docDescription: string,
    nextData: TransitionNextData | null = null) {

    super(docTitle, docDescription);
    if(nextData != null) {
      this.#testDetails = nextData.testDetails;
    }
    this.#header = {
      docTitle: docTitle,
      docDescription: docDescription
    }
  }

  title(docTitle: string) {
    this.#header.docTitle = docTitle;
    return this;
  }

  /**
   * Sets the document description
   */
  description(docDescription: string) {
    this.#header.docDescription = docDescription;
    return this;
  }

  
  review() {
    return {
      title: this.#header.docTitle,
      description: this.#header.docDescription
    }
  }
  
  /**
   * Opens up into the test case details
   * description before generation
   */
  details() {
    const title = this.#header.docTitle;
    const description = this.#header
      .docDescription;
    const { trigger } = TransitionMap
      .get("TestDocumentIncomplete")!;
    const IncompleteObject = trigger;
    if(this.#testDetails) {
      const testData = this.#testDetails.testData;
      const evalFn = this.#testDetails.testEvalFn;
      const operFn = this.#testDetails.testOperFn;


      return new TestDetailsInheritedBuilder( IncompleteObject.next(title, description, {
        testData,
        testDetails: this.#testDetails
      }), testData, { operFn, evalFn },)

    }
    return new TestDetailsBuilder(
      IncompleteObject.next(title, description));
  }
  
}



/**
 * InheritedDraft
 */
export class TestDocumentInheritedDraft
  extends TestDocumentDraft {

  #testDetails: TestDetails
    
  constructor(title: string, description: string, testDetails: TestDetails) {
    super(title, description,
    {
      testDetails,
      testData: null
    });
    this.#testDetails = testDetails;
    
  }

  details() {
    const pkg = TransitionMap.get("TestDocumentIncomplete")!;
    const TestDocumentIncomplete = pkg.trigger;
    const {title, description} = this.review();
    this.#testDetails.testData.document =
      TestDocumentIncomplete.next(title, description);

    return TestDetailsInheritedBuilder
      .fromDetails({
        testDetails: this.#testDetails,
        testData: null
      });
  }

}



