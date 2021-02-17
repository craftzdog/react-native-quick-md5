import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { stringMd5 } from 'react-native-quick-md5';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    const md5 = stringMd5('hoge');
    setResult(md5);
    console.log(md5);
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
