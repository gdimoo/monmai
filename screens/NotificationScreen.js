// import React, { Component } from 'react';
// import Timeline from 'react-native-timeline-listview'
// // import { SliderBox } from 'react-native-image-slider-box';
// import { iOSUIKit,iOSColors   } from 'react-native-typography'
// import { Text,View, ScrollView, Image, StyleSheet, Dimensions,StatusBar,ImageBackground,
//   Button } from 'react-native';

// const { width } = Dimensions.get('window');
// const height = width * 0.8;

// class Carousel extends Component {
//     render() {
//         const { images } = this.props;
//         if (images && images.length) {
//             return (
//                 <View style={styles.scrollContainer}>
//                     <ScrollView
//                         horizontal
//                         pagingEnabled
//                         showsHorizontalScrollIndicator={true} >
//                         {images.map((image, i) => (
//                             <Image style={styles.image} source={image.source} key={i} />
//                         ))}
//                     </ScrollView>
//                 </View>
//             );
//         }
//         console.log('Please provide images');
//         return null;
//     }
// }
// export default class Example extends Component {
//   constructor(){
//     super()
//     this.data = [
//       { title: 'ชื่อวิทยาศาสตร์ (Scientific name)', description: 'Event 1 Description'},
//       { title: 'ชื่อวงค์ (Family name)', description: 'Event 2 Description'},
//       { title: 'ส่วนที่ใช้ย้อม (Plant part)', description: 'Event 3 Description'},
//       { title: 'สีที่ได้', description: 'Event 4 Description'},
//     ]
//     // this.state = {
//     //     images: [
//     //     'https://source.unsplash.com/1024x768/?nature',
//     //     'https://source.unsplash.com/1024x768/?water',
//     //     'https://source.unsplash.com/1024x768/?girl',
//     //     'https://source.unsplash.com/1024x768/?tree'
//     //     ]
//     //     };
//   } 

//   render() {
//     const images = [
//         {
//           source: require('../assets/(1)/(1).jpg')
//         },
//         {
//           source: require('../assets/(1)/(2).jpg')
//         },
//         {
//           source: require('../assets/(1)/(3).jpg')
//         },
//         {
//           source: require('../assets/(1)/(4).jpg')
//         },
    
//     ];
//     //'rgb(45,156,219)'
//     return (
//         <ImageBackground source={require('../assets/alltree.png')} style={{flex:1,width: '100%', height: '100%'}}>

//         <View style={styles.container}>
//             <View style={{paddingLeft: 20}}>
//         <Text style={iOSUIKit .subhead}>Common name</Text>
//         <Text style={iOSUIKit .title3Emphasized}>Broken Bones, Indian trumpet Flower</Text></View>
//         <View style={{marginTop:20}}>
//                 <Carousel images={images}  />
//             </View>

//         {/* <SliderBox
// images={this.state.images}
// sliderBoxHeight={200}
// dotColor="#FFEE58"
// inactiveDotColor="#90A4AE"
// paginationBoxVerticalPadding={20}
// circleLoop
// /> */}
//         <Timeline 
//           style={styles.list}
//           data={this.data}
//         />
//         < Button
//         title = "Go Back"
//         onPress = {
//           () => this.props.navigation.navigate('Home')
//         }
//         />
//       </View></ImageBackground>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // padding: 20,
//     paddingTop:65,
//     width
    
//   },
//   list: {
//     flex: 1,
//     marginTop:20,
//   },
//       scrollContainer: {
//         height:200,
//         width
//     },
//     image: {
//         width,
//         height,
//         resizeMode:"cover"
//     },
// });




// // export default class App extends Component {
// //     render() {
        

// //         return (
            
// //         );
// //     }
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         paddingTop: StatusBar.currentHeight,
// //     },

// // });
// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   Dimensions
// } from 'react-native';
// import Timeline from 'react-native-timeline-listview'
// import { SliderBox } from 'react-native-image-slider-box';
// import { iOSUIKit  } from 'react-native-typography'
// import ImageView from 'react-native-image-view';

// const { width } = Dimensions.get('window');
// const height = width * 0.5;

