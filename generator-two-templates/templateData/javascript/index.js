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
    artifactImport: useWeb3
      ? "const CounterArtifact = artifacts.require('Counter');\n"
      : "const CounterArtifact = require(\"../artifacts/Counter.json\");\n",
    scriptsImports: getScriptsImports(useWeb3),
    scriptsDeploy: getScriptsDeploy(useWeb3)
  }
}
