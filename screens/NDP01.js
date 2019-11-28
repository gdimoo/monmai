import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button
} from 'react-native';
import Timeline from 'react-native-timeline-listview'
import { SliderBox } from 'react-native-image-slider-box';
import { iOSUIKit  } from 'react-native-typography'


export default class Example extends Component {
  constructor(){
    super()
    this.data = [
      { title: 'ชื่อวิทยาศาสตร์ (Scientific name)', description: 'Event 1 Description'},
      { title: 'ชื่อวงค์ (Family name)', description: 'Event 2 Description'},
      { title: 'ส่วนที่ใช้ย้อม (Plant part)', description: 'Event 3 Description'},
      { title: 'สีที่ได้', description: 'Event 4 Description'},
    ]
    this.state = {
        images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
        ]
        };
  } 

  render() {
    //'rgb(45,156,219)'
    return (
        <ImageBackground source={require('../assets/alltree.png')} style={{flex:1,width: '100%', height: '100%'}}>

        <View style={styles.container}>
        <Text style={iOSUIKit .title3Emphasized}>Common name</Text>
        <Text style={iOSUIKit .largeTitleEmphasized}>Hello Human!</Text>

        <SliderBox
images={this.state.images}
sliderBoxHeight={200}
dotColor="#FFEE58"
inactiveDotColor="#90A4AE"
paginationBoxVerticalPadding={20}
circleLoop
/>
        <Timeline 
          style={styles.list}
          data={this.data}
        />
        < Button
        title = "Go Back"
        onPress = {
          () => this.props.navigation.navigate('App')
        }
        />
      </View></ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop:65
    
  },
  list: {
    flex: 1,
    marginTop:20,
  },
});