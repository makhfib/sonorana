import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { custom } from './css/User.css';
import FollowButton from './FollowButton';
import PropTypes from 'prop-types'
import { Colors } from '../constants/Colors';

export default class User extends Component {

    state = {
        photo: this.props.photo,
        username: this.props.username,
        following: this.props.following,
    }

    _handleFollowButton() {
        const { following } = this.state
        this.setState({ following: !following })
    }

    render() {
        const { 
            photo,
            username,
            following
        } = this.state;

        var icon = following ? 'done' : 'add';
        var text = following ? 'Following' : 'Follow';
        var color = following ? Colors.safety : Colors.tint;

        return (
            <View style={custom.container}>
                <View
                    style={custom.header}>
                    <Image
                        source={{ uri: photo }}
                        style={custom.photo}
                    />
                    <View style={custom.headerTextContainer}>
                        <Text numberOfLines={1} style={custom.username}>{username}</Text>
                    </View>
                    {
                        username !== 'makhfib' &&
                        <FollowButton
                            icon={
                                icon === 'done'
                                    ? require('../assets/icons/interaction/done.png')
                                    : require('../assets/icons/interaction/add.png')
                            }
                            text={text}
                            onPress={() => this._handleFollowButton()}
                            backgroundColor={color}
                        />
                    }

                </View>
            </View>
        )
    }
}

User.propTypes = {
    me: PropTypes.bool,
    photo: PropTypes.string,
    username: PropTypes.string,
    following: PropTypes.bool
}