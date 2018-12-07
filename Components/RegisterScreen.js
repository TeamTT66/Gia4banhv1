import React,{Component} from 'react';
import {View,StyleSheet,Button,ImageBackground,Image,Text,TextInput,TouchableOpacity,ScrollView,numColumns,Dimensions } from 'react-native';


export default class Register extends Component{
  static navigationOptions = { header: null }
  constructor(props) {
      super(props);
      login= require('../app/img/login.jpg');
      
      this.state = { 
          account: '',
          password: '', 
          repass: '',            
      };
    }
  render(){
      return(
          <ImageBackground source={login} style={{width: '100%', height: '100%',flex:1,alignItems: 'center',justifyContent: 'center'}}>
              <View style={{flexDirection:"column"}}>
                  <TextInput placeholder={'Tài khoản'} style={{height: 40,width: 350, borderColor: 'gray',borderWidth:1,backgroundColor:'#efef70'}}
                      onChangeText={(account) => this.setState({account})}
                      value={this.state.account}/>
                  <TextInput placeholder={'Mật khẩu'} style={{height: 40,width: 350, borderColor: 'gray',borderWidth:1,backgroundColor:'#efef70'}}
                      onChangeText={(account) => this.setState({password})}
                      value={this.state.password}/>
                  <TextInput placeholder={'Nhập lại mật khẩu'} style={{height: 40,width: 350, borderColor: 'gray',borderWidth:1,backgroundColor:'#efef70'}}
                      onChangeText={(account) => this.setState({repass})}
                      value={this.state.repass}/>
                  <TouchableOpacity style={{paddingTop:20,paddingBottom:10}}
                  onPress={()=>{this.dangky()}}>
                      <Button title = "Đăng ký"  color='#bfbf00'/> 
                  </TouchableOpacity>    
                  <View style={{flexDirection:'row'}}>
                      <Text style={{flex:1,textAlign: 'center',justifyContent: 'center'}}>Hoặc</Text>
                  </View>
                  <TouchableOpacity style={{paddingTop:10}}>
                      <Button title = "Đăng nhập" color='#bfbf00'
                          onPress ={() => this.props.navigation.navigate('User')}/> 
                  </TouchableOpacity>             
              </View>
          </ImageBackground>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});