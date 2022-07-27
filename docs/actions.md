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

***

# close

### Parameters:

* @param owner - owner of account balance    
* @param symbol - token symbol

### Description:

Close 0 balance account in balances table.

### Required Authorization:

**owner** account.

***

# instunstake

### Parameters:

* @param from - owner of stake
* @param quantity - token quantity

### Description:

Instant unstake tokens.

### Required Authorization:

**from** account.

***

# dldunstake

### Parameters:

* @param from - owner of stake
* @param quantity - token quantity

### Description:

Delayed unstake tokens.

### Required Authorization:

**from** account.

***

# redeem

### Parameters:

* @param from - owner of stake
* @param id - id of delayed unstake

### Description:

Redeem delayed unstake.

### Required Authorization:

**from** account.

***

# stake

### Parameters:

* @param from - from account
* @param quantity - token quantity

### Description:

Stake to the pool.

### Required Authorization:

**from** account.

***