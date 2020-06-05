import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { colors, layout } from '../constants/Styles'
import FollowButton from './FollowButton'
import PropTypes from 'prop-types';

export default class Profile extends Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <Image
                    style={styles.photo}
                    source={this.props.item.u_photo}
                />
                <Text
                    style={styles.username}
                    numberOfLines={1}
                >{this.props.item.u_username}</Text>
                <FollowButton
                    u_following={this.props.item.u_following}
                />
            </View>
        )
    }
}

Profile.propTypes = {
    item: PropTypes.object, // contains u_photo, u_username, u_following
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: layout.inputContainerHeight,
        paddingHorizontal: layout.paddingHorizontal,
        backgroundColor: colors.background,
        alignItems: 'center',
    },
    photo: {
        height: 30,
        width: 30,
        borderRadius: 30/2,
    },
    username: {
        flex: 1,
        marginLeft: layout.paddingHorizontal/2,
        fontWeight: 'bold'
    },

})