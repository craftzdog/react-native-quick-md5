# react-native-quick-md5

A native implementation of MD5 for performance

## Installation

```sh
npm install react-native-quick-md5
```

## Usage

```js
import QuickMd5 from 'react-native-quick-md5';

// ...

const result = QuickMd5.calc(
  'foobar', // message
  'utf8', // input encoding (utf8|base64)
  'base64' // output encoding (hex|base64)
);
```

### calc(message, inputEncoding, outputEncoding) -> string

- `message`: `string` - A data to calc an MD5 digest
- `inputEncoding`: `'utf8'` | `'base64'` - The encoding of the input data
- `outputEncoding`: `'hex'` | `'base64'` - The encoding of the output data
- **return**: string - The MD5 digest

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
