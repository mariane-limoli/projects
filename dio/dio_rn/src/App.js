
import React from "react";
import {
        View, 
        Image,
        Text, 
        StyleSheet, 
        SafeAreaView,
        StatusBar,
        Pressable,
        Linking
    } from 'react-native';


const colorGitHub = 'black';
const ImgProfileGitHub = 'https://avatars.githubusercontent.com/u/88410490?v=4';
const colorFontGitHub = '#C9D1D9';
const colorDarkGitHub = 'gray';

const urlToMyGitHub = 'https://github.com/mariane-limoli';


const App = () => {

const handlePressGoToGitHub = async () => {

   const res = await Linking.canOpenURL(urlToMyGitHub)

   if(res){
       await Linking.openURL(urlToMyGitHub)
   }
}

    return (
        <SafeAreaView style ={style.container}>
            <StatusBar backgroundColor= {colorGitHub} barStyle='light-content'/>
            <View style = {style.content}>
                <Image 
                    accessibilityLabel="Mariane selfie"
                    style={style.avatar} 
                    source={{uri: ImgProfileGitHub }}
                />
                <Text 
                accessibilityLabel="Nome: Mariane"
                style={[style.defaultText, style.name]}>Mariane Limoli</Text>
                
                <Text 
                accessibilityLabel="Nickname: Mariane"
                style={[style.defaultText, style.nickname]}>mariane-limoli
                </Text>

                <Text 
                accessibilityLabel="Descrição Mariane"
                style={[style.defaultText, style.description]}>
                    Estudante de Analise e Desenvolvimento de Sistemas. Trablhando com Suporte de Sistema
                </Text>

                <Pressable onPress={()=>console.log('github')}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                    </View>
                </Pressable>

            </View>
        </SafeAreaView>
   
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        blackgroundColor: colorGitHub,
        flex: 100, // expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },

    content:{
        alignItems: 'center',
        padding: 20,
    },
    
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGitHub,
    },
    name: {
        marginTop:20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname:{
        fontSize:20,
        color: colorDarkGitHub,
    },
    description:{
        fontSize: 14,
    },
    button:{
        marginTop: 20,
        backgroundColor: colorDarkGitHub,
        borderRadius: 100,
        padding: 20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
    }
    
});