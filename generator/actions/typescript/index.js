module.exports = (answers) => {

  if (answers.language !== 'typescript') {
    return []
  }

  return [
    {
      type: 'move',
      patterns: {
        'buidler.config.js': 'buidler.config.ts'
      }
    },
    {
      type: 'move',
      patterns: {
        'test/sample-test.js': 'test/sample-test.ts'
      }
    },
    {
      type: 'move',
      patterns: {
        'scripts/sample-script.js': 'scripts/sample-script.ts'
      }
    }
  ]
}
