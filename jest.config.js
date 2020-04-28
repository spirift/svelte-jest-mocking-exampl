module.exports = {
  moduleFileExtensions: ['js', 'svelte'],
  testPathIgnorePatterns: ['node_modules'],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': ['svelte-jester', { preprocess: false }],
  },
}
