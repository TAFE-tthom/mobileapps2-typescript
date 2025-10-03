import { TestDocumentPackage }
  from '../util/TestDocMeta'

export class TestDocumentBase {

  #previous: TestDocumentBase | null = null;
  #docTitle: string = '';
  #docDescription: string = '';

  constructor(docTitle: string = '',
    docDescription: string = '',
  ) {
    this.#docTitle = docTitle
    this.#docDescription = docDescription;
  }

  /**
   * Sets the document title
   */
  title(docTitle: string) {
    const pkg =
      TransitionMap.get('TestDocumentDraft')!;
    const TestDocumentDraft = pkg.trigger;
    this.#docTitle = docTitle;

    return TestDocumentDraft.next(
      this.#docTitle,
      this.#docDescription
    )
  }

  /**
   * TestDocumentBase 
   */
  section() {
    return new TestDocumentBase();
  }

  /**
   * Sets the document description
   */
  description(docDescription: string) {
    this.#docDescription = docDescription;
    return this;
  }
  
  review() {
    return {
      title: this.#docTitle,
      description: this.#docDescription
    }
  }

  /**
   * Extracts all the completed documents
   * so far
   */
  extract() {
    let documents: Array<TestDocumentBase> = []
    let current = this.#previous;
    while(current != null) {
      documents.unshift(current);
    }
    return documents;
  }
  
  //TODO: Double check this?
  static from(pkg: TestDocumentPackage) {
    const tpkg = TransitionMap
      .get('TestDocumentInheritedDraft')!;
      
    const TestDocumentInheritedDraft = tpkg.trigger;
    const {title, description} = pkg.document.review();
    let draft = TestDocumentInheritedDraft
    .next(title, description, {
      testDetails: pkg.details,
      testData: null
      }
    );

    draft.#previous = pkg.document;;

    return draft;
  }

}

//WARN: We need to have a better solution to
// transitions, this is terrible
export const { TransitionMap } =
  await import('./transition');
