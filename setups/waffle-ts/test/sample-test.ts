import { waffle, ethers } from "@nomiclabs/buidler";
const { deployContract } = waffle;
import GreeterArtifact from "../artifacts/Greeter.json";
import { Greeter } from "../typechain/Greeter";
import { expect } from "chai";

describe("Greeter", function() {
  let greeter: Greeter;

  it("Should return the new greeting once it's changed", async function() {
    const signers = await ethers.getSigners();
    const admin = signers[0];

    greeter = (await deployContract(admin, GreeterArtifact, ["Hello, world!"])) as unknown as Greeter;

    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
