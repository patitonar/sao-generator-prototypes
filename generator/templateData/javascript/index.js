module.exports = (answers) => {
  return {
    buidlerTypes: null,
    artifactImport: answers.ethStack === 'web3' ? "const Counter = artifacts.require('Counter');\n" : "import Counter from \"../artifacts/Counter.json\";\n",
    artifactTypeImport: null
  }
}
