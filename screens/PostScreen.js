
import { View, Text, StyleSheet, TouchableOpacity, Button,SafeAreaView, ImageBackground, Image,ScrollView,InteractionManager } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Fire from "../Fire";
import * as ImagePicker from "expo-image-picker";
import UserPermissions from "../utilities/UserPermissions";

import React, { Component } from 'react'
import Reinput, { ReinputButton } from 'reinput'
import { ColorPicker,toHsv } from 'react-native-color-picker'

export default class PostScreen extends React.Component {
    state = {
        No: "",
        nameTH: "",
        Commonname: "",
        Sciname: "",
        Family: "",
        Plantpart: "",
        shade: "",
        displaycolor: toHsv('green'),
        image: null,
        image2: null,
        image3: null,
        
    };
    onColorChange = this.onColorChange.bind(this)

    onColorChange(displaycolor) {
      this.setState({ displaycolor })
    }
  
    
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
            .addPost({ 
                No: this.state.No.trim(),
                nameTH: this.state.nameTH.trim(),
                Commonname: this.state.Commonname.trim(),
                Sciname: this.state.Sciname.trim(),
                Family: this.state.Family.trim(),
                Plantpart: this.state.Plantpart.trim(),
                shade: this.state.shade.trim(),
                displaycolor: this.state.displaycolor,
                localUri: this.state.image,
                localUri2: this.state.image2,
                localUri3: this.state.image3 })
            .then(ref => {
                this.setState({ 
                  No: "",
                  nameTH: "",
                  Commonname: "",
                  Sciname: "",
                  Family: "",
                  Plantpart: "",
                  shade: "",
                  displaycolor: "",
                image: null,
                image2: null,
                image3: null, });
                alert("เพิ่มข้อมูลสำเร็จ")
                // this.props.navigation.goBack();
            })
            .catch(error => {
                alert(error);
            });
    };

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
        });

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    pickImage2 = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
      });

      if (!result.cancelled) {
          this.setState({ image2: result.uri });
      }
  };

  pickImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
    });

    if (!result.cancelled) {
        this.setState({ image3: result.uri });
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
        {/* <View style={{flexDirection: 'row',marginHorizontal: 32, marginTop: 32, height: 100}}> */}
        <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
                    <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons>
                </TouchableOpacity>
        <View style={{ marginHorizontal: 32, marginTop: 32, height: 100 }}>
                    <Image source={{ uri: this.state.image }} style={{ width: "100%", height: "100%" }} resizeMode="contain"></Image>
                </View>
                <TouchableOpacity style={styles.photo} onPress={this.pickImage2}>
                    <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons>
                </TouchableOpacity>
                <View style={{ marginHorizontal: 32, marginTop: 32, height: 100 }}>
                    <Image source={{ uri: this.state.image2 }} style={{ width: "100%", height: "100%" }} resizeMode="contain"></Image>
                </View>
                <TouchableOpacity style={styles.photo} onPress={this.pickImage3}>
                    <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons>
                </TouchableOpacity>
                <View style={{ marginHorizontal: 32, marginTop: 32, height: 100 }}>
                    <Image source={{ uri: this.state.image3 }} style={{ width: "100%", height: "100%" }} resizeMode="contain"></Image>
       
                </View>
                <View style={{ marginHorizontal: 32, marginTop: 32, height: 100 }}>
        <Text style={{color: 'white'}}>Select Color to Display</Text>
        <ColorPicker
          color={this.state.displaycolor}
          onColorChange={this.onColorChange}
          onColorSelected={color => alert(`Color selected: ${color}`)}
          onOldColorSelected={color => alert(`Old color selected: ${color}`)}
          style={{flex: 1}}
        /></View>
                {/* </View> */}
               <ScrollView
         contentContainerStyle={styles.scrollContainer}
         style={styles.container}>
         <Reinput
           label='No.'
           icon={<Image source={require('./icon.png')} />}
           onChangeText={(text) => this.setState({No:text})}
           value={this.state.No}
         />
         <Reinput
           label='ชื่อสามัญ'
           icon={<Image source={require('./icon.png')} />}
           onChangeText={(text) => this.setState({nameTH:text})}
           value={this.state.nameTH}
         />
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
          label='Plant Part'
          icon={<Image source={require('./icon.png')} />}
          onChangeText={(text) => this.setState({Plantpart:text})}
          value={this.state.Plantpart}
        />
        <Reinput
          label='Shade'
          icon={<Image source={require('./icon.png')} />}
          onChangeText={(text) => this.setState({shade:text})}
          value={this.state.shade}
        />

                </ScrollView>
        
                </View>
            </SafeAreaView>
            <Button
                    onPress={() => {
                        Fire.shared.signOut();
                    }}
                    title="Log out"
                />
            </ImageBackground>

        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
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