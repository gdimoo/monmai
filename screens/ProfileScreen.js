import React from "react";
import { View, Text, StyleSheet, Image,Button, FlatList,TouchableOpacity,Dimensions,InteractionManager,ImageBackground, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Fire from "../Fire";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import Timeline from 'react-native-timeline-listview'
import { sanFranciscoSpacing } from 'react-native-typography'
import ImageView from 'react-native-image-view';

const { width } = Dimensions.get('window');
const height = width * 0.5;
export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);

      this.state = {
          posts: [],
            activeTab: 0,
            imageIndex: 0,
            isImageViewVisible: false,
        };
      }

    clickEventListener = (navigation) => {
        //function to handle click on floating Action Button
        InteractionManager.runAfterInteractions(() => {
            navigation.navigate('Loading')
          })
      };
      componentDidMount() {
          this.fetchData();
          
    
        }
        // this.props.navigation.state.params.JSON_ListView_Clicked_Item
        fetchData = () => {
            // console.log(this.props.navigation.state.params.ListView_Clicked_Item)
            Fire.shared.firestore
          .collection('posts')
          .where('No', '==','1' )
        //   .where('No', '==',this.props.navigation.state.params.ListView_Clicked_Item )
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());

            this.setState({ posts: data });
        }
        );
        }
      

    renderPost = post => {
        const data = [
            { title: 'ชื่อวิทยาศาสตร์ (Scientific name)', description: post.Sciname},
            { title: 'ชื่อวงค์ (Family name)', description: post.Family},
            { title: 'ส่วนที่ใช้ย้อม (Plant part)', description: post.Plantpart},
            { title: 'สีที่ได้', description: post.shade},
          ];
        const cities = [
            {
                source: {
                    uri:
                    post.image,
                },
            },
            {
                // eslint-disable-next-line
                source: {
                  uri:post.image2
                },
            },
            {
                source: {
                    uri:
                    post.image3,
                },
            },
          ];
        
const tabs = [
    {title: 'Cities', images: cities},
  ];
        const {isImageViewVisible, activeTab, imageIndex} = this.state;
        const images = tabs[activeTab].images || [];
        return (


                <View>
                    <View style={{paddingLeft: 20}}>
                <Text style={styles.customSize}>Common name</Text>
                <Text style={styles.customSize}>{post.nameTH}</Text>
                <Text style={styles.customSize}>{post.Commonname}</Text></View>
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
                                        style={{width:width/3, height: height}}
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
                circleSize={RFPercentage(3)}
                circleColor='rgb(45,156,219)'
                lineColor='rgb(45,156,219)'
                descriptionStyle={styles.customSize}
                titleStyle={styles.customSize}
                  style={styles.list}
                  data={data}
                />
                
              </View>
        );
    };

    render() {

        return (
            <ImageBackground source={require('../assets/alltree.png')} style={{flex:1,width: '100%', height: '100%'}}>

            <View style={styles.container}>

                <FlatList
                    // style={styles.feed}
                    data={this.state.posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.No}
                    showsVerticalScrollIndicator={false}
                    >
                ></FlatList>

                < Button
        title = "Go Back"
        onPress = {
          () => this.props.navigation.navigate('Home')
        }
        />
            </View>
            </ImageBackground>

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
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    name: {
        fontSize: 18,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: height,
        borderRadius: 5,
        marginVertical: 16
    },
        customSize: {
            fontSize: RFPercentage(3),
            letterSpacing: sanFranciscoSpacing(RFPercentage(3)),
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