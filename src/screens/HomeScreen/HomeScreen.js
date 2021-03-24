import React from 'react'
import {View, Text, Image,Button} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const  HomeScreen = ({navigation}) => {
    // const privacy= () => {
    //     navigation.navigate('Privacy');
    //   }
     
    //     const Contacts= () => {
    //         navigation.navigate('Contacts');
    //     }
    //     const Explore= () => {
    //         navigation.navigate('Explore');
    //     }
        const Todo= () => {
            navigation.navigate('Todo');
        }
        const GeoLocation= () => {
            navigation.navigate('GeoLocation');
        }
        const ImagePicker= () => {
            navigation.navigate('ImagePicker');
        }
       

    return(
        <View style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
           <View style={{
               backgroundColor:"#00a46c",
               height:"28%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20
           }}>
               
               {/* <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:25,
                   width:"100%"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontSize:28,
                            color:"#FFF",
                            fontWeight:"bold"
                        }}>Check out the Applications</Text>
                   </View>
                   <View style={{width:"50%",alignItems:"flex-end"}}>
                         <Button
                        onPress={privacy}
                        title="Privacy and Policy "
                        color=" #99ff99"
                        // accessibilityLabel="Learn more about this purple button"
                        />
                         <Button
                        onPress={Contacts}
                        title="Contacts"
                        color=" #99ff99"
                        // accessibilityLabel="Learn more about this purple button"
                        />
                   </View>
               </View> */}
           </View>
           <LinearGradient
            colors={["rgba(0,164,109,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
           >
              
            </LinearGradient>


              
                  {/* <View style={{width:"50%",alignItems:"flex-end"}}>
                      <View>
                      
                        <View style={{
                            height:67,
                            // backgroundColor:"#b1e5d3",
                            width:165,
                            marginTop:5
                        }}>
                            <Button 
                             title="EXPLORE  MORE PRODUCTS" onPress={Explore}
                                color="#009933"
                            />

                        </View>
                      </View>
                  

                 
               </View> */}

            
        
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:220,
                            top:0
                        }}
                    />
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                          style={{ width: 100, height: 100, marginBottom: 15 }}
                            source={require('../../../assets/geolocation.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>FIND OUT GEOLOCATION</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}></Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                             CHECK NOW
                        </Text>
                        <View style={{width:"50%",alignItems:"flex-end"}}>
                      <View>
                      
                        <View style={{
                            height:67,
                            // backgroundColor:"#b1e5d3",
                            width:145,
                            marginTop:4,
                            
                        }}>
                            <Button 
                             title="CLICK " onPress={GeoLocation}
                                color="#009933"
                            />

                        </View>
                      </View>
                  

                 
               </View>

                    </TouchableOpacity>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                         style={{ width: 100, height: 100, marginBottom: 15 }}
                            source={require('../../../assets/imagepicker.jpg')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>IMAGE PICKER </Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:45
                            }}></Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                           CHECK NOW
                        </Text>
                        <View style={{width:"50%",alignItems:"flex-end"}}>
                      <View>
                      
                        <View style={{
                            height:67,
                            // backgroundColor:"#b1e5d3",
                            width:165,
                            marginTop:5
                        }}>
                            <Button 
                             title="CLICK" onPress={ImagePicker}
                                color="#009933"
                            />

                        </View>
                      </View>
                  

                 
               </View>

                    </View>
                    {/* -------------- */}
                    

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                         style={{ width: 100, height: 100, marginBottom: 15 }}
                            source={require('../../../assets/todo.jpg')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>TODO APPLICATION </Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>  </Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                             CHECK NOW
                        </Text>
                        <View style={{width:"50%",alignItems:"flex-end"}}>
                      <View>
                      
                        <View style={{
                            height:67,
                            // backgroundColor:"#b1e5d3",
                            width:165,
                            marginTop:5
                        }}>
                            <Button 
                             title="CLICK " onPress={Todo}
                                color="#009933"
                            />

                        </View>
                      </View>
                  

                 
               </View>

                    </View>

                </ScrollView>     
                
                      

                


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:-80,
               }}>
                   {/* <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Featured Plants</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#b1e5d3",
                            width:115,
                            marginTop:-5
                        }}>

                        </View>

                   </View> */}
                   {/* <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View> */}
                   
               </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:-100}}
                >
                   
                </ScrollView>
                
        </View>
    )
}
export default HomeScreen;