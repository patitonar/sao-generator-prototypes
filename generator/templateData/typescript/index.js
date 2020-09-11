module.exports = (answers) => {
  return {
    buidlerTypes: "import { BuidlerConfig, usePlugin } from \"@nomiclabs/buidler/config\";\n",
    artifactImport: answers.ethStack === 'web3'
      ? "const CounterArtifact = artifacts.require('Counter');\n"
      : "import CounterArtifact from \"../artifacts/Counter.json\";\n",
    artifactTypeImport: "import { Counter } from \"../typechain/Counter\";\n"
  }
}
