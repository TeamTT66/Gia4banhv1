import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class HelpScreen extends Component {
    static navigationOptions = { header: null }
    render() {
        return (
            <WebView
                source={{uri: 'http://trogiup.chotot.com/mua-hang-tai-chotot-vn/meo-mua-hang-tim-viec/meo-mua-hang-an-toan/?utm_source=chotot&utm_medium=ad_view&utm_campaign=safety_tip_adview'}}
                style={{flex: 1}}
                mixedContentMode='always'
            />
        );
    }
}