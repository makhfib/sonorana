import React, { Component } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import { textColor, custom } from './css/SignUp.css'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import ActionButton from '../../components/ActionButton'
import NavigationBar from '../../components/NavigationBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux'
import { signUp, reset } from '../../modules/Auth/actions'
import PropTypes from 'prop-types'
import { Colors } from '../../constants/Colors'

class SignUp extends Component {

    state = {
        email: '',
        username: '',
        password: '',
    }

    _handleInput(field, input) {
        switch (field) {
            case 'Email':
                this.setState({ email: input })
                break
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

    _handleSignUp() {
        const { email, username, password } = this.state;
        this.props.signUp(email, username, password, this.props.navigation);
    }

    _handleGoBack() {
        this.props.reset() // auth reducer resets errors
        this.props.navigation.goBack()
    }

    render() {
        const {
            error,
            errorMessage
        } = this.props;

        return (
            <SafeAreaView style={custom.container}>
                <ImageBackground style={[custom.imageBackground]}
                    resizeMode='cover'
                    source={require('../../assets/images/background.png')}
                >
                    <NavigationBar
                        leftIcon={require('../../assets/icons/bold/arrow-left.png')}
                        leftIconTintColor={textColor}
                        leftIconOnPress={() => this._handleGoBack()}
                    />
                    <KeyboardAwareScrollView
                        scrollEnabled={true}
                        contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
                    >
                        <View
                            style={custom.content}>
                            <View style={custom.titleContainer}>
                                <Image
                                    source={require('../../assets/brand/icon.png')}
                                    style={[custom.title, { height: 100, resizeMode: 'contain', }]}
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
                                    <Text style={custom.inputLabel}>Username</Text>
                                    <View style={custom.field}>
                                        <Image
                                            source={require('../../assets/icons/regular/profile.png')}
                                            style={[custom.fieldIcon, { marginTop: 5 }]}
                                        />
                                        <TextInput
                                            style={custom.input}
                                            textContentType={'nickname'}
                                            selectionColor={textColor}
                                            onChangeText={(text) => this._handleInput('Username', text)}
                                        />
                                    </View>
                                    <View style={custom.separator} />
                                    <Text style={custom.inputLabel}>Email</Text>
                                    <View style={custom.field}>
                                        <Image
                                            source={require('../../assets/icons/regular/email.png')}
                                            style={[custom.fieldIcon, { marginTop: 5 }]}
                                        />
                                        <TextInput
                                            style={custom.input}
                                            textContentType={'emailAddress'}
                                            selectionColor={textColor}
                                            onChangeText={(text) => this._handleInput('Email', text)}
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
                                        icon={require('../../assets/icons/bold/target.png')}
                                        text={'Create account'}
                                        onPress={() => this._handleSignUp()}
                                    />
                                </View>
                            </View>
                        </View>

                    </KeyboardAwareScrollView>

                </ImageBackground>
            </SafeAreaView>
        )
    }
}

SignUp.propTypes = {
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
}

const mapStateToProps = state => ({
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
});

const mapDispatchToProps = {
    signUp,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)