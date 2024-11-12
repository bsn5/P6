import * as React from "react";
import { StyleSheet, TextInput, Button } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const RegisterScreen = ({ navigation, route }) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    this.state = { onChangeText1: "", onChangeText2: "" };

    buttonClickListener = () => { alert("Clicked On Button !!!" + " " + this.state.onChangeText1);}

    return (
        <SafeAreaProvider>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={(onChangeText1) => this.setState({onChangeText1})}

                />

                <TextInput
                    style={styles.input2}
                    onChangeText={(onChangeText2) => this.setState({onChangeText2})}

                />
              </SafeAreaView>
              <SafeAreaView style={styles.input1}>
                <Button
                  color = "#808080"
                  title="Отправить СМС"
                  onPress={this.buttonClickListener}
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
  input2: {
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



export default RegisterScreen;