import React, { Component } from 'react'
import { Text, View, Image, Slider, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationBar from '../../components/NavigationBar'
import { Colors } from '../../constants/Colors'
import FollowButton from '../../components/FollowButton'
import ActionButton from '../../components/ActionButton'
import AudioPlayer from '../../components/AudioPlayer'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { custom } from './css/Post.css'
import Layout from '../../constants/Layout'

export default class Post extends Component {
    render() {
        const {
            id,
            photo,
            username,
            name,
            datetime,
            description,
            duration
        } = this.props.route.params;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={custom.container}>
                    <NavigationBar

                        leftIcon={require('../../assets/icons/navigation/back.png')}
                        leftIconTintColor={Colors.tint}
                        leftIconOnPress={() => this.props.navigation.goBack()}

                        rightThirdIcon={require('../../assets/icons/audio/repeat.png')}
                        rightThirdIconTintColor={Colors.default}
                        rightThirdIconOnPress={null}

                        rightSecondIcon={require('../../assets/icons/add-to-playlist.png')}
                        rightSecondIconTintColor={Colors.tint}
                        rightSecondIconOnPress={null}

                        rightIcon={require('../../assets/icons/interaction/more.png')}
                        rightIconTintColor={Colors.tint}
                        rightIconOnPress={null}
                    />
                    <View style={custom.postContainer}>
                        <View style={custom.postHeader}>
                            <View style={{ flex: 1 }}>
                                <TouchableWithoutFeedback 
                                    style={{ flexDirection: 'row' }}
                                    onPress={() => this.props.navigation.navigate('User', {
                                        photo,
                                        name,
                                        username,
                                        following: '10k',
                                        followers: '1m'
                                    })}
                                >
                                    <Image
                                        source={{ uri: photo }}
                                        style={custom.photo}
                                    />
                                    <View style={custom.postHeaderTextContainer}>
                                        <Text style={custom.postAuthor}>
                                            {name}
                                        </Text>
                                        <Text style={custom.postDatetime}>
                                            {username}
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>


                            <FollowButton />
                        </View>

                        <Text style={custom.postDescription}>
                            {description}
                        </Text>
                        <View style={custom.interactionsContainer}>
                            <ActionButton
                                icon={
                                    true
                                        ? require('../../assets/icons/interaction/heart-filled.png')
                                        : require('../../assets/icons/interaction/heart.png')
                                }
                                text={'Like'}
                                buttonStyle={custom.interactionButtonStyle}
                                iconStyle={[{ tintColor: true ? Colors.like : Colors.default }]}
                                textStyle={[{ color: true ? Colors.like : Colors.default }]}
                                onPress={() => null}
                            />
                            <ActionButton
                                icon={require('../../assets/icons/interaction/comment.png')}
                                text={'Comment'}
                                buttonStyle={custom.interactionButtonStyle}
                                iconStyle={{ tintColor: Colors.default }}
                                textStyle={{ color: Colors.default }}
                                onPress={() => null}
                            />
                            <ActionButton
                                icon={require('../../assets/icons/interaction/echo.png')}
                                text={'Echo'}
                                buttonStyle={custom.interactionButtonStyle}
                                iconStyle={[{ tintColor: Colors.default }]}
                                textStyle={[{ color: Colors.default }]}
                                onPress={() => null}
                            />

                        </View>
                    </View>
                    <View style={custom.usersInteractionsContainer}>
                        <View style={custom.usersInteractionsLine}>
                            <Text style={[{ color: Colors.default }]}>
                                {'Published '} {datetime}
                            </Text>
                        </View>
                        <View style={custom.usersInteractionsLine}>
                            <Image
                                source={require('../../assets/icons/interaction/heart-filled.png')}
                                style={custom.usersInteractionsIcon}
                            />
                            <Text style={custom.usersInteractionsText}>
                                {' '} makhfib, mike and 272 others
                            </Text>
                        </View>
                        <View style={custom.usersInteractionsLine}>
                            <Image
                                source={require('../../assets/icons/interaction/comment.png')}
                                style={custom.usersInteractionsIcon}
                            />
                            <Text style={custom.usersInteractionsText}>
                                {' '} View comments
                            </Text>
                        </View>
                    </View>
                    <AudioPlayer />

                </View>
            </SafeAreaView>


        )
    }
}
