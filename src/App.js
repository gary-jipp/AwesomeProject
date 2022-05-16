import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

import Button from './component/Button';

const App = () => {

  const onPress = () => {
    Alert.alert("Hello Again!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Text style={styles.text}>Hello React Native</Text>
        <Button color='olive' title='Click Me' onPress={onPress} />
        <Button style={styles.button} color='olive' title='Click Me 2' onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '672'
  },
  button: {
    backgroundColor: 'olive'
  }
});

export default App;
