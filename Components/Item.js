import React,{Component} from 'react';
import {View,StyleSheet,ActivityIndicator,Button,ImageBackground,Image,Text,TextInput,TouchableOpacity,ScrollView,FlatList,Dimensions} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Icon from 'react-native-ionicons'

const num4 = 8;
export default class Item extends Component{
    static navigationOptions = { header: null }
    render() {
        return (
                <View style={{flex:1,flexDirection:'column'}}>
                    <ScrollView>
                        <View style={{width:'100%',height:300}}>
                            <ImageSlider images={[
                            'https://media3.scdn.vn/img2/2017/7_12/rubik-4x4-zcube-carbon-1m4G3-nN1oTf_simg_ab1f47_350x350_maxb.jpg',
                            'https://media3.scdn.vn/img2/2017/6_26/rubik-4x4-carbon-1m4G3-LIiwob_simg_d0daf0_800x1200_max.jpg',
                            'https://img8.lightake.com/2016/10/16102602222759792623.jpg'
                            ]}/>
                        </View>
                        <View style={{flexDirection:'row', padding:7,paddingTop:10,paddingBottom:10}}>
                            <View style={{flexDirection:'column',width:'80%'}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>Đồ chơi phát triển kỹ năng Rubik Zcube Cao Cấp 4x4x4</Text>
                                <Text style={{fontSize:16,color:"red",fontStyle:'italic'}}>175.000 ₫</Text>
                                <Text style={{fontSize:10,color:"gray"}}>Thời gian đăng: 21/11/2018</Text>
                            </View>
                            <View style={{flexDirection:'row',width:'20%',alignItems:'center'}}>
                                <Text style={{paddingRight:5,color:"red"}}>Lưu tin</Text>
                                <Icon android="md-heart-empty" size = {24} color="red"/>
                            </View>
                        </View>
                        <View style={{height:1,backgroundColor:'gray'}}/>
                        <View style={{flexDirection:'row',width:'100%',paddingTop:10}}>
                            <View style={{marginLeft:10}}>
                                <Icon size={80} android="md-contact" /> 
                            </View>
                            <View style={{flexDirection:'column',width:'80%',paddingLeft:15}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>Trần Thái Khương</Text>
                                <Text style={{fontSize:16,color:"gray",fontStyle:'italic'}}>Địa chỉ</Text>
                                <Text style={{fontSize:14,color:"gray"}}>Ngày tham gia</Text>
                            </View>
                        </View>
                        <View style={{height:1,backgroundColor:'gray'}}/>
                        <View style={{paddingTop:10,paddingBottom:10,paddingLeft:10,width:'100%'}}>
                                <Text style={{fontSize:18,fontWeight:'bold'}}>Mô tả sản phẩm</Text>
                                <Text>• Bảo hành 12 tháng</Text>
                                <Text>• Kích thước 6,2 x 6,2 x 6,2 cm</Text>
                                <Text>• Trọng lượng: 168g</Text>
                                <Text>• Xoay trơn - Quay tốc độ</Text>
                                <Text>• Chất liệu nhựa ABS an toàn, không độc hại</Text>
                                <Text>• Góc cạnh nhẵn không gây nguy hiểm</Text>
                                <Text>• Màu sắc sinh động, bắt mắt</Text>
                                <Text>• Thiết kế với cấu trúc mới giúp giải nhanh, giải tốc độ</Text>
                                <Text>• Độ bền cao</Text>
                                <Text>• Rèn luyện tư duy, phát triển trí não</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'gray'}}/>
                        <View style={{paddingTop:10,paddingBottom:10,paddingLeft:10,width:'100%'}}>
                            <Text style={{fontWeight:'bold'}}>Đồ chơi phát triển kỹ năng - Rubik Zcube Cao Cấp 4x4x4</Text>
                            <Text style={{paddingLeft:10}}>Rubik được biết đến là một đồ chơi thông minh, giúp người chơi rèn luyện tính kiên trì, khả năng quan sát và óc tư duy linh hoạt. Đây là món đồ chơi được nhiều bạn trẻ yêu thích và lựa chọn. Không chỉ là một sản phẩm giúp bạn giải trí mà còn là một đồ chơi giúp rèn luyện tư duy và phát triển trí óc vô cùng tốt. Rubik với sự hoán đổi kỳ diệu, cùng vô số cách giải khác nhau phù hợp với mọi lứa tuổi đặc biệt là trẻ em, giúp trẻ phát triển trí não một cách tối đa.</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'gray'}}/>
                        <View style={{paddingTop:10,paddingBottom:10,paddingLeft:10,width:'100%',flexDirection:'column'}}>
                            <Text style={{fontSize:18}}>Khu vực</Text>
                            <View style={{flexDirection:'row',paddingLeft:5,paddingTop:5}}>
                                <Icon size={20} android="md-pin"/>
                                <Text style={{paddingLeft:15}}>Thanh Bình, Mỗ Lao, Hà Đông, Hà Nội</Text>
                            </View>
                        </View>
                        <View style={{height:1,backgroundColor:'gray'}}/>
                        <View style={{paddingTop:10,paddingBottom:10,paddingLeft:10,width:'100%',flexDirection:'row'}}>
                            <Icon size={60} android="ios-checkmark-circle-outline"/>
                            <View style={{alignItems:'center',paddingLeft:15,width:'80%'}}><Text style={{fontStyle:'italic',color:'gray',textAlign:'center'}}>Tin rao này đã được kiểm duyệt. Nếu gặp vấn đề, vui lòng báo cáo tin đăng hoặc liên hệ CSKH để được trợ giúp.</Text></View>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Icon size={18} android="ios-warning" color='red'/>
                                <View style={{alignItems:'center',paddingLeft:10}}><Text style={{fontStyle:'italic',color:'red',textAlign:'center'}}>Báo cáo vi phạm</Text></View>
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontSize:18,paddingTop:20,paddingBottom:5,fontWeight:'bold',color:'gray'}}>Chia sẻ tin này cho bạn bè:</Text>
                        <View style={{height:1,backgroundColor:'gray'}}/>
                        <View style={{flexDirection:'row',paddingTop:10,paddingBottom:10}}>
                            <View style={{width:'25%',alignItems:'center'}}><Icon size={40} android="logo-facebook"/></View>
                            <View style={{width:1,backgroundColor:'gray'}}></View>
                            <View style={{width:'25%',alignItems:'center'}}><Icon size={40} android="ios-text"/></View>
                            <View style={{width:1,backgroundColor:'gray'}}></View>
                            <View style={{width:'25%',alignItems:'center'}}><Icon size={40} android="logo-googleplus"/></View>
                            <View style={{width:1,backgroundColor:'gray'}}></View>
                            <View style={{width:'25%',alignItems:'center'}}><Icon size={40} android="md-copy"/></View>
                        </View>                        
                        <View style={{paddingTop:10,paddingBottom:10}}>
                                <TouchableOpacity
                                    onPress ={() => this.props.navigation.navigate('Help')}>
                                    <Text style={{textAlign:'right',fontStyle:'italic',color:'red'}}>Tìm hiểu thêm >></Text>
                                </TouchableOpacity>
                        </View>
                    </ScrollView>


                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{flexDirection:'column',alignItems:'center',width:'50%',height:50,backgroundColor:'#56ff56'}}>
                            <Icon size={24} android="ios-call" color='white'/>
                            <Text style={{fontStyle:'italic',color:'white'}}>Gọi điện</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'column',alignItems:'center',width:'50%',height:50,backgroundColor:'white'}}>
                            <Icon size={24} android="md-paper" color='#56ff56'/>
                            <Text style={{fontStyle:'italic',color:'#56ff56'}}>Gửi tin nhắn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                )            
      }
}