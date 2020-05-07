import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../constants/Colors'
import { textColor, custom } from './css/ConfirmResetPassword.css'
import NavigationBar from '../../components/NavigationBar';
import ActionButton from '../../components/ActionButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { forgotPasswordSubmit, resendCode, reset } from '../../modules/Auth/actions'
import PropTypes from 'prop-types'

class ConfirmResetPassword extends Component {

    state = {
        code: '',
        password: '',
    }

    _handleInput(field, input) {
        switch (field) {
            case 'Code':
                this.setState({ code: input })
                break
            case 'New Password':
                this.setState({ password: input })
                break
            default:
                break
        }
    }

    _handleResetPassword() {
        const { username } = this.props.route.params;
        const { code, password } = this.state;
        this.props.forgotPasswordSubmit(username, code, password, this.props.navigation);
    }

    _handleResendCode() {
        const { username } = this.props.route.params;
        this.props.resendCode(username)
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
                <View style={custom.subcontainer}>
                    <KeyboardAwareScrollView>
                        <NavigationBar
                        leftIcon={require('../../assets/icons/bold/arrow-left.png')}
                        leftIconTintColor={Colors.tint}
                        leftIconOnPress={() => this._handleGoBack()}
                    />
                    <View style={custom.content}>
                        <Text style={custom.title}>
                            Reset password
                        </Text>
                        <Text style={custom.normalText}>
                            Enter the verification code we sent to your email.
                            If you don't see it, check your spam folder.
                        </Text>
                        <View style={custom.errorContainer}>
                            {
                                error &&
                                <Text style={custom.error}>
                                    {' *'} {errorMessage} {' '}
                                </Text>
                            }
                        </View>
                        <View style={[custom.form]}>
                            <Text style={custom.inputLabel}>Code</Text>
                            <View style={[custom.field, { alignItems: 'flex-start' }]}>
                                <TextInput
                                    style={[custom.input]}
                                    selectionColor={Colors.antagonist}
                                    selectionColor={textColor}
                                    textContentType={'oneTimeCode'}
                                    onChangeText={(text) => this._handleInput('Code', text)}
                                />
                            </View>
                        </View>
                        <View style={[custom.form]}>
                            <Text style={custom.inputLabel}>New password</Text>
                            <View style={[custom.field, { alignItems: 'flex-start' }]}>
                                <TextInput
                                    style={[custom.input]}
                                    selectionColor={Colors.antagonist}
                                    selectionColor={textColor}
                                    textContentType={'password'}
                                    secureTextEntry={true}
                                    onChangeText={(text) => this._handleInput('New Password', text)}
                                />
                            </View>
                        </View>
                        <View style={[custom.buttonContainer]}>
                            <ActionButton
                                text={'Confirm'}
                                onPress={() => this._handleResetPassword()}
                            />
                        </View>
                    </View>
                
                    </KeyboardAwareScrollView>
                    </View>
            </SafeAreaView>
        )
    }
}

ConfirmResetPassword.propTypes = {
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
}

const mapStateToProps = state => ({
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
});

const mapDispatchToProps = {
    forgotPasswordSubmit,
    resendCode,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmResetPassword)