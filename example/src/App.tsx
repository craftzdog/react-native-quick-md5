/* global performance */
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import { Buffer } from 'buffer';
import { binaryMd5 } from 'react-native-quick-md5';
// @ts-ignore
import SparkMD5 from 'spark-md5';
import { data } from './image.json';

const dataToProcess = Buffer.from(data, 'base64').buffer;

const sleep = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

export default function App() {
  const [processingJSMd5, setProcessingJSMd5] = useState<boolean>(false);
  const [jsMd5Result, setJsMd5Result] = useState<number>(0);
  const [processingNativeMd5, setProcessingNativeMd5] = useState<boolean>(
    false
  );
  const [nativeMd5Result, setNativeMd5Result] = useState<number>(0);

  const handleNativeMd5Press = async () => {
    setProcessingNativeMd5(true);
    await sleep(1);
    const startTime = performance.now();

    for (let iter = 0; iter < 100; iter++) {
      binaryMd5(dataToProcess);
    }
    const finishedTime = performance.now();
    console.log('done! took', finishedTime - startTime, 'milliseconds');
    setNativeMd5Result(finishedTime - startTime);
    setProcessingNativeMd5(false);
  };

  const handleJSMd5Press = async () => {
    setProcessingJSMd5(true);
    await sleep(1);
    const startTime = performance.now();

    for (let iter = 0; iter < 100; iter++) {
      const spark = new SparkMD5.ArrayBuffer();
      spark.append(dataToProcess);
      spark.end();
    }
    const finishedTime = performance.now();
    console.log('done! took', finishedTime - startTime, 'milliseconds');
    setJsMd5Result(finishedTime - startTime);
    setProcessingJSMd5(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>MD5 in C++</Text>
      <Text style={styles.result}>
        {nativeMd5Result > 0 ? nativeMd5Result + `milliseconds` : ''}
      </Text>
      <Pressable onPress={handleNativeMd5Press} style={styles.button}>
        <Text>
          {processingNativeMd5 ? `Processing..` : 'Perform a benchmark test'}
        </Text>
      </Pressable>

      <Text style={styles.heading}>spark-md5 JS</Text>
      <Text style={styles.result}>
        {jsMd5Result > 0 ? jsMd5Result + ` milliseconds` : ''}
      </Text>
      <Pressable onPress={handleJSMd5Press} style={styles.button}>
        <Text>
          {processingJSMd5 ? `Processing..` : 'Perform a benchmark test'}
        </Text>
      </Pressable>
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
  heading: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  result: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: { backgroundColor: 'skyblue', padding: 12 },
});
