import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TextStyle from '../constants/TextStyle'
import PropTypes from 'prop-types'
import ActionButton from './ActionButton';

export default class FollowButton extends Component {
    render() {
        return (
            <ActionButton 
                icon={this.props.icon}
                text={this.props.text}
                onPress={this.props.onPress}
                buttonStyle={[custom.followButton, {backgroundColor: this.props.backgroundColor}]}
                iconStyle={custom.followIcon}
                textStyle={custom.followText}
            />
        )
    }
}

FollowButton.propTypes = {
    icon: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string,
}

const custom = StyleSheet.create({
    followButton: {
        paddingHorizontal: 15,
        height: 30,
        minWidth: 120,
        justifyContent: 'center',
    },
    followIcon: {
        width: 15,
        height: 15,
    },
    followText: {
        fontSize: TextStyle.sizeThree
    },
})