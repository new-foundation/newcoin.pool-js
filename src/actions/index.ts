export type EosioAuthorizationObject = { actor: string; permission: string };

export type EosioActionObject = {
  account: string;
  name: string;
  authorization: EosioAuthorizationObject[];
  data: any;
};

/* tslint:disable:variable-name */

export class ActionGenerator {
  constructor(readonly contract: string, readonly token_contract: string) {}

  async open(
    authorization: EosioAuthorizationObject[],
    owner: string,
    symbol: string,
    payer: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "open", {
      owner,
      symbol,
      payer
    });
  }

  async close(
    authorization: EosioAuthorizationObject[],
    owner: string,
    symbol: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "close", {
      owner,
      symbol
    });
  }

  async instunstake(
    authorization: EosioAuthorizationObject[],
    from: string,
    quantity: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "instunstake", {
      from,
      quantity
    });
  }

  async dldunstake(
    authorization: EosioAuthorizationObject[],
    from: string,
    quantity: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "dldunstake", {
      from,
      quantity
    });
  }

  async redeem(
    authorization: EosioAuthorizationObject[],
    from: string,
    id: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "redeem", {
      from,
      id
    });
  }

  async stake(
    authorization: EosioAuthorizationObject[],
    from: string,
    quantity: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.token_contract, authorization, "transfer", {
      from: from,
      to: this.contract,
      quantity: quantity,
      memo: "lock"
    });
  }

  protected _pack(
    account: string,
    authorization: EosioAuthorizationObject[],
    name: string,
    data: any
  ): EosioActionObject[] {
    return [{ account, name, authorization, data }];
  }
}
