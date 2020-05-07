import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors'
import { textColor, custom } from './css/ConfirmSignUp.css'
import NavigationBar from '../../components/NavigationBar';
import ActionButton from '../../components/ActionButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { confirmSignUp, resendCode, reset } from '../../modules/Auth/actions'
import PropTypes from 'prop-types'

class ConfirmSignUp extends Component {

    state = {
        code: '',
    }

    _handleInput(field, input) {
        switch (field) {
            case 'Code':
                this.setState({ code: input })
                break
            default:
                break
        }
    }

    _handleConfirmSignUp() {
        const { username, password } = this.props.route.params;
        const { code } = this.state;
        this.props.confirmSignUp(username, password, code, this.props.navigation);
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
                    <NavigationBar
                        leftIcon={require('../../assets/icons/bold/arrow-left.png')}
                        leftIconTintColor={Colors.tint}
                        leftIconOnPress={() => this._handleGoBack()}
                    />
                    <View style={custom.content}>
                        <Text style={custom.title}>
                            Verify account
                        </Text>
                        <Text style={custom.normalText}>
                            Enter the verification code we sent to
                            <Text style={{ color: Colors.tint }}>
                                {} {this.props.route.params.email}
                            </Text>
                            . If you don't see it, check your spam folder.
                        </Text>
                        <View style={custom.errorContainer}>
                            {
                                error &&
                                <Text style={custom.error}>
                                    {' *'} {errorMessage} {' '}
                                </Text>
                            }
                        </View>
                        <View style={custom.form}>
                            <Text style={custom.inputLabel}>Code</Text>
                            <TextInput
                                style={custom.input}
                                textContentType={'oneTimeCode'}
                                selectionColor={textColor}
                                onChangeText={(text) => this._handleInput('Code', text)}
                            />
                            <View style={[custom.buttonContainer]}>
                                <ActionButton
                                    text={'Confirm'}
                                    onPress={() => this._handleConfirmSignUp()}
                                />
                            </View>
                            <TouchableOpacity
                                onPress={() => null}
                            >
                                <Text style={[{ color: Colors.tint }]}>
                                    Resend code
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

ConfirmSignUp.propTypes = {
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
}

const mapStateToProps = state => ({
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
});

const mapDispatchToProps = {
    confirmSignUp,
    resendCode,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSignUp)
