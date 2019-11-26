import React from "react";
import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity,Button,InteractionManager } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";


// temporary data until we pull from Firebase
posts = [
    {
 
        ENname: "Jack fruit tree, Jack tree",
        THname: "ขนุน",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
    {
 
        ENname: "Broken Bones, Indian trumpet Flower)",
        THname: "เพกา",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
    {
 
        ENname: "Garcinia",
        THname: "มะพูด(ปะโหด)",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
    {
 
        ENname: "Marian plum, Plum mango",
        THname: "มะปราง",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
    {
 
        ENname: "Mai Luang",
        THname: "เข",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
    {
 
        ENname: "calendula",
        THname: "ดาวเรือง",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
    {
 
        ENname: "Indigo",
        THname: "คราม",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
    {
 
        ENname: "Copper Pod , Yellow Flame",
        THname: "อะราง",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
    {
 
        ENname: "Golden Shower Tree",
        THname: "คูณ",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
    {
 
        ENname: "Neem",
        THname: "สะเดา",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
    {
 
        ENname: "Burma padauk",
        THname: "ประดู่",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
    {
 
        ENname: "Vietnamese mickey mouse plant",
        THname: "ช้างน้าว",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
    {
 
        ENname: "White Popinac, Lead Tree",
        THname: "กระถินบ้าน",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
    {
 
        ENname: "Annatto tree,Achiote,Lipstick tree",
        THname: "คำแสด",
        // text:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

         
        image: require("../assets/tempImage1.jpg")
    },
];

export default class HomeScreen extends React.Component {
    clickEventListener = (navigation) => {
        //function to handle click on floating Action Button
        InteractionManager.runAfterInteractions(() => {
            navigation.navigate('Loading')
          })
        //   console.log('fsdffsdfsd');
        // Alert.alert('Floating Button Clicked');
      };

    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.THname}</Text>
                            <Text style={styles.name}>{post.ENname}</Text>
                        </View>

                        <Ionicons name="ios-more" size={24} color="#73788B" />
                    </View>
                    {/* <Text style={styles.post}>{post.text}</Text> */}
                    <Image source={post.image} style={styles.postImage} resizeMode="cover" />
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1}}>
        <Image style={{width: 420,height:200}}
          source={require('../assets/headerhome.png')}
        />
      </View>
      <TouchableOpacity style={styles.fab} 
      onPress = {
                  () => this.clickEventListener(this.props.navigation)
                }>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>

          <View style={{marginTop: 250}}>

                <FlatList
                    style={styles.feed}
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                ></FlatList></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
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
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
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
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    },
    fab:{
        height: 50,
        width: 50,
        borderRadius: 200,
        position: 'absolute',
        bottom: 410,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
      },
      text:{
        fontSize:30,
        color:'#686cc3'
      },
});
