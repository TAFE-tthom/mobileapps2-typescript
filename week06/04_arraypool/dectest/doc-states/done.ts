import { TestDocumentDraft } from './draft';
import { TestDetails } from '../util/TestData';
import { TransitionMap, TransitionNextData }
  from './transition';

export class TestDocumentDone extends
  TestDocumentDraft {
  
  #testDetails: TestDetails | null;
  
  constructor(title: string,
    description: string,
    testDetails: TransitionNextData) {
    super(title, description);
    this.#testDetails = testDetails.testDetails;
  }


  inheritSection() {
    const {title, description} = this.review();
    const pkg = TransitionMap
      .get('TestDocumentInheritedDraft')!
    const TestDocumentInheritedDraft = pkg.trigger;
    let doc = TestDocumentInheritedDraft.next(title,
      description, {
        testData: this.#testDetails!.testData,
      testDetails: this.#testDetails})
    return doc;
  }

  finish() {
    return this.extract();
  }

  extract() {
    const rest = super.extract();
    rest.unshift(this);
    return rest;
  }   
}

