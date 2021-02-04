import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import QuickMd5 from 'react-native-quick-md5';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    const res = QuickMd5.calc('hoge', 'utf8', 'base64');
    setResult(res);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
