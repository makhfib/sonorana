import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import TextStyle from '../constants/TextStyle'
import PropTypes from 'prop-types'
import ActionButton from './ActionButton';
import { Colors } from '../constants/Colors';

export default class FollowButton extends Component {
    render() {
        return (
            <ActionButton 
                icon={this.props.icon}
                text={this.props.text}
                onPress={this.props.onPress}
                buttonStyle={[custom.followButton, {backgroundColor: this.props.backgroundColor}]}
                iconStyle={custom.followIcon}
                textStyle={[TextStyle.postInteraction, custom.followText]}
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
        minWidth: 100,
        justifyContent: 'center',
    },
    followIcon: {
        width: 10,
        height: 10,
    },
    followText: {
        color: Colors.background
    },
})