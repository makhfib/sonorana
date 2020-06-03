import React, { Component } from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'

import { colors } from '../constants/Styles'

export default class Post extends Component {
    state = {
        playing: false,
        liked: false,
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{}}>
                        <Image 
                            source={require('../assets/fake/daruma-draw.png')}
                            style={{width: 25, height: 25, margin: 9, backgroundColor: colors.background, borderRadius: 15}}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={1} style={{flex: 1, justifyContent: 'center'}}>
                        <Text maxLength = {15} style={{fontWeight: 'bold'}}>user</Text>
                    </TouchableOpacity >
                    <TouchableOpacity activeOpacity={1} style={{alignItems: 'center', justifyContent: 'center',}}>
                        <Image 
                            source={ this.state.liked
                                ? require('../assets/icons/liked.png')
                                : require('../assets/icons/like.png')}
                            style={this.state.liked ? {width: 30, height: 30, resizeMode: 'contain', backgroundColor: colors.background, tintColor: colors.red} : {width: 30, height: 30, resizeMode: 'contain', backgroundColor: colors.background, tintColor: colors.gray}}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={1}  style={{flexDirection: 'row'}}>
                    <ImageBackground 
                        source={require('../assets/fake/fake-audio.png')} 
                        style={{flex: 1, flexDirection: 'row'}}
                    >
                        <View style={{flex: 1, padding: 9, paddingBottom: 14}}>
                                <View style={{paddingBottom: 5}}>
                                    <Text style={{fontWeight: 'bold'}}>«Quien con monstruos lucha, cuide de convertirse a su vez en monstruo.»</Text>
                                </View>
                                <View style={{}}>
                                    <Text>01:23</Text>
                                </View>
                        </View>
                    </ImageBackground>
                    <TouchableOpacity activeOpacity={1} style={{justifyContent: 'center'}}>
                        <Image 
                            source={ this.state.playing 
                                ? require('../assets/icons/pause_circle.png')
                                : require('../assets/icons/play_circle.png')}
                            style={{width: 30, height: 30, borderRadius: 16, marginLeft: 15, backgroundColor: colors.background, tintColor: colors.black}}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        )
    }
}
