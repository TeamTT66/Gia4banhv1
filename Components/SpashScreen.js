import React, { Component } from 'react';
import {Platform,StyleSheet,Text,ImageBackground,TouchableHighlight} from 'react-native';



class SpashScreen extends Component{
    static navigationOptions = { header: null }
    constructor(props){
        super(props);
        background= require('../app/img/back.png')
    } 

    render(){
        return(
        <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
            <TouchableHighlight style={style.container}
        onPress ={() => this.props.navigation.navigate('Home')}>
        <Text style={{color:'#ffffff',fontSize:15,padding:20}}>Chạm vào màn hình để bắt đầu!</Text>
        </TouchableHighlight>
        </ImageBackground>
        );
    }
}
export default SpashScreen
const style = StyleSheet.create({
    container:{flex:1,alignItems: 'center',justifyContent: 'flex-end'}
});