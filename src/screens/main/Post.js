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
import { timeSince } from '../../functions/Utils'

export default class Post extends Component {

    state = {
        liked: this.props.route.params.item.u_liked,
    }

    _handleLike() {

        const { liked } = this.state
        this.setState({ liked: !liked })
    }

    render() {
        const {
            item
        } = this.props.route.params;
        const {
            liked,
        } = this.state;



        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={custom.container}>
                    <NavigationBar

                        leftIcon={require('../../assets/icons/bold/arrow-left.png')}
                        leftIconTintColor={Colors.tint}
                        leftIconOnPress={() => this.props.navigation.goBack()}

                        rightThirdIcon={require('../../assets/icons/bold/repeat.png')}
                        rightThirdIconTintColor={Colors.default}
                        rightThirdIconOnPress={null}

                        rightSecondIcon={require('../../assets/icons/bold/add-to-playlist.png')}
                        rightSecondIconTintColor={Colors.tint}
                        rightSecondIconOnPress={null}

                        rightIcon={require('../../assets/icons/bold/more.png')}
                        rightIconTintColor={Colors.tint}
                        rightIconOnPress={null}
                    />
                    <View style={custom.postContainer}>
                        <View style={custom.postHeader}>
                            <View style={{ flex: 1 }}>
                                <TouchableWithoutFeedback 
                                    style={{ flexDirection: 'row' }}
                                    onPress={() => this.props.navigation.navigate('Profile', {
                                        item
                                    })}
                                >
                                    <Image
                                        source={{ uri: item.u_photo }}
                                        style={custom.photo}
                                    />
                                    <View style={custom.postHeaderTextContainer}>
                                        <Text style={custom.postAuthor}>
                                            {item.u_name}
                                        </Text>
                                        <Text style={custom.postDatetime}>
                                            {item.u_username}
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>

                            <FollowButton 
                                u_username={item.u_username}
                                u_following={item.u_following}
                            />
                        </View>

                        <Text style={custom.postDescription}>
                            {item.p_description}
                        </Text>
                        <View style={custom.interactionsContainer}>
                            <ActionButton
                                icon={
                                    liked
                                        ? require('../../assets/icons/bold/heart.png')
                                        : require('../../assets/icons/regular/heart.png')
                                }
                                text={'Like'}
                                buttonStyle={custom.interactionButtonStyle}
                                iconStyle={[{ tintColor: liked ? Colors.like : Colors.default }]}
                                textStyle={[{ color: liked ? Colors.like : Colors.default }]}
                                onPress={() => this._handleLike()}
                            />
                            <ActionButton
                                icon={require('../../assets/icons//regular/messages-bubble.png')}
                                text={'Comment'}
                                buttonStyle={custom.interactionButtonStyle}
                                iconStyle={{ tintColor: Colors.default }}
                                textStyle={{ color: Colors.default }}
                                onPress={() => null}
                            />
                            <ActionButton
                                icon={require('../../assets/icons/regular/echo.png')}
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
                                {'Posted'} {timeSince(item.p_datetime)}
                            </Text>
                        </View>
                        <View style={custom.usersInteractionsLine}>
                            <Image
                                source={require('../../assets/icons/bold/heart.png')}
                                style={custom.usersInteractionsIcon}
                            />
                            <Text style={custom.usersInteractionsText}>
                                {' '} {item.p_numLikes + ' likes'}
                            </Text>
                        </View>
                        <View style={custom.usersInteractionsLine}>
                            <Image
                                source={require('../../assets/icons//regular/messages-bubble.png')}
                                style={custom.usersInteractionsIcon}
                            />
                            <Text style={custom.usersInteractionsText}>
                                {' '} View comments
                            </Text>
                        </View>
                    </View>
                    <AudioPlayer item={item}/>

                </View>
            </SafeAreaView>


        )
    }
}