// export default class Example extends Component {
//   constructor(){
//     super()
//     this.data = [
//       { title: 'ชื่อวิทยาศาสตร์ (Scientific name)', description: 'Event 1 Description'},
//       { title: 'ชื่อวงค์ (Family name)', description: 'Event 2 Description'},
//       { title: 'ส่วนที่ใช้ย้อม (Plant part)', description: 'Event 3 Description'},
//       { title: 'สีที่ได้', description: 'Event 4 Description'},
//     ]
//     this.state = {
//         images: [
//         'https://source.unsplash.com/1024x768/?nature',
//         'https://source.unsplash.com/1024x768/?water',
//         'https://source.unsplash.com/1024x768/?girl',
//         'https://source.unsplash.com/1024x768/?tree'
//         ]
//         };
//   } 

//   render() {
//     //'rgb(45,156,219)'
//     return (
//         <ImageBackground source={require('../assets/alltree.png')} style={{flex:1,width: '100%', height: '100%'}}>

//         <View style={styles.container}>
//         <Text style={iOSUIKit .title3Emphasized}>Common name</Text>
//         <Text style={iOSUIKit .largeTitleEmphasized}>Hello Human!</Text>

//         <SliderBox
// images={this.state.images}
// sliderBoxHeight={400}
// dotColor="#FFEE58"
// inactiveDotColor="#90A4AE"
// paginationBoxVerticalPadding={20}
// circleLoop
// />
//         <Timeline 
//           style={styles.list}
//           data={this.data}
//         />
//       </View></ImageBackground>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop:65
    
//   },
//   list: {
//     flex: 1,
//     marginTop:20,
//   },
// });

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';
import ImageView from 'react-native-image-view';

const {width} = Dimensions.get('window');

const cities = [
    {
        source: {
            uri:
                'https://avatars.mds.yandex.net/get-pdb/49816/d9152cc6-bf48-4e44-b2d5-de73b2e94454/s800',
        },
        title: 'London',
    },
    {
        // eslint-disable-next-line
        source: require('../assets/alltree.png'),
        title: 'St-Petersburg',
        width: 1200,
        height: 800,
    },
    {
        source: {
            uri:
                'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
        },
        title: 'Paris',
        width: 806,
        height: 720,
    },
];

const nature = [
    {
        source: {
            uri:
                'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-forest-in-fog-russian-nature-forest-mist-dmitry-ilyshev.jpg',
        },
        title: 'Switzerland',
    },

    {
        source: {
            uri:
                'https://i.pinimg.com/564x/a5/1b/63/a51b63c13c7c41fa333b302fc7938f06.jpg',
        },
        title: 'USA',
        width: 400,
        height: 800,
    },
    {
        source: {
            uri:
                'https://guidetoiceland.imgix.net/4935/x/0/top-10-beautiful-waterfalls-of-iceland-8?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-2.1.1&w=883&s=1fb8e5e1906e1d18fc6b08108a9dde8d',
        },
        title: 'Iceland',
        width: 880,
        height: 590,
    },
];

const tabs = [
    {title: 'Cities', images: cities},
    {title: 'Nature', images: nature},
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        paddingTop: Platform.select({ios: 0, android: 10}),
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

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0,
            imageIndex: 0,
            isImageViewVisible: false,
            likes: [...cities, ...nature].reduce((acc, image) => {
                acc[image.title] = 0;

                return acc;
            }, {}),
        };

        this.renderFooter = this.renderFooter.bind(this);
    }

    renderFooter({title}) {
        const {likes} = this.state;

        return (
            <View style={styles.footer}>
                <Text style={styles.footerText}>{title}</Text>
                <TouchableOpacity
                    style={styles.footerButton}
                    onPress={() => {
                        const imageLikes = likes[title] + 1;
                        this.setState({likes: {...likes, [title]: imageLikes}});
                    }}
                >
                    <Text style={styles.footerText}>♥</Text>
                    <Text style={[styles.footerText, {marginLeft: 7}]}>
                        {likes[title]}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const {isImageViewVisible, activeTab, imageIndex} = this.state;
        const images = tabs[activeTab].images || [];

        return (
            <View style={styles.container}>
                <View>
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
                                style={{width, height: 200}}
                                source={image.source}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.tabs}>
                    {tabs.map(({title}, index) => (
                        <TouchableOpacity
                            style={styles.tab}
                            key={title}
                            onPress={() => {
                                this.setState({
                                    activeTab: index,
                                });
                            }}
                        >
                            <Text
                                style={[
                                    styles.tabTitle,
                                    index === activeTab &&
                                        styles.tabTitleActive,
                                ]}
                            >
                                {title}
                            </Text>
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
            </View>
        );
    }
}