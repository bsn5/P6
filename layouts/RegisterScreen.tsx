import * as React from "react";
import { StyleSheet, TextInput, Button } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import UselessTextInput from "./UselessTextInput";




const RegisterScreen = ({ navigation, route }) => {


    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

/*
    buttonClickListener = () => {
        alert("Clicked On Button !!!" + " " + this.state.onChangeText1);

    }
*/
    return (
        <UselessTextInput prop1 = "1"/>
    );

};





export default RegisterScreen;