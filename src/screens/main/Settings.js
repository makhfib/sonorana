import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../constants/Colors'
import NavigationBar from '../../components/NavigationBar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { custom } from './css/Settings.css'
import { connect } from 'react-redux'
import { signOut } from '../../modules/Auth/actions'
import PropTypes from 'prop-types'

class Settings extends Component {

    _handleOptions(option) {
        const {
            navigation,
            signOut
        } = this.props;

        if (option !== 'Log Out') {
            navigation.navigate(option)
        } else {
            console.log('Logged Out')
            signOut(navigation)
        }
        
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
                <NavigationBar
                    title={'Settings'}

                    leftIcon={require('../../assets/icons/bold/arrow-left.png')}
                    leftIconTintColor={Colors.tint}
                    leftIconOnPress={() => this.props.navigation.goBack()}
                />
                <View style={custom.container}>
                    <TouchableOpacity
                        onPress={() => this._handleOptions('Account')}
                    >
                        <View style={custom.optionContainer}>
                            <Image
                                source={require('../../assets/icons/regular/profile.png')}
                                style={custom.optionIcon}
                            />
                            <Text style={custom.optionText}>
                                Account
                        </Text>
                            <Image
                                source={require('../../assets/icons/regular/arrow-right.png')}
                                style={custom.optionArrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleOptions('Notifications')}
                    >
                        <View style={custom.optionContainer}>
                            <Image
                                source={require('../../assets/icons/regular/notifications.png')}
                                style={custom.optionIcon}
                            />
                            <Text style={custom.optionText}>
                                Notifications
                        </Text>
                            <Image
                                source={require('../../assets/icons/regular/arrow-right.png')}
                                style={custom.optionArrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleOptions('Appearance')}
                    >
                        <View style={custom.optionContainer}>
                            <Image
                                source={require('../../assets/icons/regular/eye.png')}
                                style={custom.optionIcon}
                            />
                            <Text style={custom.optionText}>
                                Appearance
                        </Text>
                            <Image
                                source={require('../../assets/icons/regular/arrow-right.png')}
                                style={custom.optionArrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleOptions('Privacy & Security')}
                    >
                        <View style={custom.optionContainer}>
                            <Image
                                source={require('../../assets/icons/regular/privacy.png')}
                                style={custom.optionIcon}
                            />
                            <Text style={custom.optionText}>
                                {'Privacy & Security'}
                            </Text>
                            <Image
                                source={require('../../assets/icons/regular/arrow-right.png')}
                                style={custom.optionArrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleOptions('About')}
                    >
                        <View style={custom.optionContainer}>
                            <Image
                                source={require('../../assets/icons/regular/info.png')}
                                style={custom.optionIcon}
                            />
                            <Text style={custom.optionText}>
                                About
                        </Text>
                            <Image
                                source={require('../../assets/icons/regular/arrow-right.png')}
                                style={custom.optionArrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleOptions('Log Out')}
                    >
                        <View style={custom.optionContainer}>
                            <Image
                                source={require('../../assets/icons/regular/logout.png')}
                                style={[custom.optionIcon, custom.destructiveActionIcon]}
                            />
                            <Text style={[custom.optionText, custom.destructiveActionText]}>
                                Log Out
                        </Text>
                            <Image
                                source={require('../../assets/icons/regular/arrow-right.png')}
                                style={[custom.optionArrow, custom.destructiveActionIcon]}
                            />
                        </View>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        )
    }
}

Settings.propTypes = {
    //user: PropTypes.object,
}

export default connect(null, { signOut })(Settings)