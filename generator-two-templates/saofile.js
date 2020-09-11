const mainActions = require('./actions/main')
const ethStackActions = require('./actions/ethStack')

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
      }
    ]
  },
  actions() {
    return [
      ...mainActions(this.answers),
      ...ethStackActions(this.answers),
    ]
  },
  async completed() {
    // Install dependencies
    // await this.npmInstall()
  }
}
