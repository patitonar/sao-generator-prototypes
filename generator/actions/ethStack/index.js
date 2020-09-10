module.exports = (answers) => {
  const when = (condition, value, fallback) => (condition ? value : fallback)
  return [
    {
      type: 'modify',
      files: 'package.json',
      handler: (data) => {
        const {ethStack} = answers
        const useWeb3 = ethStack && ethStack === 'web3'

        data.devDependencies = {
          ...data.devDependencies,
          web3: when(useWeb3, '^1.2.11'),
          ethers: when(!useWeb3, '^5.0.12'),
        }
        return data
      }
    }
  ]
}
