import React, { Component } from 'react'
import { Text, View, Image, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationBar from '../../components/NavigationBar'
import { Colors } from '../../constants/Colors'
import ActionButton from '../../components/ActionButton'
import TextStyle from '../../constants/TextStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { custom } from './css/Profile.css'
import FollowButton from '../../components/FollowButton'
import Browser from '../../functions/Browser'

export default class Profile extends Component {

    _props() {
        if (this.props.route !== undefined) {
            return this.props.route.params.item;
        } else {
            return this.props;
        }
    }

    _handleMore() {
        if (this.props.route === undefined) {
            this.props.navigation.navigate('Settings')
        }
    }

    _handleEditProfile() {
        this.props.editProfile(this._props(), this.props.navigation)
    }

    render() {
        const {
            u_username,
            u_name,
            u_photo,
            u_description,
            u_website,
            u_numFollowing,
            u_numFollowers,
            u_following,
        } = this._props();

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
                <View style={custom.container}>
                    <NavigationBar
                        title={u_username}

                        leftIcon={
                            this.props.route !== undefined
                                ? require('../../assets/icons/bold/arrow-left.png')
                                : undefined
                        }
                        leftIconTintColor={Colors.tint}
                        leftIconOnPress={
                            this.props.route !== undefined
                                ? () => this.props.navigation.goBack()
                                : null
                        }

                        rightIcon={require('../../assets/icons/bold/more.png')}
                        rightIconTintColor={Colors.tint}
                        rightIconOnPress={() => this._handleMore()}
                    />
                    <View style={custom.informationContainer}>
                        <View style={custom.profileHeaderContainer}>
                            <Image
                                source={{ uri: u_photo }}
                                style={custom.photo}
                            />
                            <View style={custom.profileHeaderText}>
                                <Text style={custom.profileName} numberOfLines={2}>
                                    {u_name}
                                </Text>
                                {
                                    this.props.route === undefined
                                        ? (
                                            <ActionButton
                                                icon={require('../../assets/icons/bold/quill.png')}
                                                text={'Edit profile'}
                                                onPress={() => this._handleEditProfile()}
                                                buttonStyle={custom.profileActionButton}
                                                iconStyle={custom.profileActionButtonIcon}
                                                textStyle={[TextStyle.postInteraction, custom.profileActionButtonText]}
                                            />
                                        ) : (
                                            <View style={[{ alignItems: 'flex-start' }]}>
                                                <FollowButton
                                                    u_username={u_username}
                                                    u_following={u_following}
                                                />
                                            </View>

                                        )
                                }
                            </View>
                        </View>
                        {
                            u_description &&
                            <Text style={custom.description} numberOfLines={3}>
                                {u_description}
                            </Text>
                        }
                        {
                            u_website &&
                            <TouchableOpacity
                                style={custom.websiteContainer}
                                onPress={() => Browser.goToURL(website)}
                            >
                                <Text style={custom.website} numberOfLines={1}>
                                    {u_website.replace(/https?:\/\//i, "")}
                                </Text>
                            </TouchableOpacity>
                        }
                        <View style={custom.numbersContainer}>
                            <View style={custom.numbersElementContainer}>
                                <Text style={custom.number}>
                                    {u_numFollowing}
                                </Text>
                                <Text style={custom.text}>
                                    {' '} following
                                </Text>
                            </View>
                            <View style={custom.numbersElementContainer}>
                                <Text style={custom.number}>
                                    {u_numFollowers}
                                </Text>
                                <Text style={custom.text}>
                                    {' '} followers
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={custom.sectionsContainer}>
                        <TouchableOpacity style={custom.section}>
                            <Image
                                source={require('../../assets/icons/bold/microphone.png')}
                                style={custom.sectionIcon}
                            />
                            <Text style={custom.sectionText}>Posts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={custom.section}>
                            <Image
                                source={require('../../assets/icons/bold/playlists.png')}
                                style={custom.sectionIcon}
                            />
                            <Text style={custom.sectionText}>Playlists</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}