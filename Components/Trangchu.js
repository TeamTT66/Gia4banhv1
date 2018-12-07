/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image,TextInput,ScrollView} from 'react-native';
import Icon from 'react-native-ionicons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Slideshow from 'react-native-image-slider-show';

export default class Trangchu extends Component {
  constructor(props) {
    super(props);
    logo= require('../Image/logo.png');

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: '',
          caption: '',
          url: 'https://image.thanhnien.vn/665/uploaded/bahung/y-ba-hung-2018/thang-8-2018/sieu-xe-trieu-do-ao/sieu-xe-nuoc-ao_thanhnien-7_dhbc.jpg',
        }, {
          title: '',
          caption: '',
          url: 'https://muaxegiatot.vn/wp-content/uploads/2018/09/gia-xe-ferrari-laferrari-muaxegiatot-vn.jpg',
        }, {
          title: '',
          caption: '',
          url: 'https://cms-i.autodaily.vn/du-lieu/2018/09/24/porsche-taycan-exclusive-rendering.jpg',
        },{
          title: '',
          caption: '',
          url: 'https://i.ytimg.com/vi/UH77619Lb0s/maxresdefault.jpg',
        },
      ],
    };

  }
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 4000)
    });
  }
 
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };
  _menu1 = null;
 
  setMenuRef1 = ref => {
    this._menu1 = ref;
  };
 
  hideMenu1 = () => {
    this._menu1.hide();
  };
 
  showMenu1 = () => {
    this._menu1.show();
  };
  render() {
    return (
      <View style={{flexDirection:'column'}}>
      <ScrollView> 
        <View style={{backgroundColor:'#cccccc',width:'100%',flexDirection:'row',justifyContent:'flex-start',padding:3}}>
          <TouchableOpacity><Text style={{fontSize:18}}>Đăng nhập</Text></TouchableOpacity>
          <TouchableOpacity><Text style={{fontSize:18,marginLeft:8}}>Đăng ký</Text></TouchableOpacity>          
        </View>
        <View style={{flexDirection:'row',paddingTop:5}}>
          <Image source={logo} style={{width:'20%'}}/>
          <View style={{borderWidth:2,borderColor:'gray',flexDirection:'row',width:'80%'}}>
          <View style={{justifyContent:'center',paddingLeft:5,paddingRight:5}}><Icon android="ios-search" size={24}/></View>
          <TextInput placeholder={'Tìm kiếm xe hơi'} ></TextInput></View> 
        </View>
        <View style={{marginTop:8,flexDirection:'row',backgroundColor:'#f43535',padding:3,marginBottom:13}}>
        <View style={{width:'50%'}}>
        <Menu
          ref={this.setMenuRef}
          button={<Text style={{fontSize:16,color:'white',fontWeight:'bold'}} onPress={this.showMenu}>DANH MỤC SẢN PHẨM</Text>}
        >
          <MenuItem onPress={this.hideMenu}>BMW</MenuItem>
          <MenuItem onPress={this.hideMenu}>AUDI</MenuItem>
          <MenuItem onPress={this.hideMenu}>FORD</MenuItem>
          <MenuItem onPress={this.hideMenu}>TOYOTA</MenuItem>
          <MenuItem onPress={this.hideMenu}>KIA</MenuItem>
          <MenuItem onPress={this.hideMenu}>MAZDA</MenuItem>
          <MenuItem onPress={this.hideMenu}>MITSUBISHI</MenuItem>
          <MenuItem onPress={this.hideMenu}>HYUNDAI</MenuItem>
          <MenuItem onPress={this.hideMenu}>HONDA</MenuItem>
          <MenuItem onPress={this.hideMenu}>CHERVOLET</MenuItem>
        </Menu></View>
        <TouchableOpacity style={{width:'27%'}}><Text style={{fontSize:16,paddingRight:10,color:'white',fontWeight:'bold'}}>TRANG CHỦ</Text></TouchableOpacity>
        <Menu
          ref={this.setMenuRef1}
          button={<Text style={{fontSize:16,color:'white',fontWeight:'bold'}} onPress={this.showMenu1}>TÙY CHỌN</Text>}
        >
          <MenuItem onPress={this.hideMenu1}>Hãng xe</MenuItem>
          <MenuItem onPress={this.hideMenu1}>Giá xe</MenuItem>
          <MenuItem onPress={this.hideMenu1}>Tin tức</MenuItem>
          <MenuItem onPress={this.hideMenu1}>Liên hệ</MenuItem>
          <MenuItem onPress={this.hideMenu1}>Đại lý</MenuItem>
          <MenuItem onPress={this.hideMenu1}>Báo giá</MenuItem>
          <MenuItem onPress={this.hideMenu1}>So sánh xe</MenuItem>
        </Menu>
        </View>
        <Slideshow 
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
        <View style={{padding:10,flexDirection:'row'}}>
          <ScrollView horizontal={true}>
            <View style={{flexDirection:'row',padding:10,borderWidth:1,borderColor:'#cccccc',paddingRight:30}}>
              <Icon android="ios-send" size={47}/>
              <View style={{flexDirection:'column',paddingLeft:10}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>Khuyến mãi</Text>
                <Text>Nhận nhiều khuyến mãi</Text>
              </View>
            </View>
            <View style={{width:30}}/>
            <View style={{flexDirection:'row',padding:10,borderWidth:1,borderColor:'#cccccc',paddingRight:30}}>
              <Icon android="ios-refresh" size={47}/>
              <View style={{flexDirection:'column',paddingLeft:10}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>Phương thức thanh toán</Text>
                <Text>Tiền mặt/ Ngân hàng/ Trả góp</Text>
              </View>
            </View>
            <View style={{width:30}}/>
            <View style={{flexDirection:'row',padding:10,borderWidth:1,borderColor:'#cccccc',paddingRight:30}}>
              <Icon android="ios-help-circle-outline" size={47}/>
              <View style={{flexDirection:'column',paddingLeft:10}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>Tư vấn 24/7</Text>
                <Text>Phone: 0974.92.99.33</Text>
              </View>
            </View>
            <View style={{width:30}}/>
            <View style={{flexDirection:'row',padding:10,borderWidth:1,borderColor:'#cccccc',marginRight:30}}>
              <Icon android="ios-pricetags" size={47}/>
              <View style={{flexDirection:'column',paddingLeft:10}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>Khách hàng VIP</Text>
                <Text>Được hưởng nhiều ưu đãi</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <Text style={{fontSize:24,padding:10,paddingBottom:15}}>Bán xe hơi</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
