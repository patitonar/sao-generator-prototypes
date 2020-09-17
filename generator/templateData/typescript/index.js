const getBuidlerExport = (typeChainTarget) => (
  `const config: BuidlerConfig = {
  solc: {
    version: "0.6.8",
  },
  typechain: {
    outDir: "typechain",
    target: "${typeChainTarget}",
  },
};

export default config;`
)

const getTestImports = (useWeb3) => useWeb3
  ? `// @ts-ignore
const Greeter = artifacts.require("Greeter");
import { expect } from "chai";
`
  : `import { waffle, ethers } from "@nomiclabs/buidler";
const { deployContract } = waffle;
import GreeterArtifact from "../artifacts/Greeter.json";
import { Greeter } from "../typechain/Greeter";
import { expect } from "chai";
`

const getTestContractInstance = (useWeb3) => useWeb3
  ? `    const greeter = await Greeter.new("Hello, world!");

`
  : `    const signers = await ethers.getSigners();
    const admin = signers[0];

    greeter = (await deployContract(admin, GreeterArtifact, ["Hello, world!"])) as unknown as Greeter;

`

const getScriptsImports = (useWeb3) => useWeb3
  ? `const bre = require("@nomiclabs/buidler");
// @ts-ignore
const Greeter = artifacts.require("Greeter");
`
  : `import { ethers } from "@nomiclabs/buidler";
import { Contract, ContractFactory } from "ethers";
`

const getScriptsDeploy = (useWeb3) => useWeb3
  ? `  const greeter = await Greeter.new("Hello, world!");`
  : `  const Greeter: ContractFactory = await ethers.getContractFactory("Greeter");
  const greeter: Contract = await Greeter.deploy("Hello, Buidler!");

  await greeter.deployed();`

module.exports = (answers) => {
  const useWeb3 = answers.ethStack === 'web3'
  const typeChainTarget = useWeb3 ? "truffle" : "ethers-v4"
  return {
    buidlerTypes: "import { BuidlerConfig, usePlugin } from \"@nomiclabs/buidler/config\";\n\n",
    buidlerUsePluginEthStack: useWeb3
      ? "usePlugin(\"@nomiclabs/buidler-truffle5\");\n"
      : "usePlugin(\"@nomiclabs/buidler-waffle\");\n",
    buidlerUsePluginTypechain: "usePlugin(\"buidler-typechain\");\n",
    buidlerExport: getBuidlerExport(typeChainTarget),
    testImports: getTestImports(useWeb3),
    testContractVar: useWeb3 ? null : "  let greeter: Greeter;\n\n",
    testContractInstance: getTestContractInstance(useWeb3),
    scriptsImports: getScriptsImports(useWeb3),
    scriptsDeploy: getScriptsDeploy(useWeb3)
  }
}
