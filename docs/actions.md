***

# open

### Parameters:

* @param owner - owner of account balance    
* @param symbol - token symbol
* @param payer - payer of RAM       

### Description:

Creates 0 balance account in balances table.

### Required Authorization:

**payer** account.

### Example:

```typescript
import { ActionGenerator } from "@newfound8ion/newcoin.pool-js";

const actionGenerator = new ActionGenerator("pool.nco");

const action = await actionsGen.open(
  [
    {
      actor: "alice",
      permission: "active",
    },
  ],
  "alice",
  "0,GNCO",
  "alice"
);
```

***

# close

### Parameters:

* @param owner - owner of account balance    
* @param symbol - token symbol

### Description:

Close 0 balance account in balances table.

### Required Authorization:

**owner** account.

### Example:

```typescript
import { ActionGenerator } from "@newfound8ion/newcoin.pool-js";

const actionGenerator = new ActionGenerator("pool.nco");

const action = await actionsGen.close(
  [
    {
      actor: "alice",
      permission: "active",
    },
  ],
  "alice",
  "0,GNCO"
);
```

***

# instunstake

### Parameters:

* @param from - owner of stake
* @param quantity - token quantity

### Description:

Instant unstake tokens.

### Required Authorization:

**from** account.

### Example:

```typescript
import { ActionGenerator } from "@newfound8ion/newcoin.pool-js";

const actionGenerator = new ActionGenerator("pool.nco");

const action = await actionsGen.instunstake(
  [
    {
      actor: "alice",
      permission: "active",
    },
  ],
  "alice",
  "100.0000 GNCO"
);
```

***

# dldunstake

### Parameters:

* @param from - owner of stake
* @param quantity - token quantity

### Description:

Delayed unstake tokens.

### Required Authorization:

**from** account.

### Example:

```typescript
import { ActionGenerator } from "@newfound8ion/newcoin.pool-js";

const actionGenerator = new ActionGenerator("pool.nco");

const action = await actionsGen.dldunstake(
  [
    {
      actor: "alice",
      permission: "active",
    },
  ],
  "alice",
  "100.0000 GNCO"
);
```

***

# redeem

### Parameters:

* @param from - owner of stake
* @param id - id of delayed unstake

### Description:

Redeem delayed unstake.

### Required Authorization:

**from** account.

### Example:

```typescript
import { ActionGenerator } from "@newfound8ion/newcoin.pool-js";

const actionGenerator = new ActionGenerator("pool.nco");

const action = await actionsGen.redeem(
  [
    {
      actor: "alice",
      permission: "active",
    },
  ],
  "alice",
  "1"
);
```

***

# stake

### Parameters:

* @param from - from account
* @param quantity - token quantity

### Description:

Stake to the pool.

### Required Authorization:

**from** account.

### Example:

```typescript
import { ActionGenerator } from "@newfound8ion/newcoin.pool-js";

const actionGenerator = new ActionGenerator("pool.nco");

const action = await actionsGen.stake(
  [
    {
      actor: "alice",
      permission: "active",
    },
  ],
  "alice",
  "100.0000 NCO"
);
```

***