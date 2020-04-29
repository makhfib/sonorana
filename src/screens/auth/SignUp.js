import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors'
import Layout from '../../constants/Layout'
import { TextInput } from 'react-native-gesture-handler';
import ActionButton from '../../components/ActionButton'
import NavigationBar from '../../components/NavigationBar';

export default class SignUp extends Component {
    render() {
        return (
            <SafeAreaView style={custom.container}>
                <ImageBackground style={[custom.imageBackground]}
                    resizeMode='cover'
                    source={require('../../assets/images/background.png')}
                >
                    <NavigationBar 
                        leftIcon={require('../../assets/icons/navigation/icon-back.png')}
                        leftIconTintColor={textColor}
                        leftIconOnPress={() => this.props.navigation.goBack()}
                        />
                    <View style={custom.titleContainer}>
                        <Image
                            source={require('../../assets/icons/text-logo.png')}
                            style={[custom.title, { height: 50, resizeMode: 'contain' }]}
                        />
                    </View>
                    <View style={custom.formContainer} behavior="padding">
                        <View style={custom.form}>
                            <Text style={custom.inputLabel}>Username</Text>
                            <TextInput
                                style={custom.input}
                                textContentType={'nickname'}
                                selectionColor={textColor}
                            />
                            <View style={custom.separator} />
                            <Text style={custom.inputLabel}>Email</Text>
                            <TextInput
                                style={custom.input}
                                textContentType={'emailAddress'}
                                selectionColor={textColor}
                            />
                            <View style={custom.separator} />
                            <Text style={custom.inputLabel}>Password</Text>
                            <TextInput
                                style={custom.input}
                                secureTextEntry={true}
                                textContentType={'password'}
                                selectionColor={textColor}
                            />
                        </View>
                        <Text style={custom.normalText}>
                            By creating an account, you agree to our
                            <Text
                                style={[{ fontWeight: 'bold' }]}
                                onPress={() => null}
                            > Terms
                            </Text>.
                            Check our
                            <Text
                                style={[{ fontWeight: 'bold' }]}
                                onPress={() => null}
                            > Data Policy
                            </Text> to learn how we use your data.
                            You can opt out anytime.
                        </Text>
                        <ActionButton
                            icon={require('../../assets/icons/icon-logo.png')}
                            text={'Create account'}
                        />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const textColor = Colors.background;
const formColor = '#0E245075'

const custom = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        paddingHorizontal: Layout.paddingHorizontal,
        justifyContent: 'center',
    },
    titleContainer: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        height: 100,
        marginBottom: 25,
    },
    title: {
        tintColor: textColor
    },
    formContainer: {

    },
    form: {
        backgroundColor: formColor,
        opacity: 1,
        height: 180,
        borderRadius: 4,
    },
    inputLabel: {
        marginTop: 5,
        color: textColor,
        paddingLeft: 10,
    },
    input: {
        color: textColor,
        fontSize: 14,
        height: 35,
        paddingLeft: 10,
    },
    normalText: {
        color: textColor,
        marginTop: 10,
        paddingHorizontal: 10,
        backgroundColor: formColor,
        borderRadius: 5
    },
    separator: {
        height: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.notwhite,
    },
});