import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../components/NavigationBar'
import Separator from '../../components/Separator'
import { colors, layout } from '../../constants/Styles'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { signOut, reset } from '../../modules/Auth/actions'

class Settings extends React.Component {

    _handleBack() {
        this.props.navigation.goBack()
    }

    _handleLogOut() {
        this.props.signOut(this.props.navigation)
    }

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: colors.safearea
            }}>
                <NavigationBar
                    title={'Settings'}
                    leftIconOnPress={() => this._handleBack()}
                    leftIconImage={require('../../assets/icons/left_arrow.png')}
                />
                <Separator />
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => this._handleLogOut()}
                    style={{
                        height: layout.inputContainerHeight,
                        paddingHorizontal: layout.paddingHorizontal,
                        backgroundColor: colors.background,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        style={{
                            height: 40,
                            width: 40,
                            tintColor: colors.red,
                        }}
                        source={require('../../assets/icons/poweroff.png')}
                    />
                    <Text
                        style={{
                            flex: 1,
                            marginHorizontal: 10,
                            fontWeight: 'bold',
                            color: colors.red,
                        }}
                    >
                        Log Out
                    </Text>
                    <Image
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: colors.red,
                        }}
                        source={require('../../assets/icons/right_arrow.png')}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

Settings.propTypes = {
    
}


const mapStateToProps = (state) => ({
    error: state.auth.error,
    errorMessage: state.auth.errorMessage
})

const mapDispatchToProps = {
    signOut,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)