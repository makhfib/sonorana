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
                            following={following}
                        />
                    }

                </View>
            </View>
        )
    }
}

User.propTypes = {
    photo: PropTypes.string,
    username: PropTypes.string,
    following: PropTypes.bool
}