module.exports = {
  plugins: {
    '@release-it/bumper': {
      out: {
        file: 'package.json',
        path: [
          'dependencies.package1',
          'dependencies.package2',
        ],
      },
    },
  },
  ...require('../../.config/.release-it.cjs'),
}
