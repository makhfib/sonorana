import React, { Component } from 'react'
import { Image, Text, View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { textColor, custom } from './css/LogIn.css'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ActionButton from '../../components/ActionButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class LogIn extends Component {
    render() {
        return (
            <SafeAreaView style={custom.container}>
                <ImageBackground style={custom.imageBackground}
                    resizeMode='cover'
                    source={require('../../assets/images/background.png')}
                >
                    <KeyboardAwareScrollView
                        scrollEnabled={false}
                        contentContainerStyle={{flex:1, justifyContent: 'center'}}
                    >
                        <View style={custom.titleContainer}>
                            <Image
                                source={require('../../assets/brand/text.png')}
                                style={[custom.title, { height: 50, resizeMode: 'contain' }]}
                            />
                        </View>
                        <View style={custom.formContainer} behavior="padding">
                            <View style={custom.form}>
                                <Text style={custom.inputLabel}>Username or email</Text>
                                <TextInput
                                    style={custom.input}
                                    textContentType={'emailAddress'}
                                    selectionColor={textColor}
                                />
                                <View style={custom.separator} />
                                <Text style={custom.inputLabel}>Password</Text>
                                <TextInput
                                    style={custom.input}
                                    secureTextEntry={true}
                                    textContentType={'password'}
                                    selectionColor={textColor}
                                />
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Auth', { screen: 'ResetPassword' })}
                            >
                                <Text style={custom.normalText}>Forgot your password?</Text>
                            </TouchableOpacity>
                            <View style={custom.buttonContainer}>
                                <ActionButton
                                    icon={require('../../assets/brand/icon.png')}
                                    text={'Log in'}
                                    onPress={() => null}
                                />
                            </View>
                            <View style={custom.alternativeContainer}>
                                <Text
                                    style={custom.normalText}
                                    onPress={() => this.props.navigation.navigate('Auth', { screen: 'SignUp' })}
                                >
                                    Haven't got an account yet?
                                <Text
                                        style={[{ fontWeight: 'bold' }]}
                                        onPress={() => this.props.navigation.navigate('Auth', { screen: 'SignUp' })}
                                    > Sign up
                                </Text>
                                </Text>

                            </View>
                        </View>

                    </KeyboardAwareScrollView>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
