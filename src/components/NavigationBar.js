import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Colors } from '../constants/Colors'
import Layout from '../constants/Layout'
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
                        style={[{ width: 20, height: 20, resizeMode: 'contain', tintColor: this.props.leftIconTintColor }]}
                    />
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    alignItems: this.props.rightSecondIcon ? 'flex-start' : 'center',
                    marginHorizontal: 20,
                }}>
                    <Text style={[{ fontSize: 16, fontWeight: 'bold', color: Colors.antagonist }]}>
                        {this.props.title}
                    </Text>
                </View>
                <View
                    style={{
                        alignSelf: 'flex-end',
                        flexDirection: 'row',
                    }}
                >
                    {
                        this.props.rightThirdIcon &&
                        <TouchableOpacity
                            onPress={this.props.rightThirdIconOnPress}
                        >
                            <Image
                                source={this.props.rightThirdIcon}
                                style={[{ width: 20, height: 20, resizeMode: 'contain',  tintColor: this.props.rightThirdIconTintColor, marginRight: 20, }]}
                            />
                        </TouchableOpacity>
                    }
                    {
                        this.props.rightSecondIcon &&
                        <TouchableOpacity
                            onPress={this.props.rightSecondIconOnPress}
                        >
                            <Image
                                source={this.props.rightSecondIcon}
                                style={[{  width: 20, height: 20, resizeMode: 'contain',  tintColor: this.props.rightSecondIconTintColor, marginRight: 15, }]}
                            />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity
                        onPress={this.props.rightIconOnPress}
                    >
                        <Image
                            source={this.props.rightIcon}
                            style={[{ width: 25, height: 20, resizeMode: 'contain', tintColor: this.props.rightIconTintColor }]}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

NavigationBar.propTypes = {
    leftIcon: PropTypes.number,
    leftIconTintColor: PropTypes.string,
    leftIconOnPress: PropTypes.func,

    rightThirdIcon: PropTypes.number,
    rightThirdIconTintColor: PropTypes.string,
    rightThirdIconOnPress: PropTypes.func,

    rightSecondIcon: PropTypes.number,
    rightSecondIconTintColor: PropTypes.string,
    rightSecondIconOnPress: PropTypes.func,

    rightIcon: PropTypes.number,
    rightIconTintColor: PropTypes.string,
    rightIconOnPress: PropTypes.func,

    title: PropTypes.string
}
