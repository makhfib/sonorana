import React, { Component } from 'react'
import { Image, Text, View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { textColor, custom } from './css/LogIn.css'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ActionButton from '../../components/ActionButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux'
import { signIn, reset } from '../../modules/Auth/actions'
import PropTypes from 'prop-types'
import { Colors } from '../../constants/Colors'

class LogIn extends Component {

    state = {
        username: '',
        password: '',
    }

    _handleInput(field, input) {
        switch (field) {
            case 'Username':
                this.setState({ username: input })
                break
            case 'Password':
                this.setState({ password: input })
                break
            default:
                break
        }
    }

    _handleLogIn() {
        const { username, password } = this.state;
        this.props.signIn(username, password, this.props.navigation);
    }

    _handleNavigation(screen) {
        this.props.reset() // reset Auth state when changing screens
        this.props.navigation.navigate('Auth', { screen: screen })
    }

    render() {
        const {
            error,
            errorMessage
        } = this.props;
        
        return (
            <SafeAreaView style={custom.container}>
                <ImageBackground style={custom.imageBackground}
                    resizeMode='cover'
                    source={require('../../assets/images/background.png')}
                >
                    <KeyboardAwareScrollView
                        scrollEnabled={false}
                        contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
                    >
                        <View style={custom.titleContainer}>
                            <Image
                                source={require('../../assets/brand/text.png')}
                                style={[custom.title, { height: 35, resizeMode: 'contain' }]}
                            />
                        </View>
                        <View style={custom.formContainer} behavior="padding">
                            <View style={custom.errorSpace}>
                                {
                                    error &&
                                    <View style={custom.errorContainer}>
                                        <Image
                                            source={require('../../assets/icons/bold/delete.png')}
                                            style={[custom.fieldIcon]}
                                        />
                                        <Text style={custom.error}>
                                            {''} {errorMessage} {' '}
                                        </Text>
                                    </View>
                                }
                            </View>
                            <View style={custom.form}>
                                <Text style={custom.inputLabel}>Username or email</Text>
                                <View style={custom.field}>
                                    <Image
                                        source={require('../../assets/icons/regular/profile.png')}
                                        style={[custom.fieldIcon, { marginTop: 5 }]}
                                    />
                                    <TextInput
                                        style={custom.input}
                                        textContentType={'emailAddress'}
                                        selectionColor={textColor}
                                        onChangeText={(text) => this._handleInput('Username', text)}
                                    />
                                </View>
                                <View style={custom.separator} />
                                <Text style={custom.inputLabel}>Password</Text>
                                <View style={custom.field}>
                                    <Image
                                        source={require('../../assets/icons/regular/privacy.png')}
                                        style={[custom.fieldIcon, { marginTop: 5 }]}
                                    />
                                    <TextInput
                                        style={custom.input}
                                        secureTextEntry={true}
                                        textContentType={'password'}
                                        selectionColor={textColor}
                                        onChangeText={(text) => this._handleInput('Password', text)}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity
                                activeOpacity={.7}
                                onPress={() => this._handleNavigation('ResetPassword')}
                            >
                                <Text style={custom.normalText}>Forgot your password?</Text>
                            </TouchableOpacity>
                            <View style={custom.buttonContainer}>
                                <ActionButton
                                    icon={require('../../assets/brand/icon.png')}
                                    text={'Log in'}
                                    onPress={() => this._handleLogIn()}
                                />
                            </View>
                            <TouchableOpacity
                                activeOpacity={.7}
                                style={custom.alternativeContainer}
                                onPress={() => this._handleNavigation('SignUp')}
                            >
                                <Text
                                    style={custom.normalText}
                                >
                                    Haven't got an account yet?
                                    <Text
                                        style={[{ fontWeight: 'bold' }]}
                                    >
                                        {' '}Sign up
                                    </Text>
                                </Text>

                            </TouchableOpacity>
                        </View>

                    </KeyboardAwareScrollView>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

LogIn.propTypes = {
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
}

const mapStateToProps = state => ({
    CognitoUser: state.auth.CognitoUser,
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
});

const mapDispatchToProps = {
    signIn,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)