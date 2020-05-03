import React, { Component } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import { textColor, custom } from './css/SignUp.css'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import ActionButton from '../../components/ActionButton'
import NavigationBar from '../../components/NavigationBar';

export default class SignUp extends Component {
    render() {
        return (
            <SafeAreaView style={custom.container}>
                <ImageBackground style={[custom.imageBackground]}
                    resizeMode='cover'
                    source={require('../../assets/images/background.png')}
                >
                    <NavigationBar
                        leftIcon={require('../../assets/icons/bold/arrow-left.png')}
                        leftIconTintColor={textColor}
                        leftIconOnPress={() => this.props.navigation.goBack()}
                    />
                    <View
                        style={custom.content}>
                        <View style={custom.titleContainer}>
                            <Image
                                source={require('../../assets/brand/text.png')}
                                style={[custom.title, { height: 50, resizeMode: 'contain' }]}
                            />
                        </View>
                        <View style={custom.formContainer} behavior="padding">
                            <View style={custom.form}>
                                <Text style={custom.inputLabel}>Username</Text>
                                <TextInput
                                    style={custom.input}
                                    textContentType={'nickname'}
                                    selectionColor={textColor}
                                />
                                <View style={custom.separator} />
                                <Text style={custom.inputLabel}>Email</Text>
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
                            <Text style={custom.normalText}>
                                By creating an account, you agree to our
                                <Text
                                        style={[{ fontWeight: 'bold' }]}
                                        onPress={() => null}
                                    > Terms
                                </Text>.
                                Check our
                                <Text
                                        style={[{ fontWeight: 'bold' }]}
                                        onPress={() => null}
                                    > Data Policy
                                </Text> to learn how we use your data.
                                You can opt out anytime.
                            </Text>
                            <View style={custom.buttonContainer}>
                                <ActionButton
                                    icon={require('../../assets/brand/icon.png')}
                                    text={'Create account'}
                                    onPress={() => this.props.navigation.navigate('Auth', { screen: 'ConfirmSignUp' })}
                                />
                            </View>
                        </View>
                    </View>

                </ImageBackground>
            </SafeAreaView>
        )
    }
}