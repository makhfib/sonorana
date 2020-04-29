import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Colors } from '../constants/Colors'
import Layout from '../constants/Layout'
import Styles from '../constants/Styles'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native-gesture-handler'

const textColor = Colors.background

export default class NavigationBar extends Component {
    render() {
        return (
            <View style={{
                top: 0,
                left: Layout.paddingHorizontal,
                height: 60,
                position: 'absolute',
                justifyContent: 'flex-end',
                paddingBottom: 5,
            }}>
                <TouchableOpacity
                    onPress={this.props.leftIconOnPress}
                >
                    <Image
                    source={this.props.leftIcon}
                    style={[Styles.icon, {tintColor: this.props.leftIconTintColor}]}
                />
                </TouchableOpacity>
                
            </View>
        )
    }
}

NavigationBar.propTypes = {
    leftIcon: PropTypes.number,
    leftIconTintColor: PropTypes.string,
    leftIconOnPress: PropTypes.func,
    
    rightIcon: PropTypes.number,
    rightIconTintColor: PropTypes.string,
    rightIconOnPress: PropTypes.func
}
