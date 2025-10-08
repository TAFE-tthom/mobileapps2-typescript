# Programming-TS

This repository contains over 40+ programming exercises in typescript that will run with `nodejs`. Each task has test-cases associated with it to check your answer to help people check their answer and improve.

Similar to the previous repository, you will need to have `nodejs` runtime and `typescript/tsc` compiler.

## Goals

The main goals with this repository are:

* Large number of questions to cover many different topics of
javascript including:
  * Typescript Basics, Generics and Interfaces
  * Data Structures (Lists, Trees, Graphs, Maps, Caches)
  * IO, Sockets, Websockets
  * Algorithms (Merge Sort, Traversals, Compression)
  * More to come as this is not where it ends.

* Provide quicker feedback while learning typescript
* Ensure standards are met and that when working

It also acts as a continuation from programming1-js repository and starts stepping up the difficulty.

## Students

These questions can be used as part of another resource for learning javascript. Outside of those resources, students are able to clone this repository and 

Using `git`, clone this repository and start on a question you believe is most appropriate. If you are a beginner and have only a fleeting amount of experience with javascript, please start at `week02`.

When interacting with these questions, please read the `Problem.md` file in a text editor. Some markdown files will refer to files which contain images.

* NOTE: In the future we will contain a renderer for markdown or reference to pandoc to convert the markdown file to a pdf to view in a regular GUI.

Afterwards, once you have navigated to the question you are working on, make sure you have a terminal open and also at the same location (if not done yet) and run `npm install`. This will install the required dependencies for testing your solution.

Once you have developed a solution, please run `npm test`, this will run it against the test suite given and outline if you have passed or failed different test cases.


## Teachers

While the way you want to arrange the course may not align with the current week ordering that has been outlined here. You are free to arrange/mix the questions in a way that is logical for your classroom.

For example, you may be introducing javascript after teaching HTML and CSS first, this may be a case where `week02` is actually `week05`. Feel free to update the naming scheme or to contextualise the learning of this content in a form that works for your class.

Please provide some attribution with these questions when referenced in your course material.

NOTE: In the future, the naming of the folders will likely refer to `set` rather than `week` as to allow for easier mixing of questions with other existing content.

## FAQ

* *Where are the solutions?*

Similarly with a mathsbook, the back of the book answers normally don't outline the steps required but the test cases will outline what is to be expected when an algorithm has been implemented satifactorily.

* *I have found a problem with the question*

Great! It is impossible for myself to say that I am infallable, please create an issue within Github and outline 


* *Why are you using `require` instead of `import`*

This is a fair question! I am in the process of converting the questions over to `vitest` which has nice defaults for typescript and imports, this will happen in due time.


* *Why do I have to install all dependencies over and over?*

This is a fair complaint, I will outline that I will likely be making a dependency in place to reduce the amount of times `npm` has to download the `jest`/`vitest` dependency.

* *Could the questions and/or structure of the weeks/sets change?*

Yes! The current repository is an initial batch of questions. In the future, better categorisation of topic areas is to be instilled.

* *Would you include much harder questions/content?*

Yes but not necessarily in just this repository. While it will contain what I will outline to be **necessary** content, I am likely to consider the appropriateness of this repository based on the goal of building up necessary knowledge to learn more complex topics.

* *When the questions are public, the answers will also be public! How do I prevent cheating?*

Sure! This is common problem that all teachers face, the best guide I can give is by talking with the student when previous demonstrations indicate that they wouldn't be able to meet a particular performance. These can include:

* Talking to them about their solution and asking how they implemented certain aspects
* Discussing with them how they could implement a feature to their existing solution
* Giving you a description of the problem space and what issues they outlined
* Requiring them to provide a journal of how they solved the problem
* Create a derivative problem for them to solve or recontextualise the problem

These are a few techniques that I have found to be very effective when dishonesty is suspected.

## Contributors

* Tyson Thomas, TAFE NSW

* Contributors who have either not wanted to be named or attributed in the question right now.

I will be updating the contributor list later on once I have received further details on how best to integrate their questions and how they want to be represented.

If I have made an attribution error, my sincere apologies ahead of time and please create an issue so we can amend this quickly.

## License

This repository is currently licensed under GPL3, this is to ensure that modifications and distribution is kept open for all.
