# ownCloud Infinite Scale: Boilerplate

Template to bootstrap an oCIS Extensions based on [owncloud/ocis-hello](https://github.com/owncloud/ocis-hello)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

[boilr](https://github.com/tmrts/boilr). Binaries for Linux & OSX are built automatically by Travis every release.
You can download them directly or run the installation script.

Please see [Installation](https://github.com/tmrts/boilr/wiki/Installation) page for more information.

## Executing a template

Note that this repo does not need to be cloned. You can refer to the template via the boilr cli like:

```console
Download a project template from a github repository to template registry

Usage:
  boilr template download <template-repo> <template-tag> [flags]

Flags:
  -f, --force              Overwrite existing template with the same name
  -h, --help               help for download
  -l, --log-level string   log-level for output (default "error")
```

example:

```console
~/code/ocis-boilerplate
❯ boilr template download https://github.com/littlemanco/boilr-makefile makefile
[✔] Successfully downloaded the template "makefile"

~/code/ocis-boilerplate
❯ boilr template list
+------------------+-----------------------------------------------+----------------+
|       TAG        |                  REPOSITORY                   |    CREATED     |
+------------------+-----------------------------------------------+----------------+
| makefile         | https://github.com/littlemanco/boilr-makefile | 6 seconds ago  |
| ocis-boilerplate | local:/Users/aunger/code/ocis-boilerplate     | 13 minutes ago |
+------------------+-----------------------------------------------+----------------+

~/code/ocis-boilerplate
❯ boilr template use makefile ~/Desktop/test-makefile
[?] Please choose a value for "ProjectNs" [default: "www-example-com"]:
[✔] Created Makefile
[✔] Successfully executed the project template makefile in /Users/aunger/Desktop/test-makefile
```

## License

Apache-2.0

## Copyright

```console
Copyright (c) 2019 ownCloud GmbH <https://owncloud.com>
```