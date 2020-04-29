import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors'
import Layout from '../../constants/Layout'
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
                            <View style={{alignSelf: 'flex-start'}}>
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

const textColor = Colors.antagonist;
const formColor = Colors.inputBackground

const custom = StyleSheet.create({
    container: {
        flex: 1,
    },
    subcontainer: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        paddingTop: 40,
        paddingHorizontal: Layout.paddingHorizontal
    },
    title: {
        fontSize: 36,
    },
    normalText: {
        color: textColor,
        marginVertical: 10,
    },
    form: {
        backgroundColor: formColor,
        opacity: 1,
        height: 60,
        borderRadius: 4,
    },
    inputLabel: {
        marginTop: 5,
        color: textColor,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    input: {
        color: textColor,
        fontSize: 14,
        height: 35,
        paddingLeft: 10,
    },
});