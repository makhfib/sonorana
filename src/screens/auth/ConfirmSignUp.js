import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../components/NavigationBar'
import { colors, layout } from '../../constants/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { confirmSignUp, resendCode, reset } from '../../modules/Auth/actions'
import FloatingActivityIndicator from '../../components/FloatingActivityIndicator';
import FloatingMessage from '../../components/FloatingMessage'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class ConfirmSignUp extends Component {

    state = {
        code: '',
    }

    _onChangeText = (text, field) => {
        switch (field) {
            case 'code':
                this.setState({
                    code: text,
                })
                break
            default:
                break
        }
    }

    _handleConfirm() {
        const { code } = this.state
        this.props.confirmSignUp(
            this.props.route.params.username,
            this.props.route.params.password,
            code,
            this.props.navigation
        )
    }

    _handleResend() {
        this.props.resendCode(this.props.route.params.username)
    }

    _handleBack() {
        this.props.navigation.goBack()
        this.props.reset()
    }

    render() {
        return (
            <SafeAreaView
                style={styles.safearea}
            >
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
                    <NavigationBar
                        leftIconImage={require('../../assets/icons/left_arrow.png')}
                        leftIconOnPress={() => this._handleBack()}
                    />
                    <View
                        style={styles.contentContainer}
                    >
                        <Text
                            style={styles.title}
                        >
                            Verify account
                    </Text>
                        <Text
                            style={styles.text}
                        >
                            Enter the verification code we sent to your email
                    </Text>
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
                        <LinearGradient
                            colors={[colors.pink, colors.orange, colors.yellow]}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            style={styles.gradientContainer}
                        >

                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder={'Code'}
                                    placeholderTextColor={colors.tint}
                                    style={styles.input}
                                    onChangeText={(text) => this._onChangeText(text, 'code')}
                                />
                            </View>
                        </LinearGradient>

                        <LinearGradient
                            colors={[colors.yellow, colors.orange, colors.pink]}
                            start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }}
                            style={styles.buttonContainer}
                        >
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => this._handleConfirm()}
                            >
                                <Text
                                    style={styles.buttonText}
                                >
                                    VERIFY ACCOUNT
                            </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <View
                            style={styles.alternativeContainer}
                        >
                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.alternativeButtonContainer}
                                onPress={() => this._handleResend()}
                            >
                                <Text
                                    style={styles.alternativeButtonText}
                                >
                                    RESEND CODE
                            </Text>
                            </TouchableOpacity>
                        </View>
                        {
                            this.props.loading
                                ? <FloatingActivityIndicator
                                    loading={this.props.loading}
                                />
                                : <></>
                        }
                    </View>
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
    contentContainer: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: layout.paddingHorizontal,
        backgroundColor: colors.background
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        marginBottom: 10,
    },
    gradientContainer: {
        height: layout.inputContainerHeight,
        marginBottom: 10,
    },
    inputContainer: {
        height: 46,
        flexDirection: 'row',
        paddingHorizontal: layout.paddingHorizontal - 10,
        backgroundColor: colors.background
    },
    input: {
        flex: 1,
        color: colors.tint,
    },
    inputIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        tintColor: colors.tint,
        alignSelf: 'center'
    },
    buttonContainer: {
        height: layout.inputContainerHeight,
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        paddingVertical: 13,
        borderRadius: 3,
        overflow: 'hidden',
        marginHorizontal: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.pink,
        backgroundColor: colors.background,
    },
    alternativeContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    alternativeButtonContainer: {
        height: layout.inputContainerHeight,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: layout.paddingHorizontal,
        alignContent: 'center',
    },
    alternativeButtonText: {
        flex: 1,
        fontWeight: 'bold',
        color: colors.blue,
        textAlign: 'center',
    },
})

ConfirmSignUp.propTypes = {

}


const mapStateToProps = (state) => ({
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
    loading: state.auth.loading
})

const mapDispatchToProps = {
    confirmSignUp,
    resendCode,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSignUp)