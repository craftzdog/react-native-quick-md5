import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import QuickMd5 from 'react-native-quick-md5';


export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    QuickMd5.multiply(3, 7).then(setResult);
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
