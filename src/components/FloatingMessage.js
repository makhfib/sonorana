import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { colors, layout } from '../constants/Styles'

export default class ErrorMessage extends Component {
    render() {
        return (
            <View
                style={[{
                    flexDirection: 'row',
                    minHeight: layout.inputContainerHeight,
                    backgroundColor: colors.blue,
                    borderRadius: 5,
                    marginBottom: 10,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: layout.paddingHorizontal,
                }, this.props.style]}
            >
                <Text
                    style={{
                        flex: 1,
                        color: 'white',
                        marginVertical: 10,
                    }}
                >
                    {this.props.errorMessage}
                </Text>
                <TouchableOpacity
                    activeOpacity={1}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: layout.inputContainerHeight,
                        width: 40, // same width as eye iconto be aligned
                    }}
                    onPress={() => this.props.onCancel()}
                >
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: 'white',
                            alignSelf: 'center',
                            resizeMode: 'contain',
                        }}
                        source={require('../assets/icons/cancel.png')}
                    />
                </TouchableOpacity>

            </View>
        )
    }
}
