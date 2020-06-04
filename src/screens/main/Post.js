import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Slider from "react-native-slider"
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../constants/Styles'
import { layout } from '../../constants/Styles'
import { clipsList } from '../../data/clipsList'
import { usersList } from '../../data/usersList'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Post extends Component {
    state = {
        liked: false,
        value: 0.2,
        playing: false,
    }

    _onLikePress = () => {
        this.setState({ liked: !this.state.liked })
    }

    _onPlayPausePress = () => {
        this.setState({ playing: !this.state.playing })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.profileContainer}>
                    <Image 
                        source={usersList[0].image}
                        style={styles.profileImage}
                    />
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>{clipsList[0].p_description}</Text>
                </View>
                <View style={styles.sliderContainer}>
                    <Text style={styles.durationText}>0:45</Text>
                    <Slider
                        style={styles.slider}
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                        maximumTrackTintColor='lightgray'
                        minimumTrackTintColor={colors.pink}
                        thumbStyle={styles.thumb}
                        trackStyle={styles.track}
                    />
                    <Text style={styles.durationText}>-{clipsList[0].p_duration}</Text>
                </View>
                <View style={styles.controls}>
                    <TouchableOpacity activeOpacity={1}>
                        <Image 
                            source={require('../../assets/icons/rewind.png')}
                            style={styles.buttonImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={this._onPlayPausePress}>
                        <Image 
                            source={ this.state.playing 
                                ? require('../../assets/icons/pause_circle.png')
                                : require('../../assets/icons/play_circle.png')}
                            style={styles.playPauseImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}>
                        <Image 
                            source={require('../../assets/icons/fastforward.png')}
                            style={styles.buttonImage}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity activeOpacity={1} onPress={this._onLikePress}>
                        <Image 
                            source={ this.state.liked
                                ? require('../../assets/icons/liked.png')
                                : require('../../assets/icons/like.png')}
                            style={[styles.likeImage, {tintColor: this.state.liked ? colors.pink : colors.gray}]}
                        />
                        <View style={styles.likes}>
                            <Text style={styles.actionsText}>{clipsList[0].p_numLikes}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: layout.paddingHorizontal,
        paddingRight: layout.paddingHorizontal,
        backgroundColor: colors.background,
    },
    profileContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 150, 
        height: 150, 
        borderRadius: 150/2,
        backgroundColor: colors.background,
    },
    descriptionContainer: {
        flex: 0.1,
        alignItems: 'center',
    },
    descriptionText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    sliderContainer: {
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
    track:{
        height: 2.5,
    },
    controls: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonImage: {
        width: 50, 
        height: 50,
    },
    playPauseImage: {
        marginLeft: 40,
        marginRight: 40,
        width: 75, 
        height: 75,
    },
    actions: {
        flex: 0.1,
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
        fontSize: 11,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.gray,
    }
    // 75, 25, 17
})