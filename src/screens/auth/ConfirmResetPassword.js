import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors'
import { textColor, custom } from './css/ConfirmResetPassword.css'
import NavigationBar from '../../components/NavigationBar';
import ActionButton from '../../components/ActionButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ConfirmResetPassword extends Component {
    render() {
        return (
            <SafeAreaView style={custom.container}>
                <View style={custom.subcontainer}>
                    <NavigationBar
                        leftIcon={require('../../assets/icons/bold/arrow-left.png')}
                        leftIconTintColor={Colors.tint}
                        leftIconOnPress={() => this.props.navigation.goBack()}
                    />
                    <View style={custom.content}>
                        <Text style={custom.title}>
                            Reset password
                        </Text>
                        <Text style={custom.normalText}>
                            Enter the verification code we sent to
                            <Text style={{color: Colors.tint}}>
                                {' '} makhfiboulaich@gmail.com
                            </Text>
                            . If you don't see it, check your spam folder.
                        </Text>
                        <View style={custom.form}>
                            <Text style={custom.inputLabel}>Code</Text>
                            <TextInput
                                style={custom.input}
                                textContentType={'oneTimeCode'}
                                selectionColor={textColor}
                            />
                            <View style={custom.separator} />
                            <Text style={custom.inputLabel}>New password</Text>
                            <TextInput
                                style={custom.input}
                                textContentType={'password'}
                                secureTextEntry={true}
                                selectionColor={textColor}
                            />
                            <View style={[custom.buttonContainer]}>
                                 <ActionButton 
                                    text={'Confirm'}
                                    onPress={() => null}
                                />
                            </View>
                            <TouchableOpacity
                                onPress={() => null}
                            >
                                <Text style={[custom.normalText, {color: Colors.tint}]}>
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
