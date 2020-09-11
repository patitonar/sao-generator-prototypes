const typescriptData = require('../../templateData/typescript')
const javascriptData = require('../../templateData/javascript')

module.exports = (answers) => {

  const templateData = answers.language === 'typescript' ? typescriptData(answers) : javascriptData(answers)

  return [
    {
      type: 'add',
      templateDir: `templates/${answers.language}`,
      files: '**',
      templateData
    },
    {
      type: 'modify',
      files: 'package.json',
      handler: () => {
        return {
          name: this.outFolder,
          private: true,
          scripts: {
            "compile": "npx buidler compile",
          },
          devDependencies: {
            "@nomiclabs/buidler": "^1.4.5",
          }
        }
      }
    }
  ]
}
