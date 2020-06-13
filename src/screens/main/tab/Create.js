import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Animated, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../constants/Styles'
import { layout } from '../../../constants/Styles'
import NavigationBar from '../../../components/NavigationBar'
import { formatTime } from '../../../functions/utils'
import MultilineInput from '../../../components/MultilineInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { isEmpty } from '../../../functions/input';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { send, cancel, start_recording, end_recording, delete_recording, play_pause, edit_title } from '../../../modules/Create/actions'

class Create extends Component {
    state = {
        textInput: null,
        isFocused: false,
    }

    _canSubmit() {
        if (!isEmpty(this.props.title) && this.props.playbackInstance) {
            return true
        } else {
            return false
        }
    }

    _sendPost() {
        if (this._canSubmit()) {
            this.props.send(this.props.navigation)
        }
    }

    _cancelPost() {
        this.props.cancel(this.props.navigation)
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
                    onPress: () => this.props.delete_recording(),
                    style: 'destructive'
                }
            ],
            { cancelable: false }
        );
    }

    _onPlay() {
        this.props.play_pause()
    }

    _onRecord() {
        if (!this.props.isRecording) {
            this.props.start_recording()
        } else {
            this.props.end_recording()
        }
    }

    _onEditTitle() {
        this.refs['_multilineInput'].refs['_textInput'].focus()
    }

    _onChangeText(text) {
        this.props.edit_title(text)
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
                        tintColor: this._canSubmit() ? colors.tint : colors.gray
                    }}
                    rightIconOnPress={() => this._sendPost()}
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
                                    this.props.isRecording || this.props.isPlaying || this.props.isPaused ? this.props.playbackInstancePosition / 1000 : 0

                                )
                            }</Text>
                            <Text style={[styles.timeText, { color: colors.gray }]}> / {
                                formatTime(
                                    this.props.playbackInstance ? this.props.playbackInstanceDuration / 1000 : this.props.maxDuration * 60
                                )
                            }</Text>
                        </View>
                    </View>
                    <View style={styles.controlsContainer}>
                        <View style={styles.controls}>
                            <TouchableOpacity
                                disabled={this.props.playbackInstance === null}
                                activeOpacity={1}
                                onPress={() => this._deleteRecording()}
                                style={styles.controlsButtonContainer}
                            >
                                <Image
                                    source={require('../../../assets/icons/bin.png')}
                                    style={[styles.controlsIcon, { tintColor: this.props.playbackInstance === null ? colors.gray : colors.pink }]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                disabled={this.props.playbackInstance !== null}
                                style={[styles.recordButton, {
                                    backgroundColor: this.props.playbackInstance !== null ? colors.gray : colors.pink
                                }]}
                                activeOpacity={1}
                                onPress={() => this._onRecord()}
                            >
                                <Image
                                    source={this.props.isRecording
                                        ? require('../../../assets/icons/pause.png')
                                        : require('../../../assets/icons/mic.png')}
                                    style={styles.recordImage}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                disabled={this.props.playbackInstance === null}
                                activeOpacity={1}
                                onPress={() => this._onPlay()}
                                style={styles.controlsButtonContainer}
                            >
                                <Image
                                    source={this.props.isPlaying
                                        ? require('../../../assets/icons/pause.png')
                                        : require('../../../assets/icons/play.png')}
                                    style={[styles.controlsIcon, { tintColor: this.props.playbackInstance === null ? colors.gray : colors.tint }]}
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

Create.propTypes = {

}


const mapStateToProps = (state) => ({
    maxDuration: state.create.maxDuration,
    isRecording: state.create.isRecording,
    recordingInstance: state.create.recordingInstance,
    isPaused: state.create.isPaused,
    isPlaying: state.create.isPlaying,
    playbackInstance: state.create.playbackInstance,
    playbackInstanceDuration: state.create.playbackInstanceDuration,
    playbackInstancePosition: state.create.playbackInstancePosition,
    error: state.create.error,
    errorMessage: state.create.errorMessage,
})

const mapDispatchToProps = {
    send,
    cancel,
    start_recording,
    end_recording,
    delete_recording,
    play_pause,
    edit_title,
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)