import React, { Component } from 'react';
import Timeline from 'react-native-timeline-listview'
// import { SliderBox } from 'react-native-image-slider-box';
import { iOSUIKit,iOSColors   } from 'react-native-typography'
import { Text,View, ScrollView, Image, StyleSheet, Dimensions,StatusBar,ImageBackground,
  Button } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

class Carousel extends Component {
    render() {
        const { images } = this.props;
        if (images && images.length) {
            return (
                <View style={styles.scrollContainer}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={true} >
                        {images.map((image, i) => (
                            <Image style={styles.image} source={image.source} key={i} />
                        ))}
                    </ScrollView>
                </View>
            );
        }
        console.log('Please provide images');
        return null;
    }
}
export default class Example extends Component {
  constructor(){
    super()
    this.data = [
      { title: 'ชื่อวิทยาศาสตร์ (Scientific name)', description: 'Event 1 Description'},
      { title: 'ชื่อวงค์ (Family name)', description: 'Event 2 Description'},
      { title: 'ส่วนที่ใช้ย้อม (Plant part)', description: 'Event 3 Description'},
      { title: 'สีที่ได้', description: 'Event 4 Description'},
    ]
    // this.state = {
    //     images: [
    //     'https://source.unsplash.com/1024x768/?nature',
    //     'https://source.unsplash.com/1024x768/?water',
    //     'https://source.unsplash.com/1024x768/?girl',
    //     'https://source.unsplash.com/1024x768/?tree'
    //     ]
    //     };
  } 

  render() {
    const images = [
        {
          source: require('../assets/(1)/(1).jpg')
        },
        {
          source: require('../assets/(1)/(2).jpg')
        },
        {
          source: require('../assets/(1)/(3).jpg')
        },
        {
          source: require('../assets/(1)/(4).jpg')
        },
    
    ];
    //'rgb(45,156,219)'
    return (
        <ImageBackground source={require('../assets/alltree.png')} style={{flex:1,width: '100%', height: '100%'}}>

        <View style={styles.container}>
            <View style={{paddingLeft: 20}}>
        <Text style={iOSUIKit .subhead}>Common name</Text>
        <Text style={iOSUIKit .title3Emphasized}>Indigo</Text></View>
        <View style={{marginTop:20}}>
                <Carousel images={images}  />
            </View>

        {/* <SliderBox
images={this.state.images}
sliderBoxHeight={200}
dotColor="#FFEE58"
inactiveDotColor="#90A4AE"
paginationBoxVerticalPadding={20}
circleLoop
/> */}
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
});




// export default class App extends Component {
//     render() {
        

//         return (
            
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingTop: StatusBar.currentHeight,
//     },

// });
