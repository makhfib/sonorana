import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors'
import { textColor, custom } from './css/ResetPassword.css'
import NavigationBar from '../../components/NavigationBar';
import ActionButton from '../../components/ActionButton';

export default class ResetPassword extends Component {
    render() {
        return (
            <SafeAreaView style={custom.container}>
                <View style={custom.subcontainer}>
                    <NavigationBar
                        leftIcon={require('../../assets/icons/navigation/back.png')}
                        leftIconTintColor={Colors.tint}
                        leftIconOnPress={() => this.props.navigation.goBack()}
                    />
                    <View style={custom.content}>
                        <Text style={custom.title}>
                            Reset password
                        </Text>
                        <Text style={custom.normalText}>
                            To reset your password, enter the username or email you use to log in.
                        </Text>
                        <View style={custom.form}>
                            <Text style={custom.inputLabel}>Username or email</Text>
                            <TextInput
                                style={custom.input}
                                textContentType={'emailAddress'}
                                selectionColor={textColor}
                            />
                            <View style={[custom.buttonContainer, {alignSelf: 'flex-start'}]}>
                                 <ActionButton 
                                    text={'Send code'}
                                    onPress={() => this.props.navigation.navigate('Auth', { screen: 'ConfirmResetPassword' })}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
