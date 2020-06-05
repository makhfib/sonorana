import React, { Component } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import { colors, layout } from '../../constants/Styles'
import NavigationBar from '../../components/NavigationBar'
import Separator from '../../components/Separator';

export default class Profile extends Component {

    _props() {

    }

    _handleBack() {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <>
                <NavigationBar
                    leftIconOnPress={() => this._handleBack()}
                    leftIconImage={require('../../assets/icons/left_arrow.png')}
                    title={'makhfib'}
                />
                <Separator />
                <View
                    style={{
                        height: 90 + 75 / 2,
                        justifyContent: 'flex-end',
                        paddingHorizontal: layout.paddingHorizontal
                    }}
                >
                    <ImageBackground
                        style={{
                            top: 0,
                            position: 'absolute',
                            height: 90,
                            width: layout.deviceWidth,
                        }}
                        source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpaper.nu%2Fwp-content%2Fuploads%2F2017%2F03%2Fvalley-16.jpg&f=1&nofb=1' }}
                    >
                    </ImageBackground>
                    <View
                        style={{
                            height: 75,
                            width: 75,
                            borderRadius: 75 / 2,
                            backgroundColor: colors.background,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            style={{
                                height: 70,
                                width: 70,
                                borderRadius: 75 / 2,
                                backgroundColor: colors.background,
                            }}
                            source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQEy3CR_2OAw6Q/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=_YkGI9DUd9QiWFE3xLpVcif1KqOsaHnvZxmgU8WxUDw' }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        paddingHorizontal: layout.paddingHorizontal,
                        paddingVertical: layout.paddingHorizontal/2,
                        backgroundColor: 'lightblue'
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}
                    >
                        Mohammed Makhfi
                    </Text>
                    <Text>
                        
                    </Text>
                </View>
            </>
        )
    }
}
