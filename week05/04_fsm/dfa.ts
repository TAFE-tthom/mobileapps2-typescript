
/**
 * DFAState interface that outlines necessary methods for
 */
export interface DFAState {

  /**
   * Gets the next
   */
  getNext(symbol: string): DFAState; 

  /**
   * Sets the transition to be associated with the symbol
   */
  setTransition(symbol: string, state: DFAState): void;

  /**
   * Outlines if the state is considered an accept state or not
   */
  accept(): boolean;
  
}



/**
 * State class generalisation
 */
export class State implements DFAState {

  /**
   * Constructor, stateName is passed and is associated with this state
   */
  constructor(stateName: string) {
    //TODO: Implement the constructor
  }

  /**
   * Sets the transition to be associated.
   */
  setTransition(symbol: string, state: DFAState) {
    //TODO: Update this method
  }


  /**
   * Gets the next symbol it is connected to using the symbol
   * If the association doesn't exist, it should return InvalidState
   */
  getNext(symbol: string) {
    // TODO: Update this method
    // use the symbol to look up the transition
    return new InvalidState();
  }

  /**
   * If it finishes in this state, it is considered invalid
   * or not accepted
   */
  accept() {
    return false;
  }
}

/**
 * Predefined version of an InvalidState
 * NOTE: Do not update this class
 */
export class InvalidState extends State {

  /**
   * Invalid state, empty string
   */
  constructor() { super(''); }

  /**
   * Does not redirect, all symbols redirect to this state
   */
  getNext(_symbol: string) {
    return this;
  }
}

/**
 * Outlines the accept state when transitioned to this state
 * If it completed in this state, it will be considered `accepted`.
 * NOTE: Do not update this class
 */
export class AcceptState extends State {

  /**
   * Accept state outcome, if finishes in this state, it is valid
   */
  accept() {
    return true;
  }
  
}

/**
 * Deterministic Finite Automata, this allows a DFA to be constructed
 * with a series of states that the DFA can then evaluate against
 * a sequence against.
 */
export class DFA {

  //TODO: Update the fields you want associated

  /**
   * Constructs the DFA with a root state given
   */
  constructor(root: DFAState) {
    //TODO: Set the root and any other field you want associated
  }

  /**
   * Gets the current position in the machine
   */
  getCursor(): DFAState {
    //TODO: Implement this method
    return new InvalidState();
  }

  /**
   * Updates the cursor based on symbol given
   */
  next(symbol: string): DFAState {
    //TODO: Gets the next state in the graph
    return new InvalidState();
  }
  
  /**
   * Given an array of symbols which will be evaluated in order,
   * It will traverse the graph and call `accept()` on the
   * last state
   */
  evaluate(symbols: Array<String>): boolean {
    //TODO: Implement the `evaluate` method

    return false;
  }
  
}
