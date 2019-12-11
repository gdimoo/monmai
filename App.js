import React from "react";
import { Platform,Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";
import NotificationScreen from "./screens/NDP01";
import ScanScreen from "./screens/ScanScreen";
import NDP01Screen from "./screens/NDP01";
import NDP02Screen from "./screens/NDP02";
import NDP03Screen from "./screens/NDP03";
import NDP04Screen from "./screens/NDP04";
import NDP05Screen from "./screens/NDP05";
import NDP06Screen from "./screens/NDP06";
import NDP07Screen from "./screens/NDP07";
import NDP08Screen from "./screens/NDP08";
import NDP09Screen from "./screens/NDP09";
import NDP10Screen from "./screens/NDP10";
import NDP11Screen from "./screens/NDP11";
import NDP12Screen from "./screens/NDP12";
import NDP13Screen from "./screens/NDP13";
import NDP14Screen from "./screens/NDP14";
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.disableYellowBox = true;
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });
  
  createStackNavigator(
    {
        Post: PostScreen,
    },
    config
  );  
  createStackNavigator(
    {
        Profile: ProfileScreen,
    },
    config
  );

  createStackNavigator({
          NDP01: NDP01Screen,
      },
      config
  );
  createStackNavigator({NDP01: NDP01Screen,},config);
  createStackNavigator({NDP02: NDP02Screen,},config);
  createStackNavigator({NDP03: NDP03Screen,},config);
  createStackNavigator({NDP04: NDP04Screen,},config);
  createStackNavigator({NDP05: NDP05Screen,},config);
  createStackNavigator({NDP06: NDP06Screen,},config);
  createStackNavigator({NDP07: NDP07Screen,},config);
  createStackNavigator({NDP08: NDP08Screen,},config);
  createStackNavigator({NDP09: NDP09Screen,},config);
  createStackNavigator({NDP10: NDP10Screen,},config);
createStackNavigator({NDP11: NDP11Screen,},config);
createStackNavigator({NDP12: NDP12Screen,},config);
createStackNavigator({NDP13: NDP13Screen,},config);
createStackNavigator({NDP14: NDP14Screen,},config);

const AppContainer = createStackNavigator(
    {

        default: createBottomTabNavigator(
            {
                Home: {
                    screen: HomeScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />
                    }
                },
                Scan: {
                    screen: ScanScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                            <MaterialCommunityIcons
                                name="qrcode-scan"
                                size={40}
                                color="#00cc00"
                                style={{
                                    shadowColor: "#00cc00",
                                    shadowOffset: { width: 0, height: 10 },
                                    shadowRadius: 10,
                                    shadowOpacity: 0.3
                                }}
                            />
                        )
                    }
                },
                Notification: {
                    screen: NotificationScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) =>  (<Image
                            source={require('./plant-with-leaves.png')}
                            style={{width: 24, height: 24, tintColor: tintColor}}
                          />),
                    }
                },
            },
            {
                defaultNavigationOptions: {
                    tabBarOnPress: ({ navigation, defaultHandler }) => {
                        if (navigation.state.key === "Post") {
                            navigation.navigate("postModal");
                        } else {
                            defaultHandler();
                        }
                    }
                },
                tabBarOptions: {
                    activeTintColor: "#161F3D",
                    inactiveTintColor: "#B8BBC4",
                    showLabel: false
                }
            }
        ),
        postModal: {
            screen: PostScreen
        }
    },
    {
        mode: "modal",
        headerMode: "none",
        // initialRouteName: "postModal"
    }
);

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppContainer,
            Auth: AuthStack,
            Post: PostScreen,
            Profile: ProfileScreen,
            NDP01: NDP01Screen,
NDP02: NDP02Screen,
NDP03: NDP03Screen,
NDP04: NDP04Screen,
NDP05: NDP05Screen,
NDP06: NDP06Screen,
NDP07: NDP07Screen,
NDP08: NDP08Screen,
NDP09: NDP09Screen,
NDP10: NDP10Screen,
NDP11: NDP11Screen,
NDP12: NDP12Screen,
NDP13: NDP13Screen,
NDP14: NDP14Screen,
        },
        {
            initialRouteName: "Profile"
        }
    )
);
