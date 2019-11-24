
import { View, Text, StyleSheet, TouchableOpacity, Button,SafeAreaView, ImageBackground, Image,ScrollView,InteractionManager } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Fire from "../Fire";
import * as ImagePicker from "expo-image-picker";
import UserPermissions from "../utilities/UserPermissions";

import React, { Component } from 'react'
import Reinput, { ReinputButton } from 'reinput'


export default class PostScreen extends React.Component {
    state = {
        Commonname: "",
        Sciname: "",
        Family: "",
        Habit: "",
        Character: "",
        Utilli: "",
        Phenology: "",
        Distribution: "",
        Color: "",
        getcolorfrom: "",
        image: null
    };

    componentDidMount() {
        UserPermissions.getCameraPermission;
    }

    clickEventListener = (navigation) => {
        InteractionManager.runAfterInteractions(() => {
            navigation.navigate('App')
          })
      };

    handlePost = () => {
        Fire.shared
            .addPost({ Commonname: this.state.Commonname.trim(),
                Sciname: this.state.Sciname.trim(),
                Family: this.state.Family.trim(),
                Habit: this.state.Habit.trim(),
                Character: this.state.Character.trim(),
                Utilli: this.state.Utilli.trim(),
                Phenology: this.state.Phenology.trim(),
                Distribution: this.state.Distribution.trim(),
                Color: this.state.Color.trim(),
                getcolorfrom: this.state.getcolorfrom.trim(), localUri: this.state.image })
            .then(ref => {
                this.setState({ 
                Commonname: "",
                Sciname: "",
                Family: "",
                Habit: "",
                Character: "",
                Utilli: "",
                Phenology: "",
                Distribution: "",
                Color: "",
                getcolorfrom: "", image: null });
                this.props.navigation.goBack();
            })
            .catch(error => {
                alert(error);
            });
    };

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    render() {
        return (
            <ImageBackground source={require('../assets/bodyAdd.png')} style={{flex:1,width: '100%', height: '100%'}}>

            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress = {
                  () => this.clickEventListener(this.props.navigation)
                }>
                        <Ionicons name="md-arrow-back" size={30} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handlePost}>
                        <Text style={{ fontWeight: "500" }}>Save</Text>
                    </TouchableOpacity>
                </View>
           
      <View
        style={styles.container}>
        <Text style={styles.welcome}>
          Add Tree Information
        </Text>
        <Button
                    onPress={() => {
                        Fire.shared.signOut();
                    }}
                    title="Log out"
                />
                <View style={{ marginHorizontal: 32, marginTop: 32, height: 100 }}>
                    <Image source={{ uri: this.state.image }} style={{ width: "100%", height: "100%" }} resizeMode="contain"></Image>
                </View>
        <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
                    <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons>
                </TouchableOpacity>
               <ScrollView
         contentContainerStyle={styles.scrollContainer}
         style={styles.container}>
        <Reinput
          label='Common name / Local name'
          icon={<Image source={require('./icon.png')} />}
          onChangeText={(text) => this.setState({Commonname:text})}
          value={this.state.Commonname}
        />
        <Reinput
          label='Scientific name'
          icon={<Image source={require('./icon.png')} />}
          onChangeText={(text) => this.setState({Sciname:text})}
          value={this.state.Sciname}
        />
        <Reinput
          label='Family'
          icon={<Image source={require('./icon.png')} />}
          onChangeText={(text) => this.setState({Family:text})}
          value={this.state.Family}
        />
        <Reinput
          label='Habit'
          icon={<Image source={require('./icon.png')} />}
          onChangeText={(text) => this.setState({Habit:text})}
          value={this.state.Habit}
        />
        <Reinput
          label='Morphological character'
          icon={<Image source={require('./icon.png')} />}
          onChangeText={(text) => this.setState({Character:text})}
          value={this.state.Character}
        />
        <Reinput
          label='Utilization'
          icon={<Image source={require('./icon.png')} />}
          onChangeText={(text) => this.setState({Utilli:text})}
          value={this.state.Utilli}
        />
        <Reinput
          label='Phenology'
          icon={<Image source={require('./icon.png')} />}
          onChangeText={(text) => this.setState({Phenology:text})}
          value={this.state.Phenology}
        />
        <Reinput
          label='Distribution'
          icon={<Image source={require('./icon.png')} />}
          onChangeText={(text) => this.setState({Distribution:text})}
          value={this.state.Distribution}
        />
        <Reinput
          label='Color'
          icon={<Image source={require('./icon.png')} />}
          onChangeText={(text) => this.setState({Color:text})}
          value={this.state.Color}
        />
        <Reinput
          label='ส่วนที่ใช้สกัดสี'
          icon={<Image source={require('./icon.png')} />}
          onChangeText={(text) => this.setState({getcolorfrom:text})}
          value={this.state.getcolorfrom}
        />

                </ScrollView>
                {/* <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
                    <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons>
                </TouchableOpacity>
                <View style={{ marginHorizontal: 32, marginTop: 32, height: 150 }}>
                    <Image source={{ uri: this.state.image }} style={{ width: "100%", height: "100%" }}></Image>
                </View> */}
                </View>
            </SafeAreaView>
            </ImageBackground>

        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  simpleLayout: {
    flexDirection: 'row',
    marginBottom: 10
  },
  firstColumn: {
    flex: 2,
    marginRight: 8
  },
  secondColumn: {
    flex: 3
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D8D9DB"
},
photo: {
    alignItems: "flex-end",
    marginHorizontal: 32
}
})