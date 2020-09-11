module.exports = (answers) => {
  return {
    artifactImport: answers.ethStack === 'web3'
      ? "const CounterArtifact = artifacts.require('Counter');\n"
      : "import CounterArtifact from \"../artifacts/Counter.json\";\n",
  }
}
