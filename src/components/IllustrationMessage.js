import React, { Component } from 'react'
import { Text, View, ScrollView, RefreshControl, Image, TouchableOpacity } from 'react-native'
import { colors, layout } from '../constants/Styles'

export default class IllustrationMessage extends Component {
    render() {
        return (
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    backgroundColor: colors.background,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: layout.paddingHorizontal * 2,
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.refreshing}
                        onRefresh={() => this.props.onRefresh()}
                    />
                }
            >
                <Image
                    style={{
                        height: 150,
                        width: 150,
                        resizeMode: 'contain',
                    }}
                    source={this.props.illustration}
                />
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        marginVertical: 10,
                        textAlign: 'center',
                    }}
                >
                    {this.props.title}
                </Text>
                {
                    this.props.message
                        ? <Text
                            style={{
                                fontSize: 15,
                                marginVertical: 10,
                                textAlign: 'center',
                            }}
                        >
                            {this.props.message}
                        </Text>
                        : <></>
                }
                {
                    this.props.buttonText
                        ? <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this.props.onPress()}
                        >
                            <Text
                                style={{
                                    color: colors.blue,
                                    fontSize: 15,
                                    marginVertical: 10,
                                    textAlign: 'center',
                                }}
                            >
                                {this.props.buttonText}
                    </Text>
                        </TouchableOpacity>
                        : <></>
                }

            </ScrollView>
        )
    }
}
