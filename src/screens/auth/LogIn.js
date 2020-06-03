import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, TextInput, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, layout } from '../../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LogIn extends Component {

    _handleLogIn() {
        console.log('Hello log in!')
    }

    _handleForgotPassword() {
        this.props.navigation.navigate('Auth', {
            screen: 'ForgotPassword'
        })
    }

    _handleSignUp() {
        this.props.navigation.navigate('Auth', {
            screen: 'SignUp'
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.safearea}>
                <ImageBackground
                    style={styles.background}
                    source={require('../../assets/images/linear-background.png')}
                >
                    <View
                        style={styles.logoContainer}
                    >
                        <Image
                            style={styles.logo}
                            source={require('../../assets/brand/White-Icon.png')}
                        />
                    </View>
                    <View
                        style={styles.formContainer}
                    >
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder={'Username or email'}
                                placeholderTextColor={colors.lightgray}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder={'Password'}
                                placeholderTextColor={colors.lightgray}
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
                    <View
                        style={styles.alternativesContainer}
                    >
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.forgotContainer}
                            onPress={() => this._handleForgotPassword()}
                        >
                            <Text
                                style={styles.forgotText}
                            >
                                I forgot my password
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.signupContainer}
                            onPress={() => this._handleSignUp()}
                        >
                            <Text
                                style={styles.signupText}
                            >
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
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
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 160,
        width: 160,
    },
    formContainer: {
        flex: 1,
        alignItems: 'stretch',
        marginHorizontal: layout.paddingHorizontal,
    },
    inputContainer: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: layout.paddingHorizontal,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    loginContainer: {
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.3)',
    },
    loginText: {
        fontWeight: 'bold',
        color: colors.background,
        textAlign: 'center',
    },
    input: {
        flex: 1,
        color: colors.background,
    },
    inputIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        tintColor: colors.background,
        alignSelf: 'center'
    },
    alternativesContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    forgotContainer: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        marginHorizontal: layout.paddingHorizontal,
    },
    forgotText: {
        fontWeight: 'bold',
        color: colors.background,
    },
    signupContainer: {
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: layout.paddingHorizontal,
        backgroundColor: colors.background,
        alignContent: 'center',
    },
    signupText: {
        flex: 1,
        fontWeight: 'bold',
        color: colors.pink,
        textAlign: 'center',
    },

})  