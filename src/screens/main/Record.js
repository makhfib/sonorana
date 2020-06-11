import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native'
import Slider from "react-native-slider"
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/Styles'
import { layout } from '../../constants/Styles'
import NavigationBar from '../../components/NavigationBar'
import { formatTime } from '../../functions/utils'
import { Audio } from 'expo-av'
import * as Permissions from 'expo-permissions';
import * as Haptics from 'expo-haptics';

const maxDuration = 3; // minutes

export default class Record extends Component {
    state = {
        fileURI: null,
        isRecording: false,
        recordingInstance: null,
        isPaused: false,
        isPlaying: false,
        playbackInstance: null,
        playbackInstanceDuration: null,
        playbackInstancePosition: null,
        animation: new Animated.Value(1),
    }


    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 0,
            timing: 400
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 1,
                duration: 400
            }).start();
        })
    }

    async _havePermissions() {
        // read more https://docs.expo.io/versions/latest/sdk/permissions/
        const { status } = await Permissions.getAsync(Permissions.AUDIO_RECORDING);
        if (status !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING)
            if (status === 'granted') {
                return true;
            }
        } else {
            return true
        }
    }

    _onBackPress() {
        this.props.navigation.goBack()
    }

    _onDeletePress() {
        Alert.alert(
            'Delete recording',
            'You are about to permanently delete your recording',
            [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => this.setState({
                        playbackInstance: null,
                        playbackInstanceDuration: 0
                    }),
                    style: 'destructive'
                }
            ],
            { cancelable: false }
        );
    }

    async _onPlayPausePress() {
        if (!this.state.isPlaying) {
            if (!this.state.isPaused) {
                await this.state.playbackInstance.replayAsync()
            } else {
                await this.state.playbackInstance.playAsync()
                this.setState({ isPaused: false, })
            }

        } else {
            this.state.playbackInstance.pauseAsync()
            this.setState({ isPaused: true, })
        }
    }

    _onPlaybackStatusUpdate = (status) => {
        if (status.isLoaded) {
            this.setState({
                isPlaying: status.isPlaying,
                playbackInstanceDuration: status.durationMillis,
                playbackInstancePosition: status.positionMillis
            });
        }
    }

    _onRecordingStatusUpdate = (status) => {
        if(status.durationMillis >= maxDuration*60*1000) {
            this._endRecording()
        }
        this.setState({
            playbackInstancePosition: status.durationMillis
        });
        this.startAnimation()
    }

    async _endRecording() {
        try {
            await this.state.recordingInstance.stopAndUnloadAsync()
            await Audio.setAudioModeAsync({ allowsRecordingIOS: false })
            const { sound, status } = await this.state.recordingInstance.createNewLoadedSoundAsync({}, this._onPlaybackStatusUpdate)

            this.setState({
                isRecording: false,
                recordingInstance: null,
                fileURI: status.uri,
                playbackInstance: sound,
            })

        } catch (error) {
            console.log(error)
        }
    }

    async _onRecord() {
        if (this._havePermissions()) {
            if (!this.state.isRecording) {
                const recording = new Audio.Recording()
                try {

                    await Audio.setAudioModeAsync({
                        allowsRecordingIOS: true
                    })

                    recording.setOnRecordingStatusUpdate(this._onRecordingStatusUpdate)
                    recording.setProgressUpdateInterval(1000);

                    await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY)
                    await recording.startAsync()

                    this.setState({
                        isRecording: true,
                        playbackInstance: null,
                        recordingInstance: recording
                    })

                    Haptics.impactAsync()

                } catch (error) {
                    console.log(error)
                }

            } else if (this.state.isRecording) {
                this._endRecording()
            }
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safe}>
                <NavigationBar
                    leftIconImage={require('../../assets/icons/cancel.png')}
                    leftIconOnPress={() => this._onBackPress()}
                    rightIconImage={require('../../assets/icons/done.png')}
                    rightIconOnPress={() => this._onBackPress()}
                />
                <View style={{ flex: 1, backgroundColor: colors.pink }}>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{
                            formatTime(
                                this.state.isRecording ? this.state.playbackInstancePosition / 1000 : this.state.playbackInstanceDuration / 1000

                            )
                        }</Text>
                    </View>
                    <Animated.View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 20,
                            height: 30,
                            opacity: this.state.animation
                        }}
                    >
                        {
                            this.state.isRecording
                                ? < >
                                    <View
                                        style={{
                                            height: 15,
                                            width: 15,
                                            borderRadius: 10,
                                            backgroundColor: 'white',
                                            marginRight: 10,
                                        }}
                                    />
                                    <Text style={{ fontSize: 18, color: 'white' }}>
                                        Recording
                            </Text>
                                </>
                                : this.state.isPlaying || this.state.isPaused
                                    ? <Text style={{ fontSize: 18, color: 'white' }}>
                                        {formatTime(this.state.playbackInstancePosition / 1000)}
                                    </Text>
                                    : <></>
                        }
                    </Animated.View>

                </View>
                <View style={styles.container}>
                    <View style={styles.controls}>
                        <TouchableOpacity disabled={this.state.playbackInstance === null} activeOpacity={1} onPress={() => this._onDeletePress()}>
                            <Image
                                source={require('../../assets/icons/bin.png')}
                                style={[styles.playPauseImage, { tintColor: this.state.playbackInstance === null ? colors.gray : colors.pink }]}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.playbackInstance !== null} style={[styles.recordButton, { backgroundColor: this.state.playbackInstance !== null ? colors.gray : colors.pink }]} activeOpacity={1} onPress={() => this._onRecord()}>
                            <Image
                                source={this.state.isRecording
                                    ? require('../../assets/icons/pause.png')
                                    : require('../../assets/icons/mic.png')}
                                style={styles.recordImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.playbackInstance === null} activeOpacity={1} onPress={() => this._onPlayPausePress()}>
                            <Image
                                source={this.state.isPlaying
                                    ? require('../../assets/icons/pause.png')
                                    : require('../../assets/icons/play.png')}
                                style={[styles.playPauseImage, { tintColor: this.state.playbackInstance === null ? colors.gray : colors.tint }]}
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
    timeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: layout.paddingHorizontal,
    },
    timeText: {
        fontSize: 48,
        color: 'white',
    },
    durationText: {
        fontSize: 11,
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.gray,
    },
    container: {
        flex: 1,
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
        width: 40,
        height: 40,
    },
    recordButton: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75 / 2,
        backgroundColor: colors.pink
    },
    recordImage: {
        width: 50,
        height: 50,
        tintColor: 'white',
    },
})