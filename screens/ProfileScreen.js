import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity,Dimensions,InteractionManager,ImageBackground, } from "react-native";
import Fire from "../Fire";
import { RFPercentage } from "react-native-responsive-fontsize";


import Timeline from 'react-native-timeline-listview'
import { sanFranciscoSpacing } from 'react-native-typography'
import ImageView from 'react-native-image-view';

const { width } = Dimensions.get('window');
const height = width * 0.5;
export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);

      this.state = {
        nameTH: "",
        Commonname: "",
        Sciname: "",
        Family: "",
        Plantpart: "",
        shade: "",
        image: null,
        image2: null,
        image3: null,
            activeTab: 0,
            imageIndex: 0,
            isImageViewVisible: false,
            
        };
      }

    clickEventListener = (navigation) => {
        InteractionManager.runAfterInteractions(() => {
            navigation.navigate('Loading')
          })
      };
      componentDidMount() {
          this.fetchData();
          
        }
        // this.props.navigation.state.params.JSON_ListView_Clicked_Item
        fetchData = () => {
            Fire.shared.firestore
          .collection('posts')
        //   .where('No', '==','1' )
        .where('No', '==',this.props.navigation.state.params.ListView_Clicked_Item )
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            data.forEach(element => {
                // console.log(element);
                this.setState({ nameTH: element.nameTH,
                Commonname:element.Commonname,
                Sciname:element.Sciname,
                Family:element.Family,
                Plantpart:element.Plantpart,
                shade:element.shade,
                image:element.image,
                image2:element.image2,
                image3:element.image3,
             });

            });

        }
        );
        }

    render() {
        const data = [
            { title: 'ชื่อวิทยาศาสตร์ (Scientific name)', description: this.state.Sciname},
            { title: 'ชื่อวงค์ (Family name)', description: this.state.Family},
            { title: 'ส่วนที่ใช้ย้อม (Plant part)', description: this.state.Plantpart},
            { title: 'สีที่ได้', description: this.state.shade},
          ];
        const cities = [
            {
                source: {
                    uri:
                    this.state.image,
                },
            },
            {
                source: {
                  uri:this.state.image2
                },
            },
            {
                source: {
                    uri:
                    this.state.image3,
                },
            },
          ];
          const tabs = [
            {title: 'Cities', images: cities},
          ];
                const {isImageViewVisible, activeTab, imageIndex} = this.state;
                const images = tabs[activeTab].images || [];
        return (
            <ImageBackground source={require('../assets/alltree.png')} style={{flex:1,width: '100%', height: '100%'}}>

            <View style={styles.container}>                
                    <View style={{paddingLeft: 20}}>
                <Text style={styles.headerTitle}>Common name</Text>
                <Text style={styles.subheaderTitle}>{this.state.nameTH}</Text>
                <Text style={styles.subheaderTitle}>{this.state.Commonname}</Text>
                </View>
                    <View style={{flexDirection: 'row',marginVertical:30}}>
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
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>
                            ))}
                        <ImageView
                            glideAlways
                            images={images}
                            imageIndex={imageIndex}
                            animationType="fade"
                            isVisible={isImageViewVisible}
                            renderFooter={this.renderFooter}
                            onClose={() => this.setState({isImageViewVisible: false})}
                        />

              </View>
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
<TouchableOpacity style={styles.footer}
 onPress={() => {
          this.props.navigation.navigate('Home')
        }}>
    <Text style={styles.customSize,{color:'white'}}>Go Back</Text>
</TouchableOpacity>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:65,
        width,
        
      },
      headerTitle: {
          fontWeight: "500",
          fontSize: RFPercentage(2.5),
          letterSpacing: sanFranciscoSpacing(RFPercentage(2.5)),
      },
      subheaderTitle: {
          fontWeight: "500",
          fontSize: RFPercentage(2.2),
          letterSpacing: sanFranciscoSpacing(RFPercentage(2.2)),
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
        fontSize: RFPercentage(2),
        letterSpacing: sanFranciscoSpacing(RFPercentage(2)),
      },        
      customSizesub: {
        fontSize: RFPercentage(1.7),
        letterSpacing: sanFranciscoSpacing(RFPercentage(1.7)),
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
            backgroundColor: '#8283FA',
            paddingHorizontal: 10,
            paddingVertical: 5,
        },
});