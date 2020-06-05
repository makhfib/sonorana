import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, TextInput, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, layout } from '../../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export default class SignUp extends Component {

    _handleSignUp() {
        this.props.navigation.navigate('Auth', {
            screen: 'ConfirmSignUp'
        })
        console.log('Sign up')
    }

    _handleLogIn() {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <SafeAreaView style={styles.safearea}>
                <View
                    style={styles.background}
                >
                    <View
                        style={styles.logoContainer}
                    >
                        <Image
                            style={styles.logo}
                            source={require('../../assets/brand/Original-Icon.png')}
                        />
                    </View>
                    <View
                        style={styles.formContainer}
                    >
                        <LinearGradient
                            colors={[colors.pink, colors.orange, colors.yellow]}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            style={styles.gradientContainer}
                        >
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder={'Username'}
                                    placeholderTextColor={colors.tint}
                                    style={styles.input}
                                />
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            colors={[colors.pink, colors.orange, colors.yellow]}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            style={styles.gradientContainer}
                        >

                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder={'Email'}
                                    placeholderTextColor={colors.tint}
                                    style={styles.input}
                                />
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            colors={[colors.pink, colors.orange, colors.yellow]}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            style={styles.gradientContainer}
                        >
                            <View
                                style={styles.inputContainer}>

                                <TextInput
                                    placeholder={'Password'}
                                    placeholderTextColor={colors.tint}
                                    secureTextEntry={true}
                                    style={[styles.input, {
                                        paddingRight: layout.paddingHorizontal,
                                    }]}
                                />
                                <Image
                                    style={styles.inputIcon}
                                    source={require('../../assets/icons/appearance.png')}
                                />
                            </View>
                        </LinearGradient>

                        <LinearGradient
                            colors={[colors.yellow, colors.orange, colors.pink]}
                            start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }}
                            style={styles.signupContainer}
                        >
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => this._handleSignUp()}
                            >
                                <Text
                                    style={styles.signupText}
                                >
                                    CREATE ACCOUNT
                            </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.loginContainer}
                            onPress={() => this._handleLogIn()}
                        >
                            <Text
                                style={styles.loginText}
                            >
                                LOG IN
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: colors.safearea
    },
    background: {
        flex: 1,
        backgroundColor: colors.background
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
    },
    logo: {
        height: 160,
        width: 160,
    },
    formContainer: {
        alignItems: 'stretch',
        paddingHorizontal: layout.paddingHorizontal,
    },
    gradientContainer: {
        height: layout.inputContainerHeight,
        marginBottom: 10,
    },
    inputContainer: {
        height: 46,
        flexDirection: 'row',
        paddingHorizontal: layout.paddingHorizontal - 10,
        backgroundColor: colors.background
    },
    signupContainer: {
        height: layout.inputContainerHeight,
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 50,
    },
    signupText: {
        paddingVertical: 13,
        borderRadius: 3,
        overflow: 'hidden',
        marginHorizontal: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.pink,
        backgroundColor: colors.background,
    },
    input: {
        flex: 1,
        color: colors.tint,
    },
    inputIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        tintColor: colors.tint,
        alignSelf: 'center'
    },
    loginContainer: {
        height: layout.inputContainerHeight,
        marginBottom: 50,
        marginTop: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: layout.paddingHorizontal,
        alignContent: 'center',
    },
    loginText: {
        flex: 1,
        fontWeight: 'bold',
        color: colors.tint,
        textAlign: 'center',
    },

})  