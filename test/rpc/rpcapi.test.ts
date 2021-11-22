import { doesNotMatch } from "assert";
import { expect } from "chai";
import RpcApi from "../../src/api/index";
import { GetCurrencyBalance, GetCurrencyStats } from "../../src/interfaces/chain.interface";
import { DepositPayload } from "../../src/interfaces/deposit.interface";

// tslint:disable-next-line:no-var-requires
const fetch = require("node-fetch");

describe("RPC API", () => {
  const api = new RpcApi("https://testnet.newcoin.org", "farm.nco", fetch);

  const exampleDeposit: DepositPayload = {
    owner: "nco",
    id: "0",
  };

  const exampleCurrency: GetCurrencyBalance = {
    code: "farm.nco",
    account: "nco",
    symbol: "FARM",
  };

  const exampleStats: GetCurrencyStats = {
    code: "farm.nco",
    symbol: "FARM",
  };

  it("fetch deposit by id:" + exampleDeposit.id, async () => {
    const response = await api.getDeposit(exampleDeposit);
    const json = await response.json();
    console.log(json);
  }).timeout(2000);

  it("fetch FARM token balance by account:" + exampleCurrency.account, async () => {
    const response = await api.getCurrencyBalance(exampleCurrency);
    const json = await response.json();
    console.log(json);
  }).timeout(2000);

  it("fetch FARM stats:", async () => {
    const response = await api.getCurrencyStats(exampleStats);
    const json = await response.json();
    console.log(json);
  }).timeout(2000);
});
