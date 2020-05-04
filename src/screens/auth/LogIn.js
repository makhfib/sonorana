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

class LogIn extends Component {

    state ={
        username: '',
        password: '',
    }

    _handleInput(field, input) {
        switch(field) {
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
                        contentContainerStyle={{flex:1, justifyContent: 'center'}}
                    >
                        <View style={custom.titleContainer}>
                            <Image
                                source={require('../../assets/brand/text.png')}
                                style={[custom.title, { height: 50, resizeMode: 'contain' }]}
                            />
                        </View>
                        { error && <Text style={{color: 'white', backgroundColor:'#ff0000', marginBottom: 10, borderRadius: 5,}}>{' '} {errorMessage} {' '}</Text> }
                        <View style={custom.formContainer} behavior="padding">
                            <View style={custom.form}>
                                <Text style={custom.inputLabel}>Username or email</Text>
                                <TextInput
                                    style={custom.input}
                                    textContentType={'emailAddress'}
                                    selectionColor={textColor}
                                    onChangeText={(text) => this._handleInput('Username', text)}
                                />
                                <View style={custom.separator} />
                                <Text style={custom.inputLabel}>Password</Text>
                                <TextInput
                                    style={custom.input}
                                    secureTextEntry={true}
                                    textContentType={'password'}
                                    selectionColor={textColor}
                                    onChangeText={(text) => this._handleInput('Password', text)}
                                />
                            </View>
                            <TouchableOpacity
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
                            <View style={custom.alternativeContainer}>
                                <Text
                                    style={custom.normalText}
                                    onPress={() => this._handleNavigation('SignUp')}
                                >
                                    Haven't got an account yet?
                                <Text
                                        style={[{ fontWeight: 'bold' }]}
                                        onPress={() => this._handleNavigation('SignUp')}
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

LogIn.propTypes = {
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
}

const mapStateToProps = state => ({
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
});

const mapDispatchToProps = {
    signIn,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)