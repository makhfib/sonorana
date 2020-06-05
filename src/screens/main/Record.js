import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Slider from "react-native-slider"
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../constants/Styles'
import { layout } from '../../constants/Styles'
import NavigationBar from '../../components/NavigationBar'

export default class Record extends Component {
    state = {
        playing: false,
        recording: false,
        value: 0.2,
    }

    _onBackPress() {
        this.props.navigation.goBack()
    }

    _onPlayPausePress() {
        this.setState({ playing: !this.state.playing })
    }

    _onRecord() {}

    _onStop() {}

    render() {
        return (
            <SafeAreaView style={styles.safe}>
                <NavigationBar
                    leftIconImage={require('../../assets/icons/cancel.png')}
                    leftIconOnPress={() => this._onBackPress()}
                    rightIconImage={require('../../assets/icons/done.png')}
                    rightIconOnPress={() => this._onBackPress()}
                />
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>0:08.80</Text>
                </View>
                <View style={styles.sliderContainer}>
                    <View style={styles.durationContainer}>
                        <Text style={styles.durationText}>0:05</Text>
                        <Text style={styles.durationText}>0:10</Text>
                        <Text style={styles.durationText}>0:15</Text>
                        <Text style={styles.durationText}>0:20</Text>
                        <Text style={styles.durationText}>0:25</Text>
                    </View>
                    <Slider
                        style={styles.slider}
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                        maximumTrackTintColor='lightgray'
                        minimumTrackTintColor={colors.pink}
                        thumbStyle={styles.thumb}
                        trackStyle={styles.track}
                    />
                </View>
                <View style={styles.container}>
                    <View style={styles.controls}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this._onPlayPausePress()}>
                            <Image 
                                source={ this.state.playing 
                                    ? require('../../assets/icons/pause.png')
                                    : require('../../assets/icons/play.png')}
                                style={styles.playPauseImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.recordButton} activeOpacity={1} onPress={() => this._onRecord()}>
                            <Image 
                                source={require('../../assets/icons/mic.png')}
                                style={styles.recordImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => this._onStop()}>
                            <Image 
                                source={require('../../assets/icons/stop.png')}
                                style={styles.stopImage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: colors.safearea,
    },
    timeContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: layout.paddingHorizontal,
        paddingRight: layout.paddingHorizontal,
        backgroundColor: colors.background,
    },
    timeText: {
        fontSize: 36,
    },
    sliderContainer: {
        flex: 0.3,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    durationContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: colors.background,
    },
    durationText: {
        fontSize: 11,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'gray',
    },
    slider: {
        width: '100%',
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: colors.lightgray
    },
    thumb: {
        width: 2,
        height: '100%',
        backgroundColor: colors.pink,
    },
    track:{
        height: 1,
    },
    container: {
        flex: 0.5,
        paddingLeft: layout.paddingHorizontal,
        paddingRight: layout.paddingHorizontal,
        backgroundColor: colors.background,
    },
    controls: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    playPauseImage: {
        width: 52, 
        height: 52,
    },
    recordButton: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75/2,
        backgroundColor: colors.red
    },
    recordImage: {
        width: 70,
        height: 70,
        tintColor: 'white',
    },
    stopImage: {
        width: 52, 
        height: 52,
    },
})