# Advent of Code with TS (to be updated)

## Basic Project Setup

### Init NodeJS based project with defaults
```shell
npm init -y
```

### TS related stuff
```shell
npm i -D typescript
npm i -D ts-node
npm i -D tslib @types/node nodemon
npx tsc --init --rootDir src
npm i -D @tsconfig/node21
```
### ESLint, Prettier, AirBNB
```shell
npx install-peerdeps --dev eslint-config-airbnb-base
npm i -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser prettier \
  eslint-plugin-prettier eslint-config-prettier
```
