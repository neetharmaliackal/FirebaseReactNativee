//import React, {useState} from 'react';
//import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
//import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';




import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  
  ScrollView
} from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton';
// import {AuthContext} from '../navigation/AuthProvider';
import styles from './styles';
import { auth, signInWithGoogle } from '../../firebase/config';
// import Home from '../HomeScreen/HomeScreen';



// export default function LoginScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   //functions

//   const onFooterLinkPress = () => {
//     navigation.navigate('Registration')
//   };

//   const onLoginPress = () => {
//     console.log('clicked on login button');
//   };

//   //html render

//   return (
//     <View style={styles.container}>
//       <KeyboardAwareScrollView
//         style={{flex: 1, width: '100%'}}
//         keyboardShouldPersistTaps="always">
//         <Image styles={styles.logo} source={require('../../../assets/icon.png')} />

//         <TextInput
//           style={styles.input}
//           placeholder="E-mail"
//           placeholderTextColor="#aaaaaa"
//           onChangeText={(text) => setEmail(text)}
//           value={email}
//           underlineColorAndroid="transparent"
//           autoCapitalize="none"
//         />

//         <TextInput
//           style={styles.input}
//           placeholderTextColor="#aaaaaa"
//           secureTextEntry
//           placeholder="Password"
//           onChangeText={(text) => setPassword(text)}
//           value={password}
//           underlineColorAndroid="transparent"
//           autoCapitalize="none"
//         />

//         <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
//           <Text style={styles.buttonTitle}>Log In</Text>
//         </TouchableOpacity>

//         <View style={styles.footerView}>
//           <Text style={styles.footerText}>
//             Don't have an account?{' '}
//             <Text onPress={onFooterLinkPress} style={styles.footerLink}>
//               Sign up
//             </Text>
//           </Text>
//         </View>
//       </KeyboardAwareScrollView>
//     </View>
//   );
// }





const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const TestFunction= () => {
    navigation.navigate('HomeScreen');
  }
 
  // const {login, googleLogin, fbLogin} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
      //  onPress={() => login(email, password)}
       onPress={ TestFunction  }
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            // onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => signInWithGoogle()}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

