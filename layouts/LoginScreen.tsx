import * as React from "react";
import { StyleSheet, TextInput, Button } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const LoginScreen = ({ navigation, route }) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return (
        <SafeAreaProvider>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                />
              </SafeAreaView>

              <SafeAreaView style={styles.input1}>
                <Button
                  color = "#808080"
                  title="Отправить СМС"
                />
              </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input1: {
      height: 60,
      margin: 12,


    },
});


export default LoginScreen;