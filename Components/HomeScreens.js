import React,{Component} from 'react';
import {View,StyleSheet,ActivityIndicator,Button,ImageBackground,Image,Text,TextInput,TouchableOpacity,ScrollView,FlatList,Dimensions} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'
import Icon from 'react-native-ionicons'

const num2 = 1.5;
const num3 = 3;
const num4 = 5;

export class HomeScreen extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerRight =(
            <Icon android="md-heart-empty" size = {24}/>
        );
        return {headerRight}
    }
    constructor(props) {
        super(props);
        s= require('../app/img/s.jpg');
        background= require('../app/img/Untitled.jpg');
        home= require('../app/img/home.png');
        notice= require('../app/img/notice.png');
        user= require('../app/img/user.png');
        option= require('../app/img/option.png');
        o1 = require('../app/img/batdongsan.jpg');
        o2 = require('../app/img/noithat.jpg');
        o3 = require('../app/img/dodientu.jpg');
        o4 = require('../app/img/xe.jpg');
        o5 = require('../app/img/thoitrang.jpg');
        o6 = require('../app/img/me-va-be.jpg');
        o7 = require('../app/img/thucung.jpg');
        o8 = require('../app/img/dan-guitar6-2.jpg');
        o9 = require('../app/img/congso.jpg');
        o10 = require('../app/img/vieclam.jpg');
        o11 = require('../app/img/quatang.jpg');
        this.state = { 
            request: '',
            password: '',             
        };
      }
      
render(){
    return(
        <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
        <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'column'}}>
                <View style={{padding:5,flexDirection:'row',borderWidth: 0}}>
                    <Image source={s} style={{padding: 5,width: 30, height: 30,justifyContent: 'flex-end',alignItems: 'center'}}></Image>
                    <TextInput placeholder={'Tìm kiếm mọi thứ'} style={{height: 40,width: 380,fontSize: 13,alignItems: 'center', borderWidth: 0}}
                    onChangeText={(request) => this.setState({request})}
                    value={this.state.request}></TextInput>
                </View>
                <View style={{backgroundColor:'gray',width: Dimensions.get('window').width,height:2}}/>                            
            </View>
            <ScrollView>            
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity><ImageBackground source={o1} style={{width: Dimensions.get('window').width / num2, height: Dimensions.get('window').height / num4,justifyContent: 'flex-start',borderWidth:1,borderColor:'white'}}>
                    <Text style={{color:'red',textAlign:'left',fontSize:20}}>Bất động sản</Text></ImageBackground></TouchableOpacity>
                    <TouchableOpacity><ImageBackground source={o2} style={{width: Dimensions.get('window').width / num3, height: Dimensions.get('window').height / num4,justifyContent: 'flex-start',borderWidth:1,borderColor:'white'}}>
                    <Text style={{color:'red',textAlign:'left',fontSize:20}}>Nội thất</Text></ImageBackground></TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity><ImageBackground source={o3} style={{width: Dimensions.get('window').width / num3, height: Dimensions.get('window').height / num4,justifyContent: 'flex-start',borderWidth:1,borderColor:'white'}}>
                    <Text style={{color:'red',textAlign:'left',fontSize:20}}>Công nghệ</Text></ImageBackground></TouchableOpacity>
                    <TouchableOpacity><ImageBackground source={o4} style={{width: Dimensions.get('window').width / num2, height: Dimensions.get('window').height / num4,justifyContent: 'flex-start',borderWidth:1,borderColor:'white'}}>
                    <Text style={{color:'red',textAlign:'left',fontSize:20}}>Xe cộ</Text></ImageBackground></TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity><ImageBackground source={o5} style={{width: Dimensions.get('window').width / num3, height: Dimensions.get('window').height / num4,justifyContent: 'flex-start',borderWidth:1,borderColor:'white'}}>
                    <Text style={{color:'red',textAlign:'left',fontSize:20}}>Thời trang</Text></ImageBackground></TouchableOpacity>
                    <TouchableOpacity><ImageBackground source={o6} style={{width: Dimensions.get('window').width / num3, height: Dimensions.get('window').height / num4,justifyContent: 'flex-start',borderWidth:1,borderColor:'white'}}>
                    <Text style={{color:'red',textAlign:'left',fontSize:20}}>Mẹ và bé</Text></ImageBackground></TouchableOpacity>
                    <TouchableOpacity><ImageBackground source={o7} style={{width: Dimensions.get('window').width / num3, height: Dimensions.get('window').height / num4,justifyContent: 'flex-start',borderWidth:1,borderColor:'white'}}>
                    <Text style={{color:'red',textAlign:'left',fontSize:20}}>Thú cưng</Text></ImageBackground></TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                    onPress ={() => this.props.navigation.navigate('Item')}>
                        <ImageBackground source={o8} style={{width: Dimensions.get('window').width / num3, height: Dimensions.get('window').height / num4,justifyContent: 'flex-start',borderWidth:1,borderColor:'white'}}>
                            <Text style={{color:'red',textAlign:'left',fontSize:20}}>Giải trí</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity><ImageBackground source={o9} style={{width: Dimensions.get('window').width / num3, height: Dimensions.get('window').height / num4,justifyContent: 'flex-start',borderWidth:1,borderColor:'white'}}>
                    <Text style={{color:'red',textAlign:'left',fontSize:20}}>Văn phòng phẩm</Text></ImageBackground></TouchableOpacity>
                    <TouchableOpacity><ImageBackground source={o10} style={{width: Dimensions.get('window').width / num3, height: Dimensions.get('window').height / num4,justifyContent: 'flex-start',borderWidth:1,borderColor:'white'}}>
                    <Text style={{color:'red',textAlign:'left',fontSize:20}}>Việc làm</Text></ImageBackground></TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity><ImageBackground source={o11} style={{width:Dimensions.get('window').width, height:300,justifyContent: 'flex-start',borderWidth:1,borderColor:'white'}}>
                    <Text style={{color:'red',textAlign:'left',fontSize:20}}>Quà tặng</Text></ImageBackground></TouchableOpacity>
                </View>                
            </ScrollView>
        </View>
        </ImageBackground>
    );
}
}
export class NoticeScreen extends Component{

    
    constructor(){
        super()
        this.state = {
          dataSource:[],
          isLoading: true
        }
      }
      renderItem = ({ item }) =>{
        return (
            <TouchableOpacity>
                <View style={{flex:1,flexDirection:'row',marginBottom: 3,width:'100%',height:'100%'}}>
                <Image style={{width:100, height:80,margin:5}}
                source={{ uri: item.image }}/>
                <View style={{flex:1,justifyContent:'center',marginLeft:5}}>                
                <Text style={{fontSize:17,color:  'black',marginBottom: 15}}>
                    {item.content}
                    </Text>
                    <Text style={{fontSize:10,color:'black'}}>
                    {item.word}
                    </Text>
                </View>
                </View>
            </TouchableOpacity>
        )
    
      }
      renderSenparator=()=> {
        return(
          <View
            style={{height:1,width:'100%',backgroundColor:'black'}}>
          </View>
        )
      }
      componentDidMount(){
        const url ='http://www.json-generator.com/api/json/get/bTHXlpNXnm?indent=2'
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            dataSource: responseJson.word,
            isLoading: false
          })
        })
        .catch((error) => {
    console.log(error)
        })
      }
      render() {
        return (
          this.state.isLoading
          ?
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    
            <ActivityIndicator size="large" color="#330066" animating/> 
          </View>
          :
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',}}>
           <FlatList style={{width:'100%',height:'100%'}}
              data={this.state.dataSource}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index}
              ItemSeparatorComponent={this.renderSenparator}
           
            />
          </View>
        );
      }
    }
