import React, { Component } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { StyleSheet, Text, View, Button ,ImageBackground } from "react-native";

class GeoLocation extends Component {
state= {
    location:null,
    geocode:null,
    errorMessage:""
  }
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
console.log('hai');
console.log(this.state.geocode);
    let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
    const { latitude , longitude } = location.coords
    // Location.setGoogleApiKey('AIzaSyDZ9G_UFjipq8AnLJnc_33SMVHe9YfhyIo'); 
    // this.getGeocodeAsync({latitude, longitude})
    this.setState({ location: {latitude, longitude}});

  };
  componentDidMount = () => this.getLocationAsync();
   
 
  // getGeocodeAsync= async (location) => {
  //   let geocode = await Location.reverseGeocodeAsync(location)
  //   this.setState({ geocode})
  // }

  render()
  {
    const {location,geocode, errorMessage } = this.state
    return (
      
      <ImageBackground  source={require("../../../assets/bgblur.jpg")} blurRadius={5} style={styles.container}>
        <View style={styles.overlay}>
          {/* <Image source={require("../../../assets/bgblur.jpg")} style={{width:100,height:100}} /> */}
          {/* <Text style={styles.heading1}>{geocode  ? `${geocode[0].city}, ${geocode[0].isoCountryCode}` :""}</Text>
          <Text style={styles.heading2}>{geocode ? geocode[0].street :""}</Text> */}
          <Text style={styles.heading3} >Latitude and longitude</Text>
          <Text style={styles.heading3}>{location ? `${location.latitude}, ${location.longitude}` :""}</Text>
          <Text style={styles.heading2}>{errorMessage}</Text>
            {/* <Button OnClick={}>getLoc</Button> */}
        </View>
    //   </ImageBackground>
    );
  }
}
export default GeoLocation;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    overlay:{
      backgroundColor:"#00000070",
      height:"100%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center"
    },
    heading1:{
      color:"#fff",
      fontWeight:"bold",
      fontSize:30,
      margin:20
    },
    heading2:{
      color:"#fff",
      margin:5,
      fontWeight:"bold",
      fontSize:15
    },
    heading3:{
      color:"#fff",
      margin:5
    }
    
  });