/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet, Button, View, TouchableOpacity, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: 'SourceCodePro-Medium',
          fontSize: 40,
        }}>
        business.id
      </Text>
      <Text
        style={{
          fontFamily: 'SourceCodePro-Medium',
          fontSize: 20,
          paddingBottom: 40,
        }}>
        new business idea
      </Text>
      <TouchableOpacity>
        <Text
          style={{
            fontFamily: 'SourceCodePro-Medium',
            fontSize: 20,
            borderWidth: 1.5,
            paddingHorizontal: 10,
            paddingVertical: 4,
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <Text style={{fontFamily: 'SourceCodePro-Medium'}}> or </Text>
      <TouchableOpacity>
        <Text
          style={{
            fontFamily: 'SourceCodePro-Medium',
            fontSize: 20,
            borderWidth: 1.5,
            paddingHorizontal: 10,
            paddingVertical: 4,
          }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
