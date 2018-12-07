import React,{Component} from 'react';
import {View,StyleSheet,Button,TextInput,TouchableOpacity,ImageBackground} from 'react-native';

class LoginScreen extends Component{
    static navigationOptions = { header:null}
    constructor(props) {
        super(props);
        background= require('../app/img/Untitled.jpg');
        this.state = { 
            account: '',
            password: '' };
      }

render(){
    return(

        <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
            <View style={style.container}>
        <View style={{padding:5}}>
        <TextInput placeholder={'Tài khoản'} style={{height: 40,width: 350, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(account) => this.setState({account})}
        value={this.state.account}/>
        </View>
        <View style={{padding:5}}>
        <TextInput placeholder={'Mật khẩu'} style={{height: 40,width: 350, borderColor: 'gray', borderWidth: 1}}
        secureTextEntry={true}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}/>
        </View>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{padding:5}}>
            <Button title = "Login" 
            onPress ={() => this.props.navigation.navigate('Home')}/>            
        </TouchableOpacity>
        <TouchableOpacity style={{padding:5}}>
            <Button title = "Register" 
            onPress ={() => this.props.navigation.navigate('Register')}/>  
        </TouchableOpacity>
        </View>
        </View>        
        </ImageBackground>

        
    );
}
}
export default LoginScreen
const style = StyleSheet.create({
    container:{flex:1,alignItems: 'center',justifyContent: 'center'}
});
