import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native'
import Slider from "react-native-slider"
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../constants/Styles'
import { layout } from '../../../constants/Styles'
import NavigationBar from '../../../components/NavigationBar'
import { formatTime } from '../../../functions/utils'
import { Audio } from 'expo-av'
import * as Permissions from 'expo-permissions';
import * as Haptics from 'expo-haptics';
import MultilineInput from '../../../components/MultilineInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { isEmpty } from '../../../functions/input';

const maxDuration = 3; // minutes

export default class Record extends Component {
    state = {
        title: null,
        textInput: null,
        canSubmit: false,
        isFocused: false,
        fileURI: null,
        isRecording: false,
        recordingInstance: null,
        isPaused: false,
        isPlaying: false,
        playbackInstance: null,
        playbackInstanceDuration: null,
        playbackInstancePosition: null,
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

    _cancelPost() {
        this.props.navigation.goBack()
    }

    _deleteRecording() {
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

    async _playPause() {
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
        if (status.durationMillis >= (maxDuration * 60 * 1000) - 1000) {
            this._endRecording()
        }
        this.setState({
            playbackInstancePosition: status.durationMillis
        });
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

    async _startRecording() {
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
                    this.setState({
                        isRecording: true,
                        playbackInstance: null,
                        recordingInstance: recording
                    })
                    await recording.startAsync()

                } catch (error) {
                    console.log(error)
                }

            } else if (this.state.isRecording) {
                this._endRecording()
            }
        }
    }

    _onEditTitle() {
        this.refs['_multilineInput'].refs['_textInput'].focus()
    }

    _onChangeText(text) {
        this.setState({ title: text })
        if (!isEmpty(text)) {
            this.setState({ canSubmit: true })
        }
    }

    _onFocusText() {
        this.setState({ isFocused: true })
    }

    _onBlurText() {
        this.setState({ isFocused: false })
    }

    render() {
        return (
            <SafeAreaView style={styles.safe}>
                <NavigationBar
                    leftIconImage={require('../../../assets/icons/cancel.png')}
                    leftIconOnPress={() => this._cancelPost()}
                    rightIconImage={require('../../../assets/icons/send.png')}
                    rightIconStyle={{
                        tintColor: this.state.canSubmit ? colors.tint : colors.gray
                    }}
                    rightIconOnPress={() => this._cancelPost()}
                />
                <KeyboardAwareScrollView
                    contentContainerStyle={styles.container}
                >
                    <View style={styles.infoContainer}>
                        <View>
                            <Image
                                style={styles.photo}
                                source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis2-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic128%2Fv4%2Fc9%2F6a%2F40%2Fc96a40d4-bb93-9bed-c9a6-8519cca482c7%2Fsource%2F1200x630bb.jpg&f=1&nofb=1' }}
                            />
                        </View>
                        <View
                            style={styles.titleContainer}
                        >
                            <View>
                                <MultilineInput
                                    style={{
                                        fontSize: 18,
                                    }}
                                    ref="_multilineInput"
                                    maxLength={140}
                                    textAlign={'center'}
                                    placeholder={'Recording 01 '}
                                    placeholderTextColor={colors.gray}
                                    onChangeText={this._onChangeText.bind(this)}
                                    onFocus={this._onFocusText.bind(this)}
                                    onBlur={this._onBlurText.bind(this)}
                                />
                            </View>
                            {
                                !this.state.isFocused
                                    ? <TouchableOpacity
                                        activeOpacity={1}
                                        style={styles.editButtonContainer}
                                        onPress={() => this._onEditTitle()}
                                    >
                                        <Image
                                            style={styles.editIcon}
                                            source={require('../../../assets/icons/edit.png')}
                                        />
                                    </TouchableOpacity>
                                    : <></>
                            }
                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>{
                                formatTime(
                                    this.state.isRecording || this.state.isPlaying || this.state.isPaused ? this.state.playbackInstancePosition / 1000 : 0

                                )
                            }</Text>
                            <Text style={[styles.timeText, { color: colors.gray }]}> / {
                                formatTime(
                                    this.state.playbackInstance ? this.state.playbackInstanceDuration / 1000 : maxDuration * 60
                                )
                            }</Text>
                        </View>
                    </View>
                    <View style={styles.controlsContainer}>
                        <View style={styles.controls}>
                            <TouchableOpacity
                                disabled={this.state.playbackInstance === null}
                                activeOpacity={1}
                                onPress={() => this._deleteRecording()}
                                style={styles.controlsButtonContainer}
                            >
                                <Image
                                    source={require('../../../assets/icons/bin.png')}
                                    style={[styles.controlsIcon, { tintColor: this.state.playbackInstance === null ? colors.gray : colors.pink }]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                disabled={this.state.playbackInstance !== null}
                                style={[styles.recordButton, {
                                    backgroundColor: this.state.playbackInstance !== null ? colors.gray : colors.pink
                                }]}
                                activeOpacity={1}
                                onPress={() => this._startRecording()}
                            >
                                <Image
                                    source={this.state.isRecording
                                        ? require('../../../assets/icons/pause.png')
                                        : require('../../../assets/icons/mic.png')}
                                    style={styles.recordImage}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                disabled={this.state.playbackInstance === null}
                                activeOpacity={1}
                                onPress={() => this._playPause()}
                                style={styles.controlsButtonContainer}
                            >
                                <Image
                                    source={this.state.isPlaying
                                        ? require('../../../assets/icons/pause.png')
                                        : require('../../../assets/icons/play.png')}
                                    style={[styles.controlsIcon, { tintColor: this.state.playbackInstance === null ? colors.gray : colors.tint }]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: colors.safearea,
    },
    container: {
        flexGrow: 1,
        backgroundColor: colors.background
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: layout.paddingHorizontal * 2
    },
    photo: {
        width: 125,
        height: 125,
        borderRadius: 100,
        backgroundColor: 'white'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editButtonContainer: {
        width: 25,
        height: 25,
        backgroundColor: colors.blue,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    editIcon: {
        width: 20,
        height: 20,
        tintColor: 'white'
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeText: {
        fontSize: 48,
        color: colors.tint,
    },
    controlsContainer: {
        flex: 1,
        justifyContent: 'center',
    },  
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    controlsButtonContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderColor: colors.gray,
        borderWidth: 0.5
    },
    controlsIcon: {
        width: 30,
        height: 30,
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