import React, { Component } from "react";
import { StyleSheet, TextInput, Button } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default class UselessTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { accountName: "", phone: "" };
    }
//    const [phone, accountName] = React.useState('Useless Text');
    buttonClickListener = () => {
        alert("Clicked On Button !!!" + " " + this.state.accountName);
        fetch('https://tapi.cit-ekb.ru/api/login/SendPhoneCode/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                        'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                accountName: this.state.accountName,
                phone: this.state.phone,
            }),
        }).then((response) => response.json())
          .then((responseData) => {
              console.log("responseData : " + responseData); // fetch response data
          }).catch((error) => {
              console.log("error : " + error); // error
          });
    }
    render() {
       return (
            <SafeAreaProvider>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={(accountName) => this.setState({accountName})}

                    />

                    <TextInput
                        style={styles.input2}
                        onChangeText={(phone) => this.setState({phone})}

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
    }
}

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