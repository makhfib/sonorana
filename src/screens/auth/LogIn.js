import React, { Component } from 'react'
import { Image, Text, View, StyleSheet, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors'
import Layout from '../../constants/Layout'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ActionButton from '../../components/ActionButton'

export default class LogIn extends Component {
    render() {
        return (
            <SafeAreaView style={custom.container}>

                <ImageBackground style={custom.imageBackground}
                    resizeMode='cover'
                    source={require('../../assets/images/background.png')}
                >
                    <View style={custom.titleContainer}>
                        <Image
                            source={require('../../assets/icons/text-logo.png')}
                            style={[custom.title, { height: 50, resizeMode: 'contain' }]}
                        />
                    </View>
                    <View style={custom.formContainer} behavior="padding">
                        <View style={custom.form}>
                            <Text style={custom.inputLabel}>Username or email</Text>
                            <TextInput
                                style={custom.input}
                                textContentType={'emailAddress'}
                                selectionColor={Colors.notwhite}
                            />
                            <View style={custom.separator} />
                            <Text style={custom.inputLabel}>Password</Text>
                            <TextInput
                                style={custom.input}
                                secureTextEntry={true}
                                textContentType={'password'}
                                selectionColor={Colors.notwhite}
                            />
                        </View>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('Auth', { screen: 'ResetPassword' })}
                        >
                            <Text style={custom.normalText}>Forgot your password?</Text>
                        </TouchableOpacity>
                        <ActionButton
                            icon={require('../../assets/icons/icon-logo.png')}
                            text={'Log in'}
                            onPress={() => null}
                        />
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
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const textColor = Colors.background
const formColor = '#0E245075'

const custom = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        paddingHorizontal: Layout.paddingHorizontal,
        justifyContent: 'center',
    },
    titleContainer: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        height: 100,
        marginBottom: 25,
    },
    title: {
        tintColor: textColor
    },
    formContainer: {

    },
    form: {
        backgroundColor: formColor,
        opacity: 1,
        height: 120,
        borderRadius: 4,
    },
    inputLabel: {
        marginTop: 5,
        color: textColor,
        paddingLeft: 10,
    },
    input: {
        color: textColor,
        fontSize: 14,
        height: 35,
        paddingLeft: 10,
    },
    normalText: {
        color: textColor,
        marginTop: 10,
        paddingHorizontal: 10,
        backgroundColor: formColor,
        borderRadius: 5
    },
    separator: {
        height: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.notwhite,
    },
    alternativeContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
});