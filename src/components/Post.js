import React, { Component } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { colors } from '../constants/Styles'

export default class Post extends Component {
    state = {
        playing: false,
        liked: false,
    }

    _onLikePress() {
        this.setState({ liked: !this.state.liked })
    }

    _onPlayPausePress() {
        this.setState({ playing: !this.state.playing })
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View>
                        <Image 
                            source={require('../assets/fake/daruma-draw.png')}
                            style={styles.profileImage}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={1} style={styles.userContainer}>
                        <Text maxLength = {15} style={styles.boldText}>user</Text>
                    </TouchableOpacity >
                    <TouchableOpacity activeOpacity={1} style={styles.likeButton} onPress={()=>this._onLikePress()}>
                        <Image 
                            source={ this.state.liked
                                ? require('../assets/icons/liked.png')
                                : require('../assets/icons/like.png')}
                            style={[styles.likeImage, {tintColor: this.state.liked ? colors.pink : colors.gray}]}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={1}  style={styles.container}>
                    <ImageBackground 
                        source={require('../assets/fake/fake-audio.png')} 
                        style={styles.imageBackground}
                    >
                        <View style={styles.infoContainer}>
                            <View style={styles.textContainer}>
                                <Text style={styles.boldText}>«Quien con monstruos lucha, cuide de convertirse a su vez en monstruo.»</Text>
                            </View>
                            <View>
                                <Text>01:23</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <TouchableOpacity activeOpacity={1} style={styles.playPauseButton} onPress={()=>this._onPlayPausePress()}>
                        <Image 
                            source={ this.state.playing 
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
        flexDirection: 'row'
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
        alignItems: 'center', 
        justifyContent: 'center'
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
        paddingBottom: 14
    },
    textContainer: {
        paddingBottom: 5
    },
    imageBackground: {
        flex: 1, 
        flexDirection: 'row'
    },
    playPauseButton: {
        justifyContent: 'center'
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