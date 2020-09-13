const mainActions = require('./actions/main')
const ethStackActions = require('./actions/ethStack')
const typescriptActions = require('./actions/typescript')
const solhintActions = require('./actions/solhint')

module.exports = {
  prepare() {
    if (this.outDir === process.cwd()) {
      throw this.createError(
        `You can't create a new project in current directory`
      )
    }
  },
  prompts() {
    return [
      {
        name: 'ethStack',
        message: 'Choose the stack of ethereum libraries to use',
        type: 'list',
        choices: [
          {
            name: 'Ethers & Waffle',
            value: 'ether'
          },
          {
            name: 'Web3 & Truffle contracts',
            value: 'web3'
          }
        ]
      },
      {
        name: 'language',
        message: 'Choose the language',
        type: 'list',
        choices: [
          {
            name: 'Typescript',
            value: 'typescript'
          },
          {
            name: 'Javascript',
            value: 'javascript'
          }
        ]
      },
      {
        name: 'solhint',
        message: 'Do you want to add Solhint?',
        type: 'confirm'
      }
    ]
  },
  actions() {
    return [
      ...mainActions(this.answers),
      ...typescriptActions(this.answers),
      ...ethStackActions(this.answers),
      ...solhintActions(this.answers)
    ]
  },
  async completed() {
    // Install dependencies
    // await this.npmInstall()
  }
}
