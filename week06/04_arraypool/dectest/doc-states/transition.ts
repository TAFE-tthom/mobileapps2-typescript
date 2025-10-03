import {TestData, TestDetails }
  from '../util/TestData';
import { TestDocumentDraft,
  TestDocumentInheritedDraft } from './draft';
import { TestDocumentIncomplete }
  from './incomplete';
import { TestDocumentDone } from './done';
import { TestDocumentBase } from './base';

/**
 * Standard transition object
 */
export type TransitionNextData<I=any, O=any, E=any, S=any> = {
  testData: TestData<I, O, E, S> | null;
  testDetails: TestDetails<I, O, E, S, I> | null;
}

/**
 * As an object, we can associate it with
 * a key and a function
 */
export type TransitionObject<T=any> = {
  name: string,
  trigger: DocumentTransitionTrigger<T>
}

/**
 * Describe the transition type
 * and force it to be consumable within a
 * constructor
 */
export interface DocumentTransitionTrigger<T=any,
  I=any, O=any,
  E=any, S=any> {

  next(title: string,
    description: string,
    testNextData?: TransitionNextData<I, O, E, S>): T;
}

export const TransitionMap:
  Map<string, TransitionObject> = new Map();

export const TransitionRegister
  = <T extends Function>(kind: T) => {
    const name = kind.name;
    const triggerObj = {
      name,
      trigger: {
        next: (title: string,
          description: string,
          nextData?: TransitionNextData | null
          
          ) => {
          return new kind.prototype
            .constructor(title,
            description, nextData);
        }
      }
    };
    TransitionMap.set(name, triggerObj);
}
  

TransitionRegister(TestDocumentInheritedDraft)  
TransitionRegister(TestDocumentIncomplete)
TransitionRegister(TestDocumentBase)
TransitionRegister(TestDocumentDraft)
TransitionRegister(TestDocumentDone)
