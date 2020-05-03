import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationBar from '../../components/NavigationBar'
import { Colors } from '../../constants/Colors'
import ActionButton from '../../components/ActionButton'
import TextStyle from '../../constants/TextStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { custom } from './css/User.css'
import FollowButton from '../../components/FollowButton'

export default class User extends Component {

    _props() {
        if (this.props.route !== undefined) {
            return this.props.route.params;
        } else {
            return this.props;
        }
    }

    state = {
        name: this._props().name,
        username: this._props().username,
        photo: this._props().photo,
        description: this._props().description,
        website: this._props().website,
        following: this._props().following,
        followers: this._props().followers,
    }

    _handleMore() {
        if (this.props.route === undefined) {
            this.props.navigation.navigate('Settings')
        }
    }

    render() {
        const {
            name,
            username,
            photo,
            description,
            website,
            following,
            followers
        } = this.state;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
                <View style={custom.container}>
                    <NavigationBar
                        title={username}
                    
                        leftIcon={
                            this.props.route !== undefined
                            ? require('../../assets/icons/navigation/back.png')
                            : undefined
                        }
                        leftIconTintColor={Colors.tint}
                        leftIconOnPress={
                            this.props.route !== undefined
                            ? () => this.props.navigation.goBack()
                            : null
                        }

                        rightIcon={require('../../assets/icons/interaction/more.png')}
                        rightIconTintColor={Colors.tint}
                        rightIconOnPress={() => this._handleMore()}
                    />
                    <View style={custom.informationContainer}>
                        <View style={custom.profileHeaderContainer}>
                            <Image
                                source={{ uri: photo }}
                                style={custom.photo}
                            />
                            <View style={custom.profileHeaderText}>
                                <Text style={custom.profileName}>
                                    {name}
                                </Text>
                                {
                                    this.props.route === undefined
                                        ? (
                                            <ActionButton
                                                icon={require('../../assets/icons/edit.png')}
                                                text={'Edit profile'}
                                                buttonStyle={custom.profileActionButton}
                                                iconStyle={custom.profileActionButtonIcon}
                                                textStyle={[TextStyle.postInteraction, custom.profileActionButtonText]}
                                            />
                                        ) : (
                                            <View style={[{alignItems: 'flex-start'}]}>
                                                <FollowButton />
                                            </View>
                                            
                                        )
                                }

                            </View>
                        </View>
                        {
                            description &&
                            <Text style={custom.description}>
                                {description}
                            </Text>
                        }
                        {
                            website &&
                            <TouchableOpacity style={custom.websiteContainer}>
                                <Text style={custom.website}>
                                    {website}
                                </Text>
                            </TouchableOpacity>
                        }
                        <View style={custom.numbersContainer}>
                            <View style={custom.numbersElementContainer}>
                                <Text style={custom.number}>
                                    {following}
                                </Text>
                                <Text style={custom.text}>
                                    {' '} following
                                </Text>
                            </View>
                            <View style={custom.numbersElementContainer}>
                                <Text style={custom.number}>
                                    {followers}
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
                                source={require('../../assets/icons/mic.png')}
                                style={custom.sectionIcon}
                            />
                            <Text style={custom.sectionText}>Posts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={custom.section}>
                            <Image
                                source={require('../../assets/icons/playlist.png')}
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
