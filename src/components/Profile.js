import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { colors, layout } from '../constants/Styles'
import FollowButton from './FollowButton'
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Profile extends Component {
    state = {
        onFollow: false,
    }

    _handleProfileOnPress() {
        if (this.state.onFollow) {
            this.setState({ onFollow: false })
        } else {
            this.props.navigation.navigate('Main', {
                screen: 'Profile',
                params: {
                    item: this.props.item
                }
            })
        }
    }

    _onFollowPressed() {
        this.setState({ onFollow: true })
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => this._handleProfileOnPress()}
                style={styles.container}
            >
                <Image
                    style={styles.photo}
                    source={{ uri: this.props.item.u_photo }}
                />
                <Text
                    style={styles.username}
                    numberOfLines={1}
                >{this.props.item.u_username}</Text>
                {
                    this.props.item.u_username !== 'freshlygrounded'
                        ? <FollowButton
                            u_following={this.props.item.u_following}
                            onPress={() => this._onFollowPressed()}
                        />
                        : <></>
                }

            </TouchableOpacity>
        )
    }
}

Profile.propTypes = {
    item: PropTypes.object, // contains u_photo, u_username, u_following
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: layout.inputContainerHeight*1.5,
        paddingHorizontal: layout.paddingHorizontal,
        backgroundColor: colors.background,
        alignItems: 'center',
        borderColor: colors.lightgray,
        borderTopWidth: 1,
    },
    photo: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
    },
    username: {
        flex: 1,
        marginLeft: layout.paddingHorizontal / 2,
        fontWeight: 'bold',
        fontSize: 15,
    },

})