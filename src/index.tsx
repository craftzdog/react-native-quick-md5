import { NativeModules } from 'react-native';

type QuickMd5Type = {
  multiply(a: number, b: number): Promise<number>;
};

const { QuickMd5 } = NativeModules;

export default QuickMd5 as QuickMd5Type;
