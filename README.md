# Winter 2025 Exams for SEF1

## Deadlines and exams schedule
  
- IM-41 Deadline: 2025-01-15 12:00, Exams: 2025-01-16 10:00-18:00
- IM-42 Deadline: 2025-01-16 12:00, Exams: 2025-01-17 10:00-18:00
- IM-43 Deadline: 2025-01-08 12:00, Exams: 2025-01-09 10:00-18:00
- IM-44 Deadline: 2025-01-09 12:00, Exams: 2025-01-10 10:00-18:00

## Prerequisites

- You need github and gmail accounts, node.js, and a text editor or any IDE installed
- You can use any online materials, docs, FAQs, AI tools, Videos, etc. it is not important how can you get understanding of tasks and solutions, but we need understanding, not just solutions done
- Here are additional materials you may refer to:
  - [JavaScript Guide - English version on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
  - [JavaScript for beginners - Ukrainian version](https://youtu.be/FlXsGI7rzWE)
  - [JavaScript for beginners - Russian version](https://youtu.be/HetL0ETbN6Y)
  - [Large lectures for first year students](https://github.com/HowProgrammingWorks/Index/blob/master/Courses/Fundamentals.md)
  - [Large lectures with time codes](https://github.com/HowProgrammingWorks/Index/blob/master/Courses/Fundamentals-timecodes.md)
  - [Dictionary](https://github.com/HowProgrammingWorks/Dictionary)
  - [Git docs](https://git-scm.com/docs)
  - [Git tutorial](https://www.w3schools.com/git/)
  - [Github tutorial](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git)
- Seminars and lectures closely related to exams:
  - [Seminar 1](https://youtu.be/eYjf_WrYAqk)
  - [Seminar 2](https://youtu.be/05iTAT_t6cI)
  - [Antipatterns and refactoring](https://www.youtube.com/playlist?list=PLHhi8ymDMrQb3PVcPFAUI-ZgtAMkpq9yV)
  - See examples in `/Example` directory

## Steps to pass the exam

- Choose [one or more of alternatives](https://github.com/HowProgrammingWorks/Winter-2025-Exams/blob/main/README.md#choose-alternative)
- Clone and fill the self assessment repo: https://github.com/HowProgrammingWorks/SelfAssessment
  - Fill your skills before course in branch: `main`
  - Fill your skills after course in branch: `2025-winter`
  - Open pull request from `2025-winter` to `main` but do not merge it
- Fill this form: https://forms.gle/saZw1PRo9aiQiF1Y8
  - Double-сheck if the form has been submitted, editing is allowed
  - A notification should be sent to your mailbox
- Submit form before deadline and come to the exams

## Choose alternative

- Solve tasks from this repo
  - In JavaScript: https://github.com/HowProgrammingWorks/Winter-2025-Exams/tree/main/Tasks
  - If you prefer any other language instead of JavaScript then translate the code into your language as close as possible
- Here is more difficult tasks in addition or instead of previous: https://github.com/HowProgrammingWorks/Winter-2025-Exams/tree/main/Difficult
- Open-source contribution: submit to google forms
- Conference talk or seminar participation: submit link to google forms
- For those who want technical interview: submit link to google forms
- For those who have projects instead of this exams tasks:
  - Pet projects, commercial projects, practical programming experience in products
  - You need to create a screencast video presentation of codebase and project functionality (15-30 minutes long)
  - Upload it to Youtube, Google Drive, or other hosting with video support and add link to this video in your project repository
- Articles: submit links to google forms
- MDN contribution: submit links to google forms

## Tasks

- Fork this repository: https://github.com/HowProgrammingWorks/Winter-2025-Exams
- Clone this repository to your machine or you can do everything in Github integrated VSCode IDE
- Create branch `exams`
- See directory `/Tasks` there are 38 tasks prepared in one of the worst possible implementation and style and N more tasks to be implemented from the scratch
- You can select from 3 to 6 tasks (except `difference.js` and `size.js`) to refactor and optimize
- In implemented tasks code works and gives right results. You need to change files but do not break functionality covered by tests
- In tasks without given implementation we have just tests and they should pass
- To improve code style you may use:
  - Eslint to check style and analyze syntax: https://eslint.org
    - Here is recommended eslint config: https://github.com/HowProgrammingWorks/Future/blob/master/eslint.config.js
    - Rules in sources: https://github.com/metarhia/eslint-config-metarhia
  - Prettier to optimize style and code layout: https://prettier.io
    - Here is config example: https://github.com/HowProgrammingWorks/Future/blob/master/prettier.config.js
  - Package.json example: https://github.com/HowProgrammingWorks/Future/blob/master/package.json
- Use tests from `*.tests.js` files to check tasks functionality
  - For example run: `node size.test.js` to check `size.js` or `npm t` (to check all taks)
  - Output example: `Test size.js: Passed: 11 of 11`
  - If tests fails you will see something like: `Case: size(23456789) -> "23 mb", expected: "123 mb"`
- Your task is to improve (respect list priority):
  - Code readability
  - Code style
  - Simplicity
  - Quality
  - Supportability
  - Reliability
  - Testability
- I'd advice to find a few friends from the group and cross-review the code
- Here is a checklist of common problems we have in code:
  - Do not mutate function input parameters
  - Prefer arrow functions in JavaScript and `lambda` in `Python`
  - Preferably use `for..of` or `for` on a variable or `Array/map`, and avoid `for..in` and `forEach`
  - Use intermediate identifiers to separate long expressions
  - Prefer `const` and use `let` as a last resort, but never use `var`
  - Convert all magic values to constants
  - Follow the rules for naming identifiers
  - Think carefully about the names of identifiers so that when reading the code, everyone understands their contents
  - Don't make functions too long (5-10 lines preferably, ...20 is ok, but...)
  - Don't make a big stack of if statements, use arrays and objects instead
- Hints:
  - Use eslint and prettier, fix all warnings
  - Follow code style and naming conventions from lectures and code examples
  - Respect 2 space indentation
  - Add empty line between semantic blocks for visual separation
  - Don't change incoming parameters
  - Decompose complex functions
  - Respect SRS (separation of concerns)
  - Respect SRP (single responsibility principle)
  - Prefer const, minimize let usage
  - Remove unneeded operations, calls, arguments, blocks, etc.
  - Prefer arrow functions
  - Use round brackets even for single argument lambda functions
  - Optimize loop invariant
  - Optimize lexical scope, minimize area of identifier visibility
  - Prefer `for..of` loops, sometimes use classical `for`, in a rare use `.map()`, try to avoid `.forEach()`
  - Use intermediate variables
  - Decompose long expressions
  - Return result of logical expression instead of `return true; else return false;`
- Make each refactoring and optimization step a separate commit
- It is important not to rewrite a code from scratch but to improve it step by step
- At the seminar (see links above), I showed an example of how to optimize the code step by step
- When you're done, make a pull request to my repository
- Good luck!
