# Contributing

Thank you for contributing, we accept all types of contributions from typo fixes to new features.

### Reporting Issues

Before submitting an issue, make sure your issue hasn't already been reported by checking the [issue tracker](https://github.com/samarmohan/react-text-loop-next/issues).

## Development

##### We follow the [GitHub Flow](https://guides.github.com/introduction/flow/)

### Setup

1. Fork, then clone the repo:
   `git clone https://github.com/YOUR_USERNAME/react-text-loop-next.git`
2. Run `yarn install` in the project root

3. Run `yarn quality` to make sure your copy of the codebase is clean

### Fixing issues

1. Find an [issue](https://github.com/samarmohan/react-text-loop-next/issues) that you'd like to work on

2. Create a branch, e.g. `patch-#`, `fixes-issue-#`, `feature/description`

3. Make your changes. The entry point is [src/index.ts](./src/index.ts)

4. See [Submitting Changes](#submitting-changes) below

### New Features

Please create an issue before starting something big, we do not want to waste your time implementing a feature we won't merge.

### Submitting Changes

- Run `yarn quality` to make sure your changes follow our style guide.

- Run `yarn commit` or `yarn commit:signed` to generate a commit message using [commitizen](http://commitizen.github.io/cz-cli/)

- The commit hooks using [husky](https://typicode.github.io/husky/#/) will run `yarn quality` (just to make sure), `git add -A` (to re-add the files in case the previous command changed anything), check your commit message using [commitlint](https://commitlint.js.org/#/), and then push your changes to your fork.

- Submit a PR

Please try to keep your pull request focused in scope and avoid including unrelated commits.

After you have submitted your pull request, we'll try to get back to you as soon as possible. We may suggest some changes or improvements.

Thank you for contributing!

## Codebase reference

Committing: We use commitizen, commitlint, and husky to make the commit process easy and fast.

Building: We have a [commonjs tsconfig](./tsconfig.cjs.json) and an [es modules tsconfig](./tsconfig.esm.json) for different build targets. The [base tsconfig](./tsconfig.base.json) is used for generating types.

Quality: ESLint, Prettier, and Jest, are use to maintain codebase quality.

Structure: The structure of the codebase is very simple.

- [\_\_tests\_\_](./__tests__/): [Jest](https://facebook.github.io/jest/) tests.
  - [TextLoop.test.tsx](./__tests__/TextLoop.test.tsx): Tests for the [TextLoop](./src/TextLoop.tsx) component.
- [src](./src/): The source code
  - [index.ts](./src/index.ts): exports the main [TextLoop](./src/TextLoop.tsx) component.
  - [utils.ts](./src/utils.ts): Random utils that [TextLoop](./src/TextLoop.tsx) uses.
  - [TextLoop.tsx](./src/index.ts): This is the one and only component. All the magic happens here.

Build scripts:

```json
"build": "npm-run-all build:*", // build everything
"build:watch": "npm-run-all build:watch:*", // watch build everything
"build:esm": "tsc -p tsconfig.esm.json",
"build:cjs": "tsc -p tsconfig.cjs.json",
"build:types": "tsc -p tsconfig.base.json --declaration --emitDeclarationOnly --declarationDir dist/types",
"build:esm:watch": "tsc -w -p tsconfig.esm.json",
"build:cjs:watch": "tsc -w -p tsconfig.cjs.json",
"build:types:watch": "tsc -w -p tsconfig.base.json --declaration --emitDeclarationOnly --declarationDir dist/types",
```

Test scripts:

```json
"test": "jest",
"test:coverage": "jest --coverage",
```

Lint scripts:

```json
"lint": "npm-run-all lint:*",
"lint:src": "eslint src --fix", // uses eslint
"lint:types": "tsc -p tsconfig.base.json --noEmit", //uses tsc but doesn't emit
```
