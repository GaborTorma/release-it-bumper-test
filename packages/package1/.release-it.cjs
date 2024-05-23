module.exports = {
  plugins: {
    '@release-it/bumper': {
      out: {
        file: '../../apps/app1/package.json',
        path: 'dependencies.package1',
        prefix: 'workspace:',
      },
    },
  },
  ...require('../../.config/.release-it.cjs'),
}
