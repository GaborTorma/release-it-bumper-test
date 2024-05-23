module.exports = {
  plugins: {
    '@release-it/bumper': {
      out:
        [
          {
            file: '../../apps/app1/package.json',
            path: 'dependencies.package2',
            prefix: 'workspace:',
          },
          {
            file: '../../apps/app2/package.json',
            path: 'dependencies.package2',
            prefix: 'workspace:',
          },
        ],
    },
  },
  ...require('../../.config/.release-it.cjs'),
}
