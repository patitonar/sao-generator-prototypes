module.exports = (answers) => {
  const when = (condition, value, fallback) => (condition ? value : fallback)
  return [
    {
      type: 'move',
      patterns: {
        'buidler.config.js': 'buidler.config.ts'
      }
    }
  ]
}
