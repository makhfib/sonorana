import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import ActionButton from './ActionButton'
import { custom } from './css/Post.css';
import PropTypes from 'prop-types'
import { Colors } from '../constants/Colors';
import TextStyle from '../constants/TextStyle'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { formatTime, timeSince } from '../functions/Utils'

export default class Post extends Component {

    state = {
        playing: false,
        liked: this.props.item.u_liked,
        // This state is used as a workaround to prevent
        // the parent touchable from being triggered when
        // other nested touchables are being pressed
        touchableDisabled: false,
    }

    _handlePlayButton() {
        this.setState({ touchableDisabled: true })

        const { playing } = this.state
        this.setState({ playing: !playing })
    }

    _handleLike() {
        this.setState({ touchableDisabled: true })

        const { liked } = this.state
        this.setState({ liked: !liked })
    }

    _handleComment() {
        this.setState({ touchableDisabled: true })

    }

    _handleEcho() {
        this.setState({ touchableDisabled: true })

    }

    _handlePostOnPress() {
        const {
            item
        } = this.props;

        if (!this.state.touchableDisabled) {
            this.props.navigation.navigate('Post', {
                item
            })
        }

        this.setState({ touchableDisabled: false })
    }

    _handleProfileOnPress() {
        this.setState({ touchableDisabled: true })

        const {
            item
        } = this.props;

        this.props.navigation.navigate('Main', {
            screen: 'Profile',
            params: {
                item
            }
        })
    }

    render() {
        const {
            item
        } = this.props;

        const {
            playing,
            liked,
        } = this.state;

        return (
            <View style={custom.container}>
                <TouchableWithoutFeedback
                    onPress={() => this._handlePostOnPress()}>
                    <View
                        style={custom.header}
                    >
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableWithoutFeedback
                                style={{ flexDirection: 'row', }}
                                onPress={() => this._handleProfileOnPress()}

                            >
                                <Image
                                    source={{ uri: item.u_photo }}
                                    style={custom.photo}
                                />
                                <View style={custom.headerTextContainer}>
                                    <Text numberOfLines={1} style={custom.username}>{item.u_username}</Text>
                                    <Text numberOfLines={1} style={[TextStyle.postDate, custom.datetime]}>{timeSince(item.p_datetime)}</Text>
                                </View>

                            </TouchableWithoutFeedback>

                        </View>
                        <ActionButton
                            icon={
                                playing
                                    ? require('../assets/icons/bold/pause.png')
                                    : require('../assets/icons/bold/play.png')
                            }
                            text={formatTime(item.p_duration)}
                            buttonStyle={custom.playButton}
                            iconStyle={[custom.playIcon]}
                            textStyle={[TextStyle.postInteraction, custom.playText]}
                            onPress={() => this._handlePlayButton()}
                        />
                    </View>
                    <Text style={custom.description}>
                        {item.p_description}
                    </Text>

                    <View style={custom.interactionsContainer}>
                        <ActionButton
                            icon={
                                liked
                                    ? require('../assets/icons/bold/heart.png')
                                    : require('../assets/icons/regular/heart.png')
                            }
                            text={'Like'}
                            buttonStyle={custom.interactionButton}
                            iconStyle={[custom.interactionIcon, { tintColor: liked ? Colors.like : Colors.default }]}
                            textStyle={[TextStyle.postInteraction, custom.interactionText, { color: liked ? Colors.like : Colors.default }]}
                            onPress={() => this._handleLike()}
                        />
                        <ActionButton
                            icon={require('../assets/icons//regular/messages-bubble.png')}
                            text={'Comment'}
                            buttonStyle={custom.interactionButton}
                            iconStyle={custom.interactionIcon}
                            textStyle={[TextStyle.postInteraction, custom.interactionText]}
                            onPress={() => this._handleComment()}
                        />
                        <ActionButton
                            icon={require('../assets/icons/regular/echo.png')}
                            text={'Echo'}
                            buttonStyle={custom.interactionButton}
                            iconStyle={custom.interactionIcon}
                            textStyle={[TextStyle.postInteraction, custom.interactionText]}
                            onPress={() => this._handleEcho()}
                        />

                    </View>
                </TouchableWithoutFeedback>

            </View>

        )
    }
}

Post.propTypes = {
    item: PropTypes.object, // contains user and post attributes
}