import React, { Component } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../constants/Styles'
import { layout } from '../constants/Styles'

export default class Post extends Component {
    state = {
        playing: false,
        liked: this.props.item.u_liked,
    }

    _onLikePress() {
        this.setState({ liked: !this.state.liked })
    }

    _onPlayPausePress() {
        this.setState({ playing: !this.state.playing })
    }

    _onPostPress() {
        this.props.navigation.navigate('Main', {
            screen: 'Post',
            params: {
                item: this.props.item
            }
        })
    }

    _onProfilePress() {
        this.props.navigation.navigate('Main', {
            screen: 'Profile',
            params: {
                item: this.props.item
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}
                        onPress={() => this._onProfilePress()}
                    >
                        <Image
                            source={{ uri: this.props.item.u_photo }}
                            style={styles.profileImage}
                        />
                        <View style={styles.userContainer}>
                            <Text maxLength={15} style={styles.boldText}>{this.props.item.u_username}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={styles.likeButton} onPress={() => this._onLikePress()}>
                        <Image
                            source={this.state.liked
                                ? require('../assets/icons/liked.png')
                                : require('../assets/icons/like.png')}
                            style={[styles.likeImage, { tintColor: this.state.liked ? colors.pink : colors.gray }]}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={1} style={styles.bodyContainer} onPress={() => this._onPostPress()}>
                    <ImageBackground
                        //source={require('../assets/fake/fake-audio.png')}
                        style={styles.imageBackground}
                    >
                        <View style={styles.infoContainer}>
                            <View style={styles.textContainer}>
                                <Text style={styles.boldText}>{this.props.item.p_description}</Text>
                            </View>
                            <View>
                                <Text>{this.props.item.p_duration}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <TouchableOpacity activeOpacity={1} style={styles.playPauseButton} onPress={() => this._onPlayPausePress()}>
                        <Image
                            source={this.state.playing
                                ? require('../assets/icons/pause_circle.png')
                                : require('../assets/icons/play_circle.png')}
                            style={styles.playPauseImage}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        borderColor: colors.lightgray,
        borderTopWidth: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: layout.paddingHorizontal,
        paddingRight: layout.paddingHorizontal - 5,
        borderBottomWidth: 0.5,
        borderColor: colors.lightgray,
    },
    profileImage: {
        width: 25,
        height: 25,
        margin: 9,
        backgroundColor: colors.background,
        borderRadius: 15
    },
    boldText: {
        fontWeight: 'bold'
    },
    userContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    likeButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bodyContainer: {
        flexDirection: 'row',
        paddingLeft: 5,
    },
    likeImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        backgroundColor: colors.background
    },
    infoContainer: {
        flex: 1,
        padding: 9,
        paddingHorizontal: layout.paddingHorizontal + 9 - 5,
        paddingBottom: 14,
    },
    textContainer: {
        paddingBottom: 5
    },
    imageBackground: {
        flex: 1,
        flexDirection: 'row',
    },
    playPauseButton: {
        justifyContent: 'center',
        paddingRight: layout.paddingHorizontal - 5,
    },
    playPauseImage: {
        width: 30,
        height: 30,
        borderRadius: 16,
        marginLeft: 15,
        backgroundColor: colors.background,
        tintColor: colors.black
    }
})