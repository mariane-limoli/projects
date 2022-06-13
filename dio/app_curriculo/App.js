
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

const foto = 'https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/86388615_2025153880963584_5911864166154502144_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFkMVBWlv2Gc-z9i_Xc3y26zZbsy1VWkUDNluzLVVaRQAEfvdMI_QbC8ZGmWKZKNEAnWf66QQfh2dJqa4fCA537&_nc_ohc=lHX_nAzJdTUAX8Qkgb7&_nc_ht=scontent-gru1-2.xx&oh=00_AT_P5Vp2HeXhGYMb6KTvCxW2CzmvHN2r3P2H-ROpKAD58Q&oe=62C7D529';

const App = () =>{
  return (
    <>
      <View style={style.page}>
        <Image 
        style={style.avatar}
        source={{ uri: foto }} />
        <Text> Mariane Limoli Almeida</Text>
      </View>
    </>

  )
};

const style = StyleSheet.create({
  page : {
    backgroundColor: '#E7E7E7',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

container :{
  flex: 1,
  al
},

  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
},
    
  });



export default App;
