import React from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../../components/NavigationBar'
import MultilineInput from '../../../components/MultilineInput'
import Separator from '../../../components/Separator'
import { colors, layout } from '../../../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Create extends React.Component {

    state = {
        //textInput: undefined,
        maxLength: 140,
        currentLength: 0,
    }

    _handleCancel() {
        //this.state._textInput.setNativeProps({text: ''});
        this.props.navigation.goBack()
    }

    _onChangeText(text) {
        this.setState({ currentLength: text.length })
    }

    _handleRecord() {
        this.props.navigation.navigate('Main', {
            screen: 'Record'
        })
    }

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: colors.safearea
            }}>
                <NavigationBar
                    leftIconOnPress={() => this._handleCancel()}
                    leftIconImage={require('../../../assets/icons/cancel.png')}
                    rightIconOnPress={() => this._handlePost()}
                    rightIconImage={require('../../../assets/icons/send.png')}
                />
                <Separator />
                <View
                    style={{
                        paddingHorizontal: layout.paddingHorizontal,
                        paddingVertical: layout.paddingHorizontal/2,
                        backgroundColor: colors.background,
                    }}
                >
                    <MultilineInput 
                        style={{
                            flexWrap: 'wrap',
                            flexDirection: 'column',
                            justifyContent: "flex-start",
                            textAlignVertical: "top",
                        }}
                        maxLines={1}
                        maxLength={this.state.maxLength}
                        placeholder={'What\'s on your mind?'}
                        //ref={component => this.state._textInput = component }
                        onChangeText={(text) => this._onChangeText(text)}
                    />
                    <Text
                        style={{
                            color: colors.gray,
                            alignSelf: 'flex-end'
                        }}
                    >{this.state.currentLength}/{this.state.maxLength}</Text>
                </View>
                <Separator />
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => this._handleRecord()}
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
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}