import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors'
import { textColor, custom } from './css/ConfirmSignUp.css'
import NavigationBar from '../../components/NavigationBar';
import ActionButton from '../../components/ActionButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ConfirmSignUp extends Component {
    render() {
        return (
            <SafeAreaView style={custom.container}>
                <View style={custom.subcontainer}>
                    <NavigationBar
                        leftIcon={require('../../assets/icons/navigation/icon-back.png')}
                        leftIconTintColor={Colors.tint}
                        leftIconOnPress={() => this.props.navigation.goBack()}
                    />
                    <View style={custom.content}>
                        <Text style={custom.title}>
                            Verify account
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
                            <View style={[custom.buttonContainer]}>
                                 <ActionButton 
                                    text={'Confirm'}
                                    onPress={() => null}
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
