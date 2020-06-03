import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../components/NavigationBar'
import { colors, layout } from '../../constants/Styles';
import { LinearGradient } from 'expo-linear-gradient';

export default class ForgotPassword extends Component {

    _handleContinue() {
        this.props.navigation.navigate('Auth', {
            screen: 'ConfirmForgotPassword'
        })
    }

    render() {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: colors.safearea
                }}
            >
                <NavigationBar
                    leftIconImage={require('../../assets/icons/left_arrow.png')}
                    leftIconOnPress={() => this.props.navigation.goBack()}
                />
                <View
                    style={{
                        flex: 1,
                        paddingTop: 20,
                        paddingHorizontal: layout.paddingHorizontal,
                        backgroundColor: colors.background
                    }}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            marginBottom: 10,
                        }}
                    >
                        Reset Password
                    </Text>
                    <Text
                        style={{
                            marginBottom: 10,
                        }}
                    >
                        Enter your username or recovery email
                    </Text>

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
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    gradientContainer: {
        height: 50,
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
        height: 50,
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