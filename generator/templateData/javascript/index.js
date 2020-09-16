const getBuidlerExport = () => (
  `module.exports = {
  solc: {
    version: "0.6.8",
  },
};`
)

module.exports = (answers) => {
  const useWeb3 = answers.ethStack === 'web3'

  return {
    buidlerTypes: null,
    buidlerUsePluginEthStack: useWeb3
      ? "usePlugin(\"@nomiclabs/buidler-truffle5\");\n"
      : "usePlugin(\"@nomiclabs/buidler-waffle\");\n",
    buidlerUsePluginTypechain: null,
    buidlerExport: getBuidlerExport(),
    artifactImport: useWeb3
      ? "const CounterArtifact = artifacts.require('Counter');\n"
      : "const CounterArtifact = require(\"../artifacts/Counter.json\");\n",
    artifactTypeImport: null
  }
}
