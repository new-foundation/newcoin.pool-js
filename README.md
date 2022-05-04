# newcoin.pool-js

JS Library to interact with newcoin.pool contract.

## Usage

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install @newcoin-foundation/newcoin.pool-js
```

### Initialize

Web library can be found in the [dist] folder

```javascript
// standard import
const { ActionGenerator, RpcApi} = require("newcoinpool");

// ES6 import
import {ActionGenerator, RpcApi} from "newcoinpool"
```

## Documentation

### RpcApi

Uses only native nodeos calls to chain api plugin.

### ActionGenerator

Helper class to construct contract actions which can be pushed on chain with eosjs.