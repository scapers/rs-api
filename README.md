# RS-API

[![Travis](https://img.shields.io/travis/scapers/rs-api.svg)](https://travis-ci.org/scapers/rs-api)
[![Coveralls](https://img.shields.io/coveralls/scapers/rs-api.svg)](https://coveralls.io/github/scapers/rs-api)
[![Dev Dependencies](https://david-dm.org/scapers/rs-api/dev-status.svg)](https://david-dm.org/scapers/rs-api?type=dev)

### Introduction
`@scapers/rs-api` is an open source wrapper, written with TypeScript using the [TypeScript library starter](https://github.com/alexjoverm/typescript-library-starter), for the popular MMORPG RuneScape.

NOTE: This package is a TypeScript rewrite of [rs-api](https://github.com/axke/rs-api)

### Installation
`npm install @scapers/rs-api`

### Usage
Documentation can be found at [here](https://scapers.github.io/rs-api)

### Contribution
All `.ts` files are found in the `src` folder. The project is hooked in to scripts via the `package.json` scripts, such as `build`, `test`, `commit`, ect. See NPM scripts section below for more details.

This project is set up using `git-cz`. As such, upon committing, use `npm run commit` and fill the template out.

### NPM scripts

 - `npm t`: Run test suite
 - `npm start`: Run `npm run build` in watch mode
 - `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 - `npm run test:prod`: Run linting and generate coverage
 - `npm run build`: Generate bundles and typings, create docs
 - `npm run lint`: Lints code
 - `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)
