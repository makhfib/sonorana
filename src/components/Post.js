import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import ActionButton from './ActionButton'
import { custom } from './css/Post.css';

export default class Post extends Component {
    render() {
        return (
            <View style={custom.container}>
                <View
                    style={custom.header}>
                    <Image
                        source={{ uri: 'https://nuflux.net/wp-content/uploads/2020/03/20170518183800-gary-vaynerchuk-hero1.jpeg' }}
                        style={custom.photo}
                    />
                    <View style={custom.headerTextContainer}>
                        <Text numberOfLines={1} style={custom.username}>garyvee</Text>
                        <Text numberOfLines={1} style={custom.datetime}>Now</Text>
                    </View>
                    <ActionButton
                        icon={require('../assets/icons/audio/icon-play.png')}
                        text={'00:24'}
                        buttonStyle={custom.playButton}
                        iconStyle={custom.playIcon}
                        textStyle={custom.playText}
                    />
                </View>
                <Text style={custom.description}>
                    I put zero weight into anyone's opinion about me because I know exactly who I am.
                </Text>
                <View style={custom.interactionsContainer}>
                        <ActionButton
                            icon={require('../assets/icons/interaction/icon-heart.png')}
                            text={'Like'}

                            buttonStyle={custom.interactionButton}
                            iconStyle={custom.interactionIcon}
                            textStyle={custom.interactionText}
                        />
                        <ActionButton
                            icon={require('../assets/icons/interaction/icon-comment.png')}
                            text={'Comment'}

                            buttonStyle={custom.interactionButton}
                            iconStyle={custom.interactionIcon}
                            textStyle={custom.interactionText}
                        />
                        <ActionButton
                            icon={require('../assets/icons/interaction/icon-echo.png')}
                            text={'Echo'}
                            
                            buttonStyle={custom.interactionButton}
                            iconStyle={custom.interactionIcon}
                            textStyle={custom.interactionText}
                        />
                        
                </View>
            </View>

        )
    }
}
