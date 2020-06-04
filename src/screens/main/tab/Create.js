import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../../components/NavigationBar'
import Separator from '../../../components/Separator'
import { colors, layout } from '../../../constants/Styles'

export default class Create extends React.Component {

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: colors.safearea
            }}>
                <NavigationBar 
                    leftIconOnPress={() => this.props.navigation.goBack()}
                    leftIconImage={require('../../../assets/icons/cancel.png')}
                    rightIconOnPress={() => this._handlePost()}
                    rightIconImage={require('../../../assets/icons/send.png')}
                />
                <Separator />
                <View
                    style={{
                        height: layout.inputContainerHeight*2,
                        backgroundColor: colors.background
                    }}
                >

                </View>
                <Separator />
                <View
                    style={{
                        height: layout.inputContainerHeight,
                        paddingHorizontal: layout.paddingHorizontal,
                        backgroundColor: colors.background,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Image 
                        style={{
                            height: 40,
                            width: 40,
                        }}
                        source={require('../../../assets/icons/mic.png')}
                    />
                    <Text
                        style={{
                            flex: 1,
                            marginHorizontal: 10,
                            fontWeight: 'bold',
                        }}
                    >
                        Record
                    </Text>
                    <Image 
                        style={{
                            height: 20,
                            width: 20,
                        }}
                        source={require('../../../assets/icons/right_arrow.png')}
                    />
                </View>
            </SafeAreaView>
        ); 
    }
}