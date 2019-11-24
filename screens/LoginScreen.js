import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,ImageBackground, Image, InteractionManager, LayoutAnimation } from "react-native";
import * as firebase from "firebase";
import { Ionicons } from "@expo/vector-icons";

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
            <ImageBackground source={require('../assets/Bodylogin.png')} style={{flex:1,width: '100%', height: '100%'}}>
            <View style={styles.header}>
                    <TouchableOpacity onPress = {
                  () => this.clickEventListener(this.props.navigation)
                }>
                        <Ionicons name="md-arrow-back" size={30} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                </View>
            <View style={styles.container}>

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

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        New to SocialApp? <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign up</Text>
                    </Text>
                </TouchableOpacity> */}
            </View>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        marginHorizontal: 20
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
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
        alignItems: "center",
        justifyContent: "center"
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
