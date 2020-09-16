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
    artifactImport: useWeb3
      ? "const CounterArtifact = artifacts.require('Counter');\n"
      : "import CounterArtifact from \"../artifacts/Counter.json\";\n",
    artifactTypeImport: "import { Counter } from \"../typechain/Counter\";\n"
  }
}
