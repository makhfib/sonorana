import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import ActionButton from './ActionButton'
import { custom } from './css/Post.css';
import PropTypes from 'prop-types'
import { Colors } from '../constants/Colors';
import TextStyle from '../constants/TextStyle'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class Post extends Component {

    state = {
        playing: false,
        liked: false,
    }

    _handlePlayButton() {
        const { playing } = this.state
        this.setState({ playing: !playing })
    }

    _handleLike() {
        const { liked } = this.state
        this.setState({ liked: !liked })
    }

    render() {
        const {
            id,
            photo,
            username,
            name,
            datetime,
            description,
            duration
        } = this.props;

        const {
            playing,
            liked
        } = this.state;

        return (
            <View style={custom.container}>
                <TouchableWithoutFeedback
                    onPress={() =>
                        this.props.navigation.navigate('Post', {
                            id,
                            photo,
                            username,
                            name,
                            datetime,
                            description,
                            duration
                        })}>
                    <View
                        style={custom.header}
                    >
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableWithoutFeedback
                                style={{ flexDirection: 'row', }}
                                onPress={() => this.props.navigation.navigate('User', {
                                    photo,
                                    name,
                                    username,
                                    following: '10k',
                                    followers: '1m'
                                })}
                            >
                                <Image
                                    source={{ uri: photo }}
                                    style={custom.photo}
                                />
                                <View style={custom.headerTextContainer}>
                                    <Text numberOfLines={1} style={custom.username}>{username}</Text>
                                    <Text numberOfLines={1} style={[TextStyle.postDate, custom.datetime]}>{datetime}</Text>
                                </View>

                            </TouchableWithoutFeedback>

                        </View>
                        <ActionButton
                            icon={
                                playing
                                    ? require('../assets/icons/audio/pause.png')
                                    : require('../assets/icons/audio/play.png')
                            }
                            text={duration}
                            buttonStyle={custom.playButton}
                            iconStyle={[custom.playIcon]}
                            textStyle={[TextStyle.postInteraction, custom.playText]}
                            onPress={() => this._handlePlayButton()}
                        />
                    </View>
                    <Text style={custom.description}>
                        {description}
                    </Text>

                    <View style={custom.interactionsContainer}>
                        <ActionButton
                            icon={
                                liked
                                    ? require('../assets/icons/interaction/heart-filled.png')
                                    : require('../assets/icons/interaction/heart.png')
                            }
                            text={'Like'}
                            buttonStyle={custom.interactionButton}
                            iconStyle={[custom.interactionIcon, { tintColor: liked ? Colors.like : Colors.default }]}
                            textStyle={[TextStyle.postInteraction, custom.interactionText, { color: liked ? Colors.like : Colors.default }]}
                            onPress={() => this._handleLike()}
                        />
                        <ActionButton
                            icon={require('../assets/icons/interaction/comment.png')}
                            text={'Comment'}
                            buttonStyle={custom.interactionButton}
                            iconStyle={custom.interactionIcon}
                            textStyle={[TextStyle.postInteraction, custom.interactionText]}
                        />
                        <ActionButton
                            icon={require('../assets/icons/interaction/echo.png')}
                            text={'Echo'}
                            buttonStyle={custom.interactionButton}
                            iconStyle={custom.interactionIcon}
                            textStyle={[TextStyle.postInteraction, custom.interactionText]}
                        />

                    </View>
                </TouchableWithoutFeedback>

            </View>

        )
    }
}

Post.propTypes = {
    id: PropTypes.string,
    photo: PropTypes.string,
    username: PropTypes.string,
    datetime: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.string,
}