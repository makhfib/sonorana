import React, { Component } from 'react'
import { Image, Text, View, StyleSheet, Vibration } from 'react-native'
import { colors, layout } from '../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Haptics from 'expo-haptics';
import { timeSince, formatTime } from '../functions/utils'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { play, pause } from '../modules/Audio/actions'

class Post extends Component {

    state = {
        liked: this.props.item.u_liked,
        isPlaying: false,
        allowPress: true,
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.isPlaying !== this.props.isPlaying) {
            if(this.props.playbackInstance && this.props.post.p_id === this.props.item.p_id && this.props.isPlaying) {
                this.setState({ isPlaying: true })
            } else {
                this.setState({ isPlaying: false })
            }
        }
    }

    _disablePress() {
        this.setState({ allowPress: false })
    }

    _onMorePress() {
        this._disablePress()
        Haptics.impactAsync()
    }

    _onLikePress() {
        this._disablePress()
        this.setState({ liked: !this.state.liked })
    }

    _onCommentPress() {
        this._disablePress()
        Haptics.selectionAsync()
    }

    _onEchoPress() {
        this._disablePress()
        Haptics.selectionAsync()
    }

    _onSharePress() {
        this._disablePress()
        Haptics.selectionAsync()
    }

    _onPlayPausePress() {
        this._disablePress()
        if (!this.props.isPlaying) {
            this.props.play({ ...this.props.item })
        } else {
            this.props.pause()
            if (this.props.post.p_id !== this.props.item.p_id) {
                this.props.play({ ...this.props.item })
            }
        }
    }

    _onPostPress() {
        if (this.state.allowPress) {
            this.props.navigation.navigate('Main', {
                screen: 'Post',
                params: {
                    item: this.props.item
                }
            })
        } else {
            this.setState({ allowPress: true })
        }
    }

    _onProfilePress() {
        this._disablePress()
        this.props.navigation.navigate('Main', {
            screen: 'Profile',
            params: {
                item: this.props.item
            }
        })
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => this._onPostPress()}
                style={styles.container}
            >
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._onProfilePress()}
                        style={styles.profileContainer}
                    >
                        <Image
                            source={{ uri: this.props.item.u_photo }}
                            style={styles.profilePhoto}
                        />
                        <View style={styles.profileTextContainer}>
                            <Text style={styles.title}>
                                {this.props.item.u_username}
                            </Text>
                            <Text style={styles.subtitle}>
                                {timeSince(this.props.item.p_datetime)}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._onMorePress()}
                    >
                        <Image
                            source={require('../assets/icons/three_horizontal_dots.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.contentContainer}
                >
                    <View
                        style={{
                            flex: 1,
                            marginRight: 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                            }}
                        >
                            {this.props.item.p_description}
                        </Text>
                        <Text style={{
                            color: colors.gray, marginTop: 5,
                        }}>
                            {formatTime(this.props.item.p_duration)}
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._onPlayPausePress()}
                    >
                        <Image
                            source={
                                this.state.isPlaying
                                    ? require('../assets/icons/pause_circle.png')
                                    : require('../assets/icons/play_circle.png')
                            }
                            style={[{ tintColor: colors.tint, width: 40, height: 40 }]}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._onLikePress()}
                        style={styles.iconContainer}
                    >
                        <Image
                            source={this.state.liked
                                ? require('../assets/icons/liked.png')
                                : require('../assets/icons/like.png')}
                            style={[styles.icon, { tintColor: this.state.liked ? colors.pink : colors.gray }]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._onCommentPress()}
                        style={styles.iconContainer}
                    >
                        <Image
                            source={require('../assets/icons/comment.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._onEchoPress()}
                        style={styles.iconContainer}
                    >
                        <Image
                            source={require('../assets/icons/echo.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._onSharePress()}
                        style={styles.iconContainer}
                    >
                        <Image
                            source={require('../assets/icons/share.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: layout.paddingHorizontal / 2,
        borderTopWidth: 0.75,
        borderBottomWidth: 0.75,
        borderColor: colors.lightgray,
        backgroundColor: colors.background,
        paddingHorizontal: layout.paddingHorizontal,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilePhoto: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    profileTextContainer: {
        height: 40,
        marginHorizontal: 10,
        justifyContent: 'space-around',

    },
    title: {
        color: colors.tint,
        fontWeight: 'bold',
        fontSize: 15,
    },
    subtitle: {
        color: colors.gray
    },
    iconContainer: {
        padding: 10,
        paddingHorizontal: 0,
    },
    icon: {
        height: 30,
        width: 30,
        tintColor: colors.gray,
    },
    contentContainer: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row'
    },

})

Post.propTypes = {

}

const mapStateToProps = (state) => ({
    post: state.audio.post,
    isProcessing: state.audio.isProcessing,
    isBuffering: state.audio.isBuffering,
    isPaused: state.audio.isPaused,
    isPlaying: state.audio.isPlaying,
    playbackInstance: state.audio.playbackInstance,
    error: state.audio.error,
    errorMessage: state.audio.errorMessage,
})

const mapDispatchToProps = {
    play,
    pause
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)