import { NativeModules } from 'react-native';

type MD5InputEncoding = 'utf8' | 'base64';
type MD5OutputEncoding = 'hex' | 'base64';

type QuickMd5Type = {
  calc(
    string: string,
    inputEncoding: MD5InputEncoding,
    outputEncoding: MD5OutputEncoding
  ): string;
};

const { QuickMd5 } = NativeModules;

export default QuickMd5 as QuickMd5Type;
