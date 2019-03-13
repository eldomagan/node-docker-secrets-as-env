# Docker secrets as env

This node module load docker secrets as environment variables using [@cloudreach/docker-secrets](https://www.npmjs.com/package/@cloudreach/docker-secrets). It work only with secrets prefixed with env_ or custom prefix.

## Installation

```shell
npm install --save docker-secrets-as-env
```

## Usage

```js
require('docker-secrets-as-env')(options)
```

### Options

| Option        | Type    | default |
| ------------- |:-------:| -------:|
| prefix        | String  | ENV_    |
