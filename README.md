## ixd

This is the source code for the ixd project, built with [Next.js](https://nextjs.org/), React, TypeScript, and TailwindCSS.

## Features

### Includes

- [React 18](https://beta.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

### Coding Style

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)

### Extra

- Includes `_Dockerfile_` and `_.dockerignore_` files.

## Instructions

- [ ] Rename `name` and `author` fields in `package.json`
- [ ] Change the favicon in `public`
- [ ] Clean up the README
- [ ] Execute `yarn husky install`
- [ ] Execute `yarn husky add .husky/pre-commit "yarn tsc --noEmit && yarn eslint . && yarn prettier --write ."`
