import React from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../../components/NavigationBar'
import MultilineInput from '../../../components/MultilineInput'
import Separator from '../../../components/Separator'
import { colors, layout } from '../../../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Create extends React.Component {

    state = {
        maxLength: 140,
        currentLength: 0,
        clear: false,
    }

    _handleCancel() {
        this.setState({ 
            clear: true,
            currentLength: 0
        })
        this.props.navigation.goBack()
    }

    _handlePost() {
        console.log('Button not handled!')
    }

    _onChangeText = (text) => {
        if(this.state.clear) { this.setState({ clear: false }) }
        this.setState({
            text: text,
            currentLength: text.length
        })
    }

    _handleRecord() {
        this.props.navigation.navigate('Main', {
            screen: 'Record',
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.safearea}>
                    <NavigationBar
                        leftIconOnPress={() => this._handleCancel()}
                        leftIconImage={require('../../../assets/icons/cancel.png')}
                        rightIconOnPress={() => this._handlePost()}
                        rightIconImage={require('../../../assets/icons/send.png')}
                    />
                <KeyboardAwareScrollView contentContainerStyle={{flex: 1,}}>
                    <Separator />
                    <View
                        style={styles.container}
                    >
                        <MultilineInput
                            style={styles.textInput}
                            maxLines={1}
                            maxLength={this.state.maxLength}
                            placeholder={'What\'s on your mind?'}
                            onChangeText={this._onChangeText}
                            clear={this.state.clear}
                        />
                        <Text
                            style={styles.counter}
                        >{this.state.currentLength}/{this.state.maxLength}</Text>
                    </View>
                    <Separator />
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._handleRecord()}
                        style={styles.optionContainer}
                    >
                        <Image
                            style={styles.optionIcon}
                            source={require('../../../assets/icons/mic.png')}
                        />
                        <Text
                            style={styles.optionText}
                        >
                            Record
                        </Text>
                        <Image
                            style={styles.optionArrow}
                            source={require('../../../assets/icons/right_arrow.png')}
                        />
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: colors.safearea
    },
    container: {
        paddingHorizontal: layout.paddingHorizontal,
        paddingVertical: layout.paddingHorizontal / 2,
        backgroundColor: colors.background,
    },
    textInput: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: "flex-start",
        textAlignVertical: "top",
    },
    counter: {
        color: colors.gray,
        alignSelf: 'flex-end'
    },
    optionContainer: {
        height: layout.inputContainerHeight,
        paddingHorizontal: layout.paddingHorizontal,
        backgroundColor: colors.background,
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionIcon: {
        height: 40,
        width: 40,
    },
    optionText: {
        flex: 1,
        marginHorizontal: 10,
        fontWeight: 'bold',
    },
    optionArrow: {
        height: 20,
        width: 20,
    },
})