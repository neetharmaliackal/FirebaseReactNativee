import React from 'react';
 
import { View, StyleSheet, Text } from 'react-native';
 
export default function AboutScreen() 
{
    // navigation
    
        return(
 
            <View style = { styles.MainContainer }>
            
                <Text style={styles.TextStyle} numberOfLines = { 1 }  > 
 
                   Features:
                    1.You can add Personal Goals 
 
                </Text>
 
                <Text style={styles.TextStyle} numberOfLines = { 1 } ellipsizeMode = 'head'> 
 
                   2.All goals will displayed on the screen.
 
                </Text>
 
                <Text style={styles.TextStyle} numberOfLines = { 1 } ellipsizeMode = 'middle'> 
 
                    usage:This App will help you to set the Goals.
                    
                </Text>
 
            </View>
        );
    
}
 
const styles = StyleSheet.create(
    {
        MainContainer:
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     
        },
     
        TextStyle:
        {
           textAlign: 'center',
           fontSize: 20,
           padding: 10,
           color: '#000'
        
        }
     
    });