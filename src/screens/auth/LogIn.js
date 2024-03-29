import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, TextInput, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, layout } from '../../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { signIn, reset } from '../../modules/Auth/actions'
import FloatingActivityIndicator from '../../components/FloatingActivityIndicator';
import FloatingMessage from '../../components/FloatingMessage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ThemeColors } from 'react-navigation';

class LogIn extends Component {

    state = {
        hidePassword: true,
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

    _handleHidePassword() {
        this.setState({ hidePassword: !this.state.hidePassword })
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
                <KeyboardAwareScrollView
                    contentContainerStyle={styles.container}
                >
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
                            {
                                this.props.error
                                    ? <FloatingMessage
                                        errorMessage={this.props.errorMessage}
                                        onCancel={() => this.props.reset()}
                                        style={{
                                            backgroundColor: colors.red
                                        }}
                                    />
                                    : <></>
                            }
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
                                    secureTextEntry={this.state.hidePassword}
                                    style={[styles.input, {
                                        paddingRight: layout.paddingHorizontal,
                                    }]}
                                    onChangeText={(text) => this._onChangeText(text, 'password')}
                                />
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => this._handleHidePassword()}
                                >
                                    <Image
                                        style={styles.inputIcon}
                                        source={
                                            this.state.hidePassword 
                                            ? require('../../assets/icons/appearance.png')
                                            : require('../../assets/icons/hide.png')

                                        }
                                    />
                                </TouchableOpacity>
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
                                        CREATE ACCOUNT
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        {
                            this.props.loading
                                ? <FloatingActivityIndicator
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
        marginBottom: layout.paddingHorizontal
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: layout.inputContainerHeight,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: layout.paddingHorizontal,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    loginContainer: {
        height: layout.inputContainerHeight,
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
        tintColor: 'white',
        alignSelf: 'center'
    },
    alternativesContainer: {
        flex: 1,
        minHeight: 100,
        justifyContent: 'space-around'
    },
    forgotContainer: {
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center',
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