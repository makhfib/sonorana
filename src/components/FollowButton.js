import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import TextStyle from '../constants/TextStyle'
import PropTypes from 'prop-types'
import ActionButton from './ActionButton';
import { Colors } from '../constants/Colors';

export default class FollowButton extends Component {

    state = {
        following: this.props.following,
    }

    _handleFollowButton() {
        const { following } = this.state
        this.setState({ following: !following })
    }

    render() {
        const { 
            following
        } = this.state;

        var icon = following ? 'done' : 'add';
        var text = following ? 'Following' : 'Follow';
        var color = following ? Colors.safety : Colors.tint;

        return (
            <ActionButton 
                icon={
                    icon === 'done'
                        ? require('../assets/icons/interaction/done.png')
                        : require('../assets/icons/interaction/add.png')
                }
                text={text}
                onPress={() => this._handleFollowButton()}
                buttonStyle={[custom.followButton, {backgroundColor: color}]}
                iconStyle={custom.followIcon}
                textStyle={[TextStyle.postInteraction, custom.followText]}
            />
        )
    }
}

FollowButton.propTypes = {
    onPress: PropTypes.func.isRequired,
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