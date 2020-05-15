import React, { Component } from 'react'
import { Text, View, Slider, Image } from 'react-native'
import { Colors } from '../constants/Colors'
import { custom } from './css/AudioPlayer.css'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { formatTime } from '../functions/Utils'

export default class AudioPlayer extends Component {
    render() {
        const {
            item
        } = this.props;

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
                <Text style={custom.timeIndicator}>-{formatTime(item.p_duration)}</Text>
                    </View>
                </View>

                <View style={custom.playerButtonsContainer}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/icons/bold/previous.png')}
                            style={custom.changeClipIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/icons/bold/backward15.png')}
                            style={custom.backwardIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/icons/bold/play.png')}
                            style={custom.playIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/icons/bold/forward15.png')}
                            style={custom.backwardIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/icons/bold/next.png')}
                            style={custom.changeClipIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
