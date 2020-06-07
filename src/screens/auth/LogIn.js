import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, TextInput, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, layout } from '../../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { signIn, reset } from '../../modules/Auth/actions'
import CustomActivityIndicator from '../../components/CustomActivityIndicator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class LogIn extends Component {

    state = {
        username: '',
        password: '',
    }

    _onChangeText = (text, field) => {
        switch (field) {
            case 'username':
                this.setState({
                    username: text,
                })
                break
            case 'password':
                this.setState({
                    password: text,
                })
                break
            default:
                break
        }
    }

    _handleLogIn() {
        const { username, password } = this.state
        this.props.signIn(username, password, this.props.navigation)
    }

    _handleForgotPassword() {
        this.props.navigation.navigate('Auth', {
            screen: 'ForgotPassword'
        })
        this.props.reset()
    }

    _handleSignUp() {
        this.props.navigation.navigate('Auth', {
            screen: 'SignUp'
        })
        this.props.reset()
    }

    render() {
        return (
            <SafeAreaView style={styles.safearea}>
                <KeyboardAwareScrollView contentContainerStyle={styles.container}>
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
                                    onChangeText={(text) => this._onChangeText(text, 'username')}
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
                                    onChangeText={(text) => this._onChangeText(text, 'password')}
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
                                    CREATE ACCOUNT
                            </Text>
                            </TouchableOpacity>
                        </View>
                        {
                            this.props.loading
                                ? <CustomActivityIndicator
                                    loading={this.props.loading}
                                />
                                : <></>
                        }
                </ImageBackground>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: colors.safearea
    },
    container: {
        flex: 1,
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
        flex: 2,
        alignItems: 'stretch',
        marginHorizontal: layout.paddingHorizontal,
    },
    inputContainer: {
        flexDirection: 'row',
        height: layout.inputContainerHeight,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: layout.paddingHorizontal,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    loginContainer: {
        height: layout.inputContainerHeight,
        marginBottom: 50,
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
        color: colors.lightgray,
    },
    inputIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        tintColor: colors.background,
        alignSelf: 'center'
    },
    forgotContainer: {
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 50,
    },
    forgotText: {
        fontWeight: 'bold',
        color: colors.background,
    },
    signupContainer: {
        height: layout.inputContainerHeight,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
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

LogIn.propTypes = {

}


const mapStateToProps = (state) => ({
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
    loading: state.auth.loading
})

const mapDispatchToProps = {
    signIn,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)