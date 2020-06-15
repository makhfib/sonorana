import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Slider from "react-native-slider"
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../components/NavigationBar'
import { colors, layout } from '../../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { play_pause, start_seek, end_seek } from '../../modules/Audio/actions'
import { formatTime } from '../../functions/utils'
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';

const REPEAT_ICON = [
    require('../../assets/icons/play_all_repeat.png'),
    require('../../assets/icons/play_all_repeat.png'), // repeat all
    require('../../assets/icons/shuffle_all.png'), // shuffle
    require('../../assets/icons/repeat_one.png'), // repeat one
]

class Post extends Component {
    state = {
        u_liked: this.props.route.params.item.u_liked,
        repeat: 0
    }

    componentDidUpdate(prevProps, prevStates) {
        //console.log(this.props.uri)
    }

    _onBackPress() {
        this.props.navigation.goBack()
    }

    _handleUsernameOnPress() {
        this.props.navigation.navigate('Main', {
            screen: 'Profile',
            params: {
                item: this.props.route.params.item
            }
        })
    }

    _onLikePress = () => {
        this.setState({ u_liked: !this.state.u_liked })
    }

    _onPlayPausePress() {
        let uri = this.props.route.params.item.p_audio
        this.props.play_pause(uri)
    }

    _onRepeatPress() {
        Haptics.selectionAsync()
        //this.setState({ repeat: (this.state.repeat + 1) % 4 })
    }

    _onSliding(value) {
        let uri = this.props.route.params.item.p_audio
        this.props.start_seek(uri, value)
    }

    _onSlidingComplete(value) {
        let uri = this.props.route.params.item.p_audio
        this.props.end_seek(uri, value)
    }

    _onBackward() {

    }

    _onForward() {

    }

    render() {
        const {
            item,
            feed
        } = this.props.route.params
        const {
            uri,
            isPaused,
            isPlaying,
            isBuffering,
            isProcessing,
            didJustFinish,
            playbackInstance,
            playbackInstancePosition,
            playbackInstanceDuration,
            error,
            errorMessage,
        } = this.props
        return (
            <SafeAreaView style={styles.safe}>
                <NavigationBar
                    leftIconImage={require('../../assets/icons/left_arrow.png')}
                    leftIconOnPress={() => this._onBackPress()}
                    title={item.u_username}
                    titleOnPress={() => this._handleUsernameOnPress()}
                    rightIconImage={REPEAT_ICON[this.state.repeat]}
                    rightIconStyle={{
                        tintColor: this.state.repeat === 0 ? colors.gray : colors.tint
                    }}
                    rightIconOnPress={() => this._onRepeatPress()}
                />
                <View style={styles.container}>
                    <View style={styles.profileContainer}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => this._handleUsernameOnPress()}
                        >
                            <Image
                                source={{ uri: item.u_photo }}
                                style={styles.profileImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>
                            {item.p_description}
                        </Text>
                    </View>
                    <View style={styles.sliderContainer}>
                        <Text style={styles.durationText}>{
                            formatTime(
                                uri === item.p_audio
                                    ? playbackInstancePosition / 1000
                                    : 0
                            )
                        }</Text>
                        <Slider
                            style={styles.slider}
                            value={
                                uri === item.p_audio
                                ? playbackInstancePosition
                                : 0
                            }
                            onValueChange={(value) => this._onSliding(value)}
                            onSlidingComplete={(value) => this._onSlidingComplete(value)}
                            minimumValue={0}
                            maximumValue={
                                uri === item.p_audio && playbackInstanceDuration > 0
                                    ? playbackInstanceDuration
                                    : Number(item.p_duration) * 1000
                            }
                            maximumTrackTintColor='lightgray'
                            minimumTrackTintColor={colors.pink}
                            thumbStyle={styles.thumb}
                            trackStyle={styles.track}

                        />
                        <Text style={styles.durationText}>-{
                            formatTime(
                                uri === item.p_audio && playbackInstanceDuration > 0
                                    ? (playbackInstanceDuration - playbackInstancePosition) / 1000
                                    : item.p_duration
                            )
                        }</Text>
                    </View>
                    <View style={styles.controls}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this._onBackward()}>
                            <Image
                                source={require('../../assets/icons/rewind.png')}
                                style={styles.buttonImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => this._onPlayPausePress()}>
                            <Image
                                source={
                                    uri === item.p_audio && isPlaying
                                        ? require('../../assets/icons/pause_circle.png')
                                        : require('../../assets/icons/play_circle.png')}
                                style={styles.playPauseImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => this._onForward()}>
                            <Image
                                source={require('../../assets/icons/fastforward.png')}
                                style={styles.buttonImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity activeOpacity={1} onPress={this._onLikePress}>
                            <Image
                                source={this.state.u_liked
                                    ? require('../../assets/icons/liked.png')
                                    : require('../../assets/icons/like.png')}
                                style={[styles.likeImage, { tintColor: this.state.u_liked ? colors.pink : colors.tint }]}
                            />
                            <View style={styles.likes}>
                                <Text style={[styles.actionsText, { color: this.state.u_liked ? colors.pink : colors.tint }]}>{item.p_numLikes}</Text>
                            </View>
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
    container: {
        flex: 1,
        paddingLeft: layout.paddingHorizontal,
        paddingRight: layout.paddingHorizontal,
        backgroundColor: colors.background,
    },
    profileContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: colors.background,
    },
    descriptionContainer: {
        flex: 0.1,
        alignItems: 'center',
    },
    descriptionText: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
    sliderContainer: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    durationText: {
        fontSize: 11,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'gray',
    },
    slider: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
    },
    thumb: {
        width: 16,
        height: 16,
        backgroundColor: colors.background,
        borderWidth: 1.4,
        borderColor: colors.pink,
    },
    track: {
        height: 2.5,
    },
    controls: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonImage: {
        width: 50,
        height: 50,
    },
    playPauseImage: {
        width: 75,
        height: 75,
    },
    actionsContainer: {
        flex: 0.1,
        marginBottom: layout.paddingHorizontal,
        justifyContent: 'center',
        alignItems: 'center',
    },
    likeImage: {
        width: 34,
        height: 34,
    },
    likes: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionsText: {
        fontSize: 14,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

Post.propTypes = {

}

const mapStateToProps = (state) => ({
    uri: state.audio.uri,
    isPaused: state.audio.isPaused,
    isPlaying: state.audio.isPlaying,
    isBuffering: state.audio.isBuffering,
    isProcessing: state.audio.isProcessing,
    didJustFinish: state.audio.didJustFinish,
    playbackInstance: state.audio.playbackInstance,
    playbackInstancePosition: state.audio.playbackInstancePosition,
    playbackInstanceDuration: state.audio.playbackInstanceDuration,
    error: state.audio.error,
    errorMessage: state.audio.errorMessage,
})

const mapDispatchToProps = {
    play_pause,
    start_seek,
    end_seek
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)