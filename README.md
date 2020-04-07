# ownCloud Infinite Scale: Boilerplate

[![Build Status](https://cloud.drone.io/api/badges/owncloud/boilr-ocis-extension/status.svg)](https://cloud.drone.io/owncloud/boilr-ocis-extension)

Template to bootstrap an oCIS Extensions based on [owncloud/ocis-hello](https://github.com/owncloud/ocis-hello)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

[boilr](https://github.com/tmrts/boilr). Binaries for Linux & OSX are currently broken, so please install boilr from source with `go get github.com/tmrts/boilr`. This will install boilr into your $GOPATH.

Please see [Installation](https://github.com/tmrts/boilr/wiki/Installation) page for more information.

## Executing a template

Note that this repo does not need to be cloned. You can download a template and run it:

```console
boilr template download https://github.com/owncloud/boilr-ocis-extension ocis-boilerplate
boilr template use ocis-boilerplate /var/tmp/ocis-boilerplate
```

## License

Apache-2.0

## Copyright

```console
Copyright (c) 2020 ownCloud GmbH <https://owncloud.com>
```
