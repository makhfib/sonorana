import React, { Component } from 'react'
import { Image, Text, View, StyleSheet, ImageBackground } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors'
import { Size } from '../../constants/StyledText'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class LogIn extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}
            onLayout={(event) => {
                var {height} = event.nativeEvent.layout;
                this.setState({height})
             }}>
                <ImageBackground style={ styles.imageBackground } 
                    resizeMode='cover' 
                    source={require('../../assets/images/background.png')}
                >
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Siren</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <View style={styles.form}>
                            <Text style={styles.inputLabel}>Username or email</Text>
                            <TextInput
                                style={styles.input} 
                                textContentType={'emailAddress'}
                                selectionColor={Colors.notwhite}
                            />
                            <View style={styles.separator} />
                            <Text style={styles.inputLabel}>Password</Text>
                            <TextInput
                                style={styles.input} 
                                secureTextEntry={true}
                                textContentType={'password'}
                                selectionColor={Colors.notwhite}
                            />
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.clickableText}>Forgot your password?</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Image 
                                source={require('../../assets/icons/icon-logo.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.textButton}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.alternativeContainer}>
                        <Text style={styles.normalText}>Haven't got an account yet?</Text>
                        <TouchableOpacity>
                            <Text style={styles.clickableText}>Sign up</Text>
                        </TouchableOpacity>
                        
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        flex: 2,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    formContainer: {

    },
    form: {
        backgroundColor: Colors.inputBackground,
        opacity: 1,
        height: 120,
        borderRadius: 4,
    },
    inputLabel: {
        marginTop: 5,
        color: Colors.notwhite,
        paddingLeft: 10,
    },
    input: {
        color: Colors.notwhite,
        fontSize: Size.normal,
        height: 35,
        paddingLeft: 10,
    },
    clickableText: {
        color: Colors.background,
        marginTop: 10,
        paddingLeft: 10,
    },
    normalText: {
        color: Colors.background,
        marginTop: 10,
        paddingLeft: 10,
    },
    separator: {
        height: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.notwhite,
    },
    buttonContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 40,
        paddingHorizontal: 30,
        backgroundColor: Colors.tint,
        borderRadius: 100,
        alignItems: 'center',
        flexDirection: 'row',
    },
    textButton: {
        color: Colors.notwhite,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    alternativeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: Colors.background
    },
    imageBackground: {
        flex: 1,
        paddingHorizontal: 20,
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: Colors.notwhite,
        resizeMode: 'contain',
    }   
});