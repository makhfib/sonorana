import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../components/NavigationBar'
import { colors, layout } from '../../constants/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { forgotPassword, reset } from '../../modules/Auth/actions'
import FloatingActivityIndicator from '../../components/FloatingActivityIndicator';
import FloatingMessage from '../../components/FloatingMessage'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class ForgotPassword extends Component {

    state = {
        username: ''
    }

    _onChangeText = (text, field) => {
        switch (field) {
            case 'username':
                this.setState({
                    username: text,
                })
                break
            default:
                break
        }
    }

    _handleContinue() {
        const { username } = this.state
        this.props.forgotPassword(username, this.props.navigation)
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
                            Reset Password
                    </Text>
                        <Text
                            style={styles.text}
                        >
                            Enter your username or recovery email
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
                                    placeholder={'Username or email'}
                                    placeholderTextColor={colors.tint}
                                    style={styles.input}
                                    onChangeText={(text) => this._onChangeText(text, 'username')}
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
                                onPress={() => this._handleContinue()}
                            >
                                <Text
                                    style={styles.buttonText}
                                >
                                    CONTINUE
                            </Text>
                            </TouchableOpacity>
                        </LinearGradient>
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
})

ForgotPassword.propTypes = {

}


const mapStateToProps = (state) => ({
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
    loading: state.auth.loading
})

const mapDispatchToProps = {
    forgotPassword,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)