export class UserScreen extends Component{
    static navigationOptions = { header: null }
    constructor(props) {
        super(props);
        login= require('../app/img/login.jpg');
        
        this.state = { 
            request: '',
            password: '',             
        };
      }
    render(){
        return(
            <ImageBackground source={login} style={{width: '100%', height: '100%',flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <View style={{flexDirection:"column"}}>
                    <TouchableOpacity style={{paddingBottom:10,paddingLeft:245}}>
                        <Text style={{textAlign:'center',fontStyle:'italic',color:'gray'}}>Quên mật khẩu ?</Text>
                    </TouchableOpacity> 
                    <TextInput placeholder={'Số điện thoại'} style={{height: 40,width: 350, borderColor: 'gray',borderWidth:1,backgroundColor:'#efef70'}}
                        onChangeText={(account) => this.setState({account})}
                        value={this.state.account}/>
                    <TextInput placeholder={'Mật khẩu'} style={{height: 40,width: 350, borderColor: 'gray',borderWidth:1,backgroundColor:'#efef70'}}
                        onChangeText={(account) => this.setState({account})}
                        value={this.state.account}/>
                    <TouchableOpacity style={{paddingTop:20,paddingBottom:20}}>
                        <Button title = "Đăng nhập"  color='#bfbf00' 
                            onPress ={() => this.props.navigation.navigate('Home')}/>
                    </TouchableOpacity>    
                    <View>  
                        <Text style={{textAlign:'center'}}>Hoặc</Text>
                    </View>                 
                    <TouchableOpacity style={{paddingTop:20}}>
                        <Button title = "Đăng ký"  color='#bfbf00'
                            onPress ={() => this.props.navigation.navigate('Register')}/> 
                    </TouchableOpacity>          
                </View>                
            </ImageBackground>
        );
    }
}
export class OptionScreen extends Component{
    static navigationOptions = { header: null }
    constructor(props) {
        super(props);
        background= require('../app/img/back.png');
        
        this.state = { 
            request: '',
            password: '',             
        };
      }
    render(){
        return(
            <View style={{width: '100%', height: '100%',flex:1,alignItems: 'center',justifyContent: 'center',borderWidth:1,backgroundColor:'white'}}>
                <View style={{flex:1,flexDirection:"column",justifyContent:'flex-start'}}>
                <TouchableOpacity style={{flexDirection:"row",borderWidth:1,width:Dimensions.get('window').width}}
                    onPress ={() => this.props.navigation.navigate('User')}>
                        <Icon size={80} android="md-contact" />
                        <Text style={{paddingLeft:10,textAlign:'center',justifyContent: 'center',paddingTop:40}}>Đăng nhập/Đăng ký</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:"column",justifyContent:'flex-start',paddingTop:20}}>
                <TouchableOpacity style={{flexDirection:"row",width:Dimensions.get('window').width}}>
                        <Icon size={30} android="md-heart" style={{paddingLeft:15}}/>
                        <Text style={{paddingLeft:10,textAlign:'center',justifyContent: 'center',paddingTop:13}}>Tin đăng đã lưu</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:"column",justifyContent:'flex-start'}}>
                <TouchableOpacity style={{flexDirection:"row",width:Dimensions.get('window').width}}>
                        <Icon size={30} android="ios-bookmark" style={{paddingLeft:15}}/>
                        <Text style={{paddingLeft:15,textAlign:'center',justifyContent: 'center',paddingTop:5}}>Tìm kiếm đã lưu</Text>
                    </TouchableOpacity> 
                </View>
                <View style={{flex:1,flexDirection:"column",justifyContent:'flex-start'}}>
                <TouchableOpacity style={{flexDirection:"row",width:Dimensions.get('window').width}}>
                        <Icon size={30} android="ios-contacts" style={{paddingLeft:15}}/>
                        <Text style={{paddingLeft:15,textAlign:'center',justifyContent: 'center',paddingTop:5}}>Bạn bè</Text>
                    </TouchableOpacity> 
                </View>
                <View style={{flex:1,flexDirection:"column",justifyContent:'flex-start'}}>
                <TouchableOpacity style={{flexDirection:"row",width:Dimensions.get('window').width}}>
                        <Icon size={30} android="ios-document" style={{paddingLeft:15}}/>
                        <Text style={{paddingLeft:15,textAlign:'center',justifyContent: 'center',paddingTop:5}}>Lịch sử giao dịch</Text>
                    </TouchableOpacity>  
                </View>
                <View style={{flex:1,flexDirection:"column",justifyContent:'flex-start'}}>
                <TouchableOpacity style={{flexDirection:"row",width:Dimensions.get('window').width}}>
                        <Icon size={30} android="md-add-circle-outline" style={{paddingLeft:15}}/>
                        <Text style={{paddingLeft:15,textAlign:'center',justifyContent: 'center',paddingTop:5}}>Tạo Cửa hàng/Chuyên trang</Text>
                    </TouchableOpacity> 
                </View>
                <View style={{flex:1,flexDirection:"column",justifyContent:'flex-start'}}>
                <TouchableOpacity style={{flexDirection:"row",width:Dimensions.get('window').width}}>
                        <Icon size={30} android="ios-aperture" style={{paddingLeft:15}}/>
                        <Text style={{paddingLeft:15,textAlign:'center',justifyContent: 'center',paddingTop:5}}>Vòng quay may mắn</Text>
                    </TouchableOpacity>  
                </View>
                <View style={{flex:1,flexDirection:"column",justifyContent:'flex-start'}}>
                <TouchableOpacity style={{flexDirection:"row",width:Dimensions.get('window').width}}>
                        <Icon size={30} android="ios-help-circle-outline" style={{paddingLeft:15}}/>
                        <Text style={{paddingLeft:15,textAlign:'center',justifyContent: 'center',paddingTop:5}}>Trợ giúp</Text>
                    </TouchableOpacity> 
                </View>
                <View style={{flex:1,flexDirection:"column",justifyContent:'flex-start'}}>
                <TouchableOpacity style={{flexDirection:"row",width:Dimensions.get('window').width}}>
                        <Icon size={30} android="ios-settings" style={{paddingLeft:15}}/>
                        <Text style={{paddingLeft:15,textAlign:'center',justifyContent: 'center',paddingTop:5}}>Cài đặt</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default createBottomTabNavigator({
    Home: {screen: HomeScreen,
    navigationOptions:{
        tabBarLabel: 'Trang chính',
        tabBarIcon: ({tintColor}) => (
            <Icon android="ios-home" size = {24}/>
            
        )
    }},
    Notice: {screen: NoticeScreen,
        navigationOptions:{
            tabBarLabel: 'Thông báo',
            tabBarIcon: ({tintColor}) => (
                <Icon android="ios-notifications" size = {24}/>
                
            )
        }},
    User: {screen: UserScreen,
        navigationOptions:{
            tabBarLabel: 'Người dùng',
            tabBarIcon: ({tintColor}) => (
                <Icon android="ios-contact" size = {24}/>
                
            )
        }},
    Option: {screen: OptionScreen,
        navigationOptions:{
            tabBarLabel: 'Tùy chọn',
            tabBarIcon: ({tintColor}) => (
                <Icon android="ios-options" size = {24}/>
                
            )
        }}

});
const style = StyleSheet.create({
    container:{flex:1,alignItems: 'center',justifyContent: 'flex-start'},
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width / num2, // approximate a square
      },
      itemInvisible: {
        backgroundColor: 'transparent',
      },
      itemText: {
        color: '#fff',
      },
});