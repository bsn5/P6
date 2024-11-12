/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Constants } from "expo";
import { Image, Platform, Button } from "react-native";
import { TabNavigator } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
//import { PeolpleScreeen } from "./screens/PeopleScreen";
//import { DecisionScreen } from "./screens/DecisionScreen";
//import { RestaurantsScreen } from "./screens/RestaurantsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ImageView from "react-native-image-view";

import LoginScreen from "./layouts/LoginScreen"
import RegisterScreen from "./layouts/RegisterScreen"

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

console.log ("------------------------------------------------");
console.log ("RestaurantChooser starting on ${Platform.OS}");
const PlatformOS = Platform.OS.toLowerCase ();
/*
const tabs = TabNavigator ({
    PeolpleScreen : { screen : PeopleScreen,
        navigationOptions : { tabBarLabel : "People",
            tabBarIcon : ( { tintColor } ) => (
                <Image source = {require ("./images/icon-people.png") }
                    style = {{ width : 32, height : 32, tintColor: tintColor }} />
            )
        }
    },

    DecisionScreen : { screen : DecisionScreen,
        navigationOptions : { tabBarLabel : "Decision",
            tabBarIcon : ( { tintColor } ) => (
                <Image source = { require ("./images/icon-decision.png") }
                    style = {{ width : 32, height : 32, tintColor : tintColor }}  />
            )
        }
    },

    RestaurantsScreen : { screen : RestaurantsScreen,
        navigationOptions : { tabBarLabel : "Restaurants",
            tabBatIcon : ( { tintColor } ) => (
                <Image source = { require ("./images/icon-restaurants.png") }
                    style = {{ width : 32, height : 32, tintColor : tintColor }} />
            )
        }
    }
});
*/
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
        <MyStack />
  );
}

const HomeScreen = ({ navigation }) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
//    const images = [{source: {"./cit_logo.png"}}]

    return (




        <SafeAreaProvider>
            <SafeAreaView style = {styles.screenContainer3}>
                <Image style={{width: 100, height: 100, }} source={require("./cit_logo.png") } />

            </SafeAreaView>
            <SafeAreaView style = {styles.screenContainer1}>
                <Button
                    color = "red"
                    title="Регистрация"
                    onPress={() =>
                        navigation.navigate('Register', {
                            name: 'Jane',
                        })
                    }
                />
            </SafeAreaView>
            <SafeAreaView style = {styles.screenContainer2}>
                <Button
                    color = "green"
                    title="Вход"
                    onPress={() =>
                        navigation.navigate('Login', {
                            name: 'Jane',
                        })
                    }

                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

/*
const ProfileScreen = ({ navigation, route }) => {
    return (
        <Text>This is {route.params.name}'s profile</Text>
    );
};

const LoginScreen = ({ navigation, route }) => {
    return (
        <Text>This is {route.params.name}'s profile</Text>
    );
};
*/

const styles = StyleSheet.create({
  screenContainer1: {
    paddingTop: "70%",
    paddingLeft: 25,
    paddingRight: 25,
  },
  screenContainer2: {
    marginTop: "7%",
    marginTop: "7%",
    paddingLeft: 25,
    paddingRight: 25
  },
  screenContainer3: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: "60%"

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
