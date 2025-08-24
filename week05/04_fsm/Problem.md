
# Deterministic Finite Automata

DFAs are an important foundation to computation and language, they underpin foundational computer science and language as they help encode a set of machine states that correspond to a set symbols.

Let's break down the different components though:

* `symbol` - Simply, you an consider this to be a character like `R` or `!`. A `symbol` belongs to an alphabet.

* `state` - A state that the machine is in, there are two kinds of states. There are also a subset of states which are part of the rest of the states. 

* `transition` - A `state` has a way that it can transition from itself to another state. Given a series of symbols that correspond to an alphabet, we are able to move the cursor into different states.


## What needs to be done

You will need to implement everything in `DFA` and `State` in the `dfa.ts` file that are marked `TODO`.

For `State`:

* `constructor` - Initialise the state object, set specific fields.

* `setTransition` - Given a state object, the state object will know have an association to that state based on its symbol.

* `getSymbol` - Gets the symbol associated with the state, simple getter

* `getNext` - Gets the next state based on the symbol


For `DFA`:

* `constructor` - Initialise the state machine, provides a starting point state.

* `getCursor` - Gets the current state that it is currently in

* `next` - Gets the next state based on the symbol (consider what you can reuse)

* `evaluate` - Evaluates an array of strings (symbols) to identify if it is in an accept state or not (consider what you can use reuse).


## How to test

You can test your implementation using `npm test`. In the event your encounter an error, please make sure you have installed the required dependencies with `npm install`.
