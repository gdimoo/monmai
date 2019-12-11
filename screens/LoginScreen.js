import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,ImageBackground, Image,Dimensions, InteractionManager, LayoutAnimation } from "react-native";
import * as firebase from "firebase";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get('window');
const height = width * 0.5;
import {Card} from 'react-native-shadow-cards';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    };
    clickEventListener = (navigation) => {
        InteractionManager.runAfterInteractions(() => {
            navigation.navigate('App')
          })
      };

    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <ImageBackground source={require('../assets/Bodylogin.png')} style={{flex:1}} resizeMode="cover">
            < View style = {
                styles.header, {
                    marginTop: 50,
                    marginLeft:30
                }
            } >
                    <TouchableOpacity onPress = {
                  () => this.clickEventListener(this.props.navigation)
                }>
                        <Ionicons name="ios-arrow-back" size={50} color="#151515"></Ionicons>
                    </TouchableOpacity>
                </View>
            <View style={styles.container}>

                {/* <Card style={styles.formcard}> */}

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                            ></TextInput>
                    </View>
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
                </TouchableOpacity>
                </View>

                
            {/* </Card> */}
            </View>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems:'center',
    },
    // formcard: {
    //     marginBottom: 100,
        
    // },
    
    form: {
        width:width*0.6,
        marginHorizontal:50,
        marginBottom: 100,
        
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 12,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        width:width*0.5,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: height*0.4,
        marginTop: 40
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
    },
});
