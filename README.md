# react-native-quick-md5

A fast C++ implementation with JSI binding of MD5 for React Native.

## Installation

```sh
npm install react-native-quick-md5
```

## Usage

```js
import { stringMd5 } from 'react-native-quick-md5';

const md5 = stringMd5('hoge');
// => "ea703e7aa1efda0064eaa507d9e8ab7e"
```

### stringMd5(data: string): string

Calculate MD5 for given UTF-8 string data.
Returns hex encoded hash.

### binaryMd5(data: string | ArrayBuffer): string

Calculate MD5 for given binary string or ArrayBuffer data.
Returns hex encoded hash.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

## See also

- [react-native-quick-base64: A fast C++ Base64 module for React Native](https://github.com/craftzdog/react-native-quick-base64)
