import React, { Component } from 'react'
import { Text, View, Slider, Image } from 'react-native'
import { Colors } from '../constants/Colors'
import { custom } from './css/AudioPlayer.css'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class AudioPlayer extends Component {
    render() {
        return (
            <View style={custom.playerContainer}>
                <View>
                    <Slider
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor={Colors.tint}
                        maximumTrackTintColor={Colors.notwhite}
                        thumbTintColor={Colors.tint}
                        style={custom.slider}
                    />
                    <View style={{
                        flexDirection: 'row',
                        color: Colors.default
                    }}>
                        <Text style={[{ flex: 1 }, custom.timeIndicator]}>00:00</Text>
                        <Text style={custom.timeIndicator}>-00:24</Text>
                    </View>
                </View>

                <View style={custom.playerButtonsContainer}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/icons/audio/previous.png')}
                            style={custom.changeClipIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/icons/audio/backward15.png')}
                            style={custom.backwardIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/icons/audio/play.png')}
                            style={custom.playIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/icons/audio/forward15.png')}
                            style={custom.backwardIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/icons/audio/next.png')}
                            style={custom.changeClipIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
