import { doesNotMatch } from "assert";
import { expect } from "chai";
import { ChainApi } from "../../src/api/index";
import { GetCurrencyBalance, GetCurrencyStats, UnstakePayload } from "../../src/interfaces";

// tslint:disable-next-line:no-var-requires
const fetch = require("node-fetch");

describe("Chain API", () => {
  const api = new ChainApi("https://testnet.newcoin.org", "pool.nco", fetch);

  const exampleUnstake: UnstakePayload = {
    owner: "nco",
    id: "0",
  };

  const exampleCurrency: GetCurrencyBalance = {
    code: "pool.nco",
    account: "nco",
    symbol: "GNCO",
  };

  const exampleStats: GetCurrencyStats = {
    code: "pool.nco",
    symbol: "GNCO",
  };

  it("fetch unstake by id:" + exampleUnstake.id, async () => {
    const response = await api.getUnstake(exampleUnstake);
    const json = await response.json();
    console.log(json);
  }).timeout(2000);

  it("fetch GNCO token balance by account:" + exampleCurrency.account, async () => {
    const response = await api.getCurrencyBalance(exampleCurrency);
    const json = await response.json();
    console.log(json);
  }).timeout(2000);

  it("fetch GNCO stats:", async () => {
    const response = await api.getCurrencyStats(exampleStats);
    const json = await response.json();
    console.log(json);
  }).timeout(2000);
});
