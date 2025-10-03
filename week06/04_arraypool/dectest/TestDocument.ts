import { TestDocumentBase } from './doc-states/base';
  
/**
 * TestDocument
 * This will create metadata information
 * surrounding the test suite included
 * and the different sections
 * 
 */
export class TestDocument {

  static GlobalDocumentID = 1;
  
  testTitle: string = '';
  testDescription: string = '';

  
  static section() {
    return new TestDocumentBase();
  }


  /**
   * Sets the test title
   */
  title(testTitle: string) {
    this.testTitle = testTitle;
    return this;
  }

  /**
   * Sets the description of the test
   */
  description(testDesc: string) {
    this.testDescription = testDesc;
    return this;
  }

  /**
   * Produces a document that relates to the object
   */
  document() {
    //TODO: Not working
  }
  
  
}
