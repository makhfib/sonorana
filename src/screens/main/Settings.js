import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../constants/Colors'
import NavigationBar from '../../components/NavigationBar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { custom } from './css/Settings.css'

export default class Settings extends Component {

    _handleOptions(option) {
        const {
            navigation
        } = this.props;

        switch (option) {
            case 'Accounts':
                navigation.navigate('')
                break;
            case 'Notifications':
                break;
            case 'Appearance':
                break;
            case 'Privacy&Security':
                break;
            case 'About':
                break;
            case 'LogOut':
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
                <NavigationBar
                    title={'Settings'}

                    leftIcon={require('../../assets/icons/navigation/back.png')}
                    leftIconTintColor={Colors.tint}
                    leftIconOnPress={() => this.props.navigation.goBack()}
                />
                <View style={custom.container}>
                    <TouchableOpacity
                        onPress={null}
                    >
                        <View style={custom.optionContainer}>
                            <Image
                                source={require('../../assets/icons/navigation/profile.png')}
                                style={custom.optionIcon}
                            />
                            <Text style={custom.optionText}>
                                Accounts
                        </Text>
                            <Image
                                source={require('../../assets/icons/navigation/arrow.png')}
                                style={custom.optionArrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={null}
                    >
                        <View style={custom.optionContainer}>
                            <Image
                                source={require('../../assets/icons/navigation/notifications.png')}
                                style={custom.optionIcon}
                            />
                            <Text style={custom.optionText}>
                                Notifications
                        </Text>
                            <Image
                                source={require('../../assets/icons/navigation/arrow.png')}
                                style={custom.optionArrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={null}
                    >
                        <View style={custom.optionContainer}>
                            <Image
                                source={require('../../assets/icons/eye.png')}
                                style={custom.optionIcon}
                            />
                            <Text style={custom.optionText}>
                                Appearance
                        </Text>
                            <Image
                                source={require('../../assets/icons/navigation/arrow.png')}
                                style={custom.optionArrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={null}
                    >
                        <View style={custom.optionContainer}>
                            <Image
                                source={require('../../assets/icons/lock.png')}
                                style={custom.optionIcon}
                            />
                            <Text style={custom.optionText}>
                                {'Privacy & Security'}
                            </Text>
                            <Image
                                source={require('../../assets/icons/navigation/arrow.png')}
                                style={custom.optionArrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={null}
                    >
                        <View style={custom.optionContainer}>
                            <Image
                                source={require('../../assets/icons/info.png')}
                                style={custom.optionIcon}
                            />
                            <Text style={custom.optionText}>
                                About
                        </Text>
                            <Image
                                source={require('../../assets/icons/navigation/arrow.png')}
                                style={custom.optionArrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={null}
                    >
                        <View style={custom.optionContainer}>
                            <Image
                                source={require('../../assets/icons/navigation/logout.png')}
                                style={[custom.optionIcon, custom.destructiveAction]}
                            />
                            <Text style={[custom.optionText, custom.destructiveAction]}>
                                Log Out
                        </Text>
                            <Image
                                source={require('../../assets/icons/navigation/arrow.png')}
                                style={[custom.optionArrow, custom.destructiveAction]}
                            />
                        </View>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        )
    }
}