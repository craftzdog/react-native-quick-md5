# react-native-quick-md5

A native implementation of MD5

## Installation

```sh
npm install react-native-quick-md5
```

## Usage

```js
import QuickMd5 from 'react-native-quick-md5';

// ...

const result = await QuickMd5.calc(
  'foobar', // message
  'utf8', // input encoding (utf8|base64)
  'base64' // output encoding (hex|base64)
);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
