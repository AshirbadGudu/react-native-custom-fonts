/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Black}>Black</Text>
      <Text style={styles.ExtraBold}>ExtraBold</Text>
      <Text style={styles.Bold}>Bold</Text>
      <Text style={styles.SemiBold}>SemiBold</Text>
      <Text style={styles.Medium}>Medium</Text>
      <Text style={styles.Regular}>Regular</Text>
      <Text style={styles.Light}>Light</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {padding: 10},
  Black: {fontSize: 30, fontFamily: 'Nunito-Black'},
  Bold: {fontSize: 30, fontFamily: 'Nunito-Bold'},
  ExtraBold: {fontSize: 30, fontFamily: 'Nunito-ExtraBold'},
  Light: {fontSize: 30, fontFamily: 'Nunito-Light'},
  Medium: {fontSize: 30, fontFamily: 'Nunito-Medium'},
  Regular: {fontSize: 30, fontFamily: 'Nunito-Regular'},
  SemiBold: {fontSize: 30, fontFamily: 'Nunito-SemiBold'},
  Italic: {fontSize: 30, fontFamily: 'Nunito-Italic'},
});
