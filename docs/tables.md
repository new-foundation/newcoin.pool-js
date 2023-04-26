***

# accounts

### Scope:
**account** name.

## Fields:

* **balance** - balance of the account

### Definition:

```cpp
#pragma once
#include <eosio/asset.hpp>
#include <eosio/eosio.hpp>

using namespace eosio;

namespace poolnco 
{
    struct [[eosio::contract("nc.pool"), eosio::table]] account
    {
        asset balance;

        uint64_t primary_key() const
        {
            return balance.symbol.code().raw();
        }
    };
    using accounts = multi_index<name("accounts"), account>;
}
```

***

# stat

### Scope:
**raw symbol code** of the token.

## Fields:

* **supply** - current token supply
* **max_supply** - token max supply
* **issuer** - issuer account

### Definition:

```cpp
#pragma once
#include <eosio/asset.hpp>
#include <eosio/eosio.hpp>

using namespace eosio;

namespace poolnco 
{
    struct [[eosio::contract("nc.pool"), eosio::table]] currency_stats
    {
        asset supply;
        asset max_supply;
        name issuer;

        uint64_t primary_key() const
        {
            return supply.symbol.code().raw();
        }
    };

    using stats = multi_index<name("stat"), currency_stats>;
}
```

***

# unstakes

### Scope:
**owner** account.

## Fields:

* **id** - unstake id
* **unstake_quantity** - unstake quantity
* **unstake_date** - unstake date
* **redeem_date** - redeem date

### Definition:

```cpp
#pragma once
#include <eosio/eosio.hpp>

using namespace eosio;

namespace poolnco 
{
    struct [[eosio::contract("nc.pool"), eosio::table]] unstake_row
    {
        uint64_t id;
        extended_asset unstake_quantity;
        time_point_sec unstake_date;
        time_point_sec redeem_date;

        uint64_t primary_key() const
        {
            return id;
        }
    };
    using unstakes_table = multi_index<name("unstakes"), unstake_row>;
}
```
