module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (message) =>
      /^Merge pull request #\d+ from Ruiwen523\/develop$/.test(message)
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'add',
        'build',
        'ci',
        'chore',
        'draft',
        'docs',
        'remove',
        'feat',
        'fix',
        'perf',
        'test',
        'refactor',
        'revert',
        'style',
        'wip'
      ]
    ]
  }
};
