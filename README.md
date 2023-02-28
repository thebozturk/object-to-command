# Converter Object To Cli Command's arguments.

An open source npm package for converting objects to cli command's arguments.

## Install

NPM

```sh
$ npm i object-to-command --save
```

Yarn

```sh
$ yarn add object-to-command
```

## Basic Usage

```ts
import { objectToCommand } from 'object-to-command';

const exampleObject = {
  buildType: 'debug',
  version: '1.0.0',
  forceUpdate: true,
  deploymentType: 'development',
};
objectToCommand(exampleObject);

Result: `--build-type=debug --version=1.0.0 --force-update --deployment-type=development`
```

## Tests

```sh
$ npm test
$ yarn test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
