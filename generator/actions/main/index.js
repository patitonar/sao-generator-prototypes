const typescriptData = require('../../templateData/typescript')
const javascriptData = require('../../templateData/javascript')

module.exports = (answers) => {

  const useTs = answers.language === 'typescript'
  const useWeb3 = answers.ethStack === 'web3'
  const deployScript = useTs ? "buidler run scripts/sample-script.ts" : "buidler run scripts/sample-script.js"

  const templateData = useTs ? typescriptData(answers) : javascriptData(answers)

  const scripts = useTs
    ? {
      "build": "npm run compile && npx buidler typechain"
    }
    : {}

  const truffleJsDevDependencies = {
    "@nomiclabs/buidler-truffle5": "^1.3.4",
    "@nomiclabs/buidler-web3": "^1.3.4",
    "web3": "^1.3.0"
  }

  const waffleJsDevDependencies = {
    "@nomiclabs/buidler-ethers": "^2.0.0",
    "@nomiclabs/buidler-waffle": "^2.1.0",
    "ethereum-waffle": "^3.1.0",
    "ethers": "^5.0.13"
  }

  const truffleTsDevDependencies = {
    "@typechain/ethers-v4": "^1.0.1",
    "@typechain/truffle-v4": "^2.0.3",
    "@typechain/truffle-v5": "^2.0.2",
    "@typechain/web3-v1": "^1.0.0",
    "@types/mocha": "^8.0.3",
    "buidler-typechain": "^0.1.1",
    "truffle": "^5.1.44",
    "ts-generator": "0.0.8",
    "ts-node": "^9.0.0",
    "typechain": "^2.0.0",
    "typechain-target-truffle": "^1.0.2",
    "typescript": "^4.0.2"
  }

  const waffleTsDevDependencies = {
    "@typechain/ethers-v4": "^1.0.1",
    "@typechain/truffle-v4": "^2.0.3",
    "@typechain/truffle-v5": "^2.0.2",
    "@typechain/web3-v1": "^1.0.0",
    "@types/mocha": "^8.0.3",
    "buidler-typechain": "^0.1.1",
    "ts-generator": "0.0.8",
    "ts-node": "^9.0.0",
    "typechain": "^2.0.0",
    "typescript": "^4.0.2"
  }

  const truffleDevDependencies = useTs ? truffleTsDevDependencies : truffleJsDevDependencies
  const waffleDevDependencies = useTs ? waffleTsDevDependencies : waffleJsDevDependencies

  const devDependencies = useWeb3 ? truffleDevDependencies : waffleDevDependencies

  return [
    {
      type: 'add',
      templateDir: 'templates/main',
      files: '**',
      templateData
    },
    {
      type: 'modify',
      files: 'package.json',
      handler: () => {
        return {
          scripts: {
            "compile": "npx buidler compile",
            ...scripts,
            "deploy": deployScript,
            "test": "npx buidler test"
          },
          devDependencies: {
            "@nomiclabs/buidler": "^1.4.5",
            "chai": "^4.2.0",
            ...devDependencies
          }
        }
      }
    }
  ]
}
