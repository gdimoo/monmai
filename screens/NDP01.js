import React, { Component } from 'react';
import Timeline from 'react-native-timeline-listview'
import { iOSUIKit,iOSColors } from 'react-native-typography'
import { Text,View, ScrollView, Image, StyleSheet, Dimensions,StatusBar,ImageBackground,Button,TouchableOpacity,Platform, } from 'react-native';
import ImageView from 'react-native-image-view';

const { width } = Dimensions.get('window');
const height = width * 0.8;
const cities = [
  {
      source: {
          uri:
              'https://firebasestorage.googleapis.com/v0/b/monmai-19a02.appspot.com/o/photos%2F1-เพกา%2F(1).jpg?alt=media&token=8b026968-c240-40ce-a3de-04fce1cc13bd',
      },
      title: 'London',
  },
  {
      // eslint-disable-next-line
      source: {
        uri:'https://firebasestorage.googleapis.com/v0/b/monmai-19a02.appspot.com/o/photos%2F1-เพกา%2F(2).jpg?alt=media&token=e08ba0c7-010f-4e9e-9897-a75b3a4e5b4a'
      },
      title: 'St-Petersburg',
      width: 1200,
      height: 800,
  },
  {
      source: {
          uri:
              'https://firebasestorage.googleapis.com/v0/b/monmai-19a02.appspot.com/o/photos%2Ft1%2F1574613547777?alt=media&token=911db5b8-95c1-41a7-ae25-4059e9461163',
      },
      title: 'Paris',
      width: 806,
      height: 720,
  },
];


const tabs = [
  {title: 'Cities', images: cities},
];

export default class Example extends Component {
  constructor(){
    super()
    this.data = [
      { title: 'ชื่อวิทยาศาสตร์ (Scientific name)', description: 'Event 1 Description'},
      { title: 'ชื่อวงค์ (Family name)', description: 'Event 2 Description'},
      { title: 'ส่วนที่ใช้ย้อม (Plant part)', description: 'Event 3 Description'},
      { title: 'สีที่ได้', description: 'Event 4 Description'},
    ],

    this.state = {
      activeTab: 0,
      imageIndex: 0,
      isImageViewVisible: false,
  };
  } 

  render() {
    const {isImageViewVisible, activeTab, imageIndex} = this.state;
    const images = tabs[activeTab].images || [];
    return (
        <ImageBackground source={require('../assets/alltree.png')} style={{flex:1,width: '100%', height: '100%'}}>

        <View style={styles.container}>
            <View style={{paddingLeft: 20}}>
        <Text style={iOSUIKit .subhead}>Common name</Text>
        <Text style={iOSUIKit .title3Emphasized}>Jack fruit tree, Jack tree</Text></View>
            <View style={{flexDirection: 'row',marginTop:20}}>
                    {images.map((image, index) => (
                        <TouchableOpacity
                            key={image.title}
                            onPress={() => {
                                this.setState({
                                    imageIndex: index,
                                    isImageViewVisible: true,
                                });
                            }}
                        >
                            <Image
                                style={{width:width/3, height: 200}}
                                source={image.source}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <ImageView
                    glideAlways
                    images={images}
                    imageIndex={imageIndex}
                    animationType="fade"
                    isVisible={isImageViewVisible}
                    renderFooter={this.renderFooter}
                    onClose={() => this.setState({isImageViewVisible: false})}
                    onImageChange={index => {
                        console.log(index);
                    }}
                />

            

        <Timeline 
          style={styles.list}
          data={this.data}
        />
        < Button
        title = "Go Back"
        onPress = {
          () => this.props.navigation.navigate('Home')
        }
        />
      </View></ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    paddingTop:65,
    width
    
  },
  list: {
    flex: 1,
    marginTop:20,
  },
      scrollContainer: {
        height:200,
        width
    },
    image: {
        width,
        height,
        resizeMode:"cover"
    },
    tabs: {
        flexDirection: 'row',
    },
    tab: {
        flex: 1,
        height: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    tabTitle: {
        color: '#EEE',
    },
    tabTitleActive: {
        fontWeight: '700',
        color: '#FFF',
    },
    footer: {
        width,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    footerButton: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    footerText: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
    },
});