import React from "react";
import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity,Dimensions,InteractionManager } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Fire from "../Fire";

const { width } = Dimensions.get('window');
const height = width * 0.5;

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: []
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
        fetchData = () => {
            Fire.shared.firestore
          .collection('posts')
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            // console.log(data);
            // console.log(this.state.posts);

            // this.state.posts=data
            this.setState({ posts: data });
            // console.log(this.state.posts);

        }
        );
        }
      

    renderPost = post => {
        return (
                < TouchableOpacity onPress = {
                    () => this.props.navigation.navigate('Profile',{
                        ListView_Clicked_Item: post.No,
                      })
                } >
            <View style={styles.feedItem}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.nameTH}</Text>
                            <Text style={styles.name}>{post.Commonname}</Text>
                        </View>

                        <Ionicons name="ios-more" size={24} color="#73788B" />
                    </View>
                    <Image source={{uri: post.image }} style={styles.postImage} resizeMode="cover" />
                </View>
            </View>
                </ TouchableOpacity>
        );
    };

    render() {
        // const { posts } = this.state.posts;
        return (
            <View style={styles.container}>
                <View style={{flex:1}}>
        <Image style={{width: width,height:height}}
          source={require('../assets/headerhome.png')} resizeMode="contain"
        />
      </View>
      <TouchableOpacity style={styles.fab} 
      onPress = {
                  () => this.clickEventListener(this.props.navigation)
                }>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>

          <View style={{marginTop: height}}>

                <FlatList
                    style={styles.feed}
                    data={this.state.posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.No}
                    showsVerticalScrollIndicator={false}
                    >
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
    fab:{
        height: 50,
        width: 50,
        borderRadius: 200,
        position: 'absolute',
        marginTop: height-100,
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