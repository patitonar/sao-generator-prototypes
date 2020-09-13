module.exports = (answers) => {

  if (!answers.solhint) {
    return []
  }

  return [
    {
      type: 'add',
      templateDir: 'templates/solhint',
      files: '**',
    },
    {
      type: 'modify',
      files: 'package.json',
      handler: (data) => {
        data.devDependencies = {
          ...data.devDependencies,
          "solhint": "^3.0.0",
        }
        return data
      }
    }
  ]
}
