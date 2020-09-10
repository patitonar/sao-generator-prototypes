module.exports = (answers) => {
  return {
    buidlerTypes: "import { BuidlerConfig, usePlugin } from \"@nomiclabs/buidler/config\";\n",
    artifactImport: answers.ethStack === 'web3'
      ? "const Counter = artifacts.require('Counter');\n"
      : "import Counter from \"../artifacts/Counter.json\";\n",
    artifactTypeImport: "import { Counter } from \"../typechain/Counter\";\n"
  }
}
