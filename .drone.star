def main(ctx):
  before = [
    test(ctx),
  ]

  stages = []

  after = []

  return before + stages + after

def test(ctx):
  return {
    'kind': 'pipeline',
    'type': 'docker',
    'name': 'test',
    'platform': {
      'os': 'linux',
      'arch': 'amd64',
    },
    'steps': [
      {
        'name': 'validate',
        'image': 'owncloudci/boilr',
        'pull': 'always',
        'commands': [
          'boilr template validate .',
        ],
      },
      {
        'name': 'save',
        'image': 'owncloudci/boilr',
        'pull': 'always',
        'commands': [
          'boilr template save . ocis-boilerplate',
        ],
      },
    ]
  }
  