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
        },
        {
            initialRouteName: "Post"
        }
    )
);
