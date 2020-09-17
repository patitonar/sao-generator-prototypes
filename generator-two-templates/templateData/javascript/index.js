const getTestImports = (useWeb3) => useWeb3
  ? `const Greeter = artifacts.require("Greeter");
const { expect } = require("chai");
`
  : `const { expect } = require("chai");
  `

const getTestContractInstance = (useWeb3) => useWeb3
  ? `    const greeter = await Greeter.new("Hello, world!");

`
  : `    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    
    await greeter.deployed();
`

const getScriptsImports = (useWeb3) => useWeb3
  ? `const bre = require("@nomiclabs/buidler");
const Greeter = artifacts.require("Greeter");
`
  : `const bre = require("@nomiclabs/buidler");
`

const getScriptsDeploy = (useWeb3) => useWeb3
  ? `  const greeter = await Greeter.new("Hello, world!");
`
  : `  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Buidler!");

  await greeter.deployed();
`

module.exports = (answers) => {
  const useWeb3 = answers.ethStack === 'web3'

  return {
    buidlerUsePluginEthStack: useWeb3
      ? "usePlugin(\"@nomiclabs/buidler-truffle5\");\n"
      : "usePlugin(\"@nomiclabs/buidler-waffle\");\n",
    testImports: getTestImports(useWeb3),
    testContractInstance: getTestContractInstance(useWeb3),
    scriptsImports: getScriptsImports(useWeb3),
    scriptsDeploy: getScriptsDeploy(useWeb3)
  }
}
