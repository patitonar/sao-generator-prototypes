const getBuidlerExport = () => (
  `module.exports = {
  solc: {
    version: "0.6.8",
  },
};`
)

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

module.exports = (answers) => {
  const useWeb3 = answers.ethStack === 'web3'

  return {
    buidlerTypes: null,
    buidlerUsePluginEthStack: useWeb3
      ? "usePlugin(\"@nomiclabs/buidler-truffle5\");\n"
      : "usePlugin(\"@nomiclabs/buidler-waffle\");\n",
    buidlerUsePluginTypechain: null,
    buidlerExport: getBuidlerExport(),
    testImports: getTestImports(useWeb3),
    testContractVar: null,
    testContractInstance: getTestContractInstance(useWeb3)
  }
}
