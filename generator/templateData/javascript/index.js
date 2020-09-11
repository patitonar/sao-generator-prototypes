module.exports = (answers) => {
  return {
    buidlerTypes: null,
    artifactImport: answers.ethStack === 'web3'
      ? "const CounterArtifact = artifacts.require('Counter');\n"
      : "const CounterArtifact = require(\"../artifacts/Counter.json\");\n",
    artifactTypeImport: null
  }
}