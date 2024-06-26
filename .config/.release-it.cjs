// eslint-disable-next-line no-template-curly-in-string
const version = '${version}'
// eslint-disable-next-line node/prefer-global/process
const packageName = process.env.npm_package_name
const scope = packageName

module.exports = {
  /* plugins: {
    '@release-it/conventional-changelog': {
      path: '.',
      infile: 'CHANGELOG.md',
      preset: 'conventionalcommits',
      gitRawCommitsOpts: {
        path: '.',
      },
    },
  }, */
  git: {
    push: true,
    tagName: `${packageName}-v${version}`,
    commitsPath: '.',
    commitMessage: `feat(${scope}): released version v${version} [no ci]`,
    requireCommits: true,
    requireCommitsFail: false,

    requireCleanWorkingDir: false,
  },
  npm: {
    publish: false,
    versionArgs: ['--workspaces false'],
  },
  github: {
    release: true,
    releaseName: `${packageName}-v${version}`,
  },
  /* hooks: {
    'before:git:release': [
      'mvm-update',
      'git add --all',
    ],
  }, */
}
