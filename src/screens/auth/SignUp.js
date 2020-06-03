import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, TextInput, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, layout } from '../../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default class SignUp extends Component {

    _handleSignUp() {
        console.log('Hello sign up!')
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
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder={'Username'}
                                placeholderTextColor={colors.tint}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder={'Email'}
                                placeholderTextColor={colors.tint}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputContainer}>
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
                        <LinearGradient
                            colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            style={{ height: 48, width: 200, alignItems: 'center', justifyContent: 'center', width: 200 }}
                        >
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
                        </LinearGradient>
                        
                    </View>
                    <View
                        style={styles.alternativesContainer}
                    >
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.loginContainer}
                            onPress={() => this._handleSignUp()}
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
        borderBottomWidth: 3,
        borderBottomColor: 'rgba(0,0,0,0.3)'
    },
    signupContainer: {
        height: 50,
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.3)',
    },
    signupText: {
        fontWeight: 'bold',
        color: colors.pink,
        textAlign: 'center',
    },
    input: {
        flex: 1,
        color: colors.tint,
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
        justifyContent: 'center',
    },
    loginContainer: {
        height: 50,
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