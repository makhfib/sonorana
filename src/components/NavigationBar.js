import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Colors } from '../constants/Colors'
import Layout from '../constants/Layout'
import Styles from '../constants/Styles'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TextStyle from '../constants/TextStyle'

const textColor = Colors.background

export default class NavigationBar extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: Layout.paddingHorizontal,
                height: 60,
                alignItems: 'flex-end',
                paddingBottom: 5,
            }}>
                <TouchableOpacity
                    onPress={this.props.leftIconOnPress}
                >
                    <Image
                        source={this.props.leftIcon}
                        style={[Styles.icon, { tintColor: this.props.leftIconTintColor }]}
                    />
                </TouchableOpacity>
                <View style={{
                        flex: 1,
                        alignItems: 'center',
                    }}>
                    <Text style={[{fontSize: 16}]}>
                        {this.props.title}
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={this.props.rightIconOnPress}
                    style={{ alignSelf: 'flex-end' }}
                >
                    <Image
                        source={this.props.rightIcon}
                        style={[Styles.icon, { tintColor: this.props.rightIconTintColor }]}
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
    rightIconOnPress: PropTypes.func,

    title: PropTypes.string
}
