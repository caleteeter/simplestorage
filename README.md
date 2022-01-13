# SimpleStorage - Sample of storing sample data in Ethereum

This demonstrates a very simple use of Truffle to build a simple storage of state in Ethereum.

## Prerequisites

- NodeJS - [16.x](https://nodejs.org/en/)

- Truffle - [latest](https://trufflesuite.com/docs/truffle/getting-started/installation.html)

- Ganache-CLI - [latest](https://www.npmjs.com/package/ganache-cli)

## Build

```
truffle compile
```

## Test

```
ganache-cli
truffle test
```

## Interaction

```
ganache-cli (if not started earlier)
truffle console
compile
let s1 = await SimpleStorage.new()
await s1.get()
await s1.set(42);
```
