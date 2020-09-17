const getScriptsImports = (useWeb3) => useWeb3
  ? `const bre = require("@nomiclabs/buidler");
// @ts-ignore
const Greeter = artifacts.require("Greeter");
`
  : `import { ethers } from "@nomiclabs/buidler";
import { Contract, ContractFactory } from "ethers";
`

const getScriptsDeploy = (useWeb3) => useWeb3
  ? `  const greeter = await Greeter.new("Hello, world!");
`
  : `  const Greeter: ContractFactory = await ethers.getContractFactory("Greeter");
  const greeter: Contract = await Greeter.deploy("Hello, Buidler!");

  await greeter.deployed();
`

module.exports = (answers) => {
  const useWeb3 = answers.ethStack === 'web3'

  return {
    artifactImport: useWeb3
      ? "const CounterArtifact = artifacts.require('Counter');\n"
      : "import CounterArtifact from \"../artifacts/Counter.json\";\n",
    scriptsImports: getScriptsImports(useWeb3),
    scriptsDeploy: getScriptsDeploy(useWeb3)
  }
}
