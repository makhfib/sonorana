import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../constants/Colors'
import { textColor, custom } from './css/ResetPassword.css'
import NavigationBar from '../../components/NavigationBar';
import ActionButton from '../../components/ActionButton';
import { connect } from 'react-redux'
import { forgotPassword, reset } from '../../modules/Auth/actions'
import PropTypes from 'prop-types'

class ResetPassword extends Component {

    state = {
        username: '',
    }

    _handleInput(field, input) {
        switch (field) {
            case 'Username':
                this.setState({ username: input })
                break
            default:
                break
        }
    }

    _handleResetPassword() {
        const { username } = this.state;
        this.props.forgotPassword(username, this.props.navigation);
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
                    <KeyboardAwareScrollView
                        scrollEnabled={true}
                        contentContainerStyle={{ flex: 1 }}
                    >
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
                                To reset your password, enter the username or email you use to log in.
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
                                <Text style={custom.inputLabel}>Username or email</Text>
                                <TextInput
                                    style={custom.input}
                                    textContentType={'emailAddress'}
                                    selectionColor={textColor}
                                    onChangeText={(text) => this._handleInput('Username', text)}
                                />
                                <View style={[custom.buttonContainer, { alignSelf: 'flex-start' }]}>
                                    <ActionButton
                                        text={'Send code'}
                                        onPress={() => this._handleResetPassword()}
                                    />
                                </View>
                            </View>
                        </View>

                    </KeyboardAwareScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

ResetPassword.propTypes = {
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
}

const mapStateToProps = state => ({
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
});

const mapDispatchToProps = {
    forgotPassword,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)