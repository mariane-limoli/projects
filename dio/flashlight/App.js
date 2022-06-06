import React, {useState, useEffect} from "react";
import {
  View,
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  Alert
} from 'react-native';
import Torch from "react-native-torch";
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false); //false
  const handleChangeToggle = () =>  setToggle(oldtoggle => !oldtoggle);


  useEffect(() => {
   //Liga o flash do celular:
    Torch.switchState(toggle);

  }, [toggle] );

  useEffect(()=> {
    //Muda o toggle ao chacoalhar o celular:
  const subscription = RNShake.addListener(()=>{
    setToggle(oldtoggle => !oldtoggle);
  });

  return () => subscription.remove();

  });

    return (
    
    <View style = {toggle ? style.containerLight : style.container}>
    <TouchableOpacity onPress = {handleChangeToggle}> 

      <Image
        style = {toggle ?  style.lightingOn : style.lightingOff}
        source = {
          toggle
            ?  require('./assets/ICONS/eco-light.png')
            :  require('./assets/ICONS/eco-light-off.png') 
          }
      />
      
      <Image
        style = {style.dioLogo}
        source = {
          toggle
            ?  require('./assets/ICONS/logo-dio.png')
            :  require('./assets/ICONS/logo-dio-white.png') 
          }
      />

    </TouchableOpacity>
    </View>
    );
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  }, 

  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    //tintColor: 'white',
    width: 250,
    height: 250,
  }, 


})