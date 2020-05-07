import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationBar from '../../components/NavigationBar'
import { Colors } from '../../constants/Colors'
import ActionButton from '../../components/ActionButton'
import TextStyle from '../../constants/TextStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { custom } from './css/Profile.css'
import FollowButton from '../../components/FollowButton'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Profile extends Component {

    _props() {
        if (this.props.route !== undefined) {
            return this.props.route.params;
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
        const {
            photo,
            name,
            description,
            website
        } = this._props();

        this.props.navigation.navigate('Main', {
            screen: 'EditProfile',
            params: {
                photo,
                name,
                description,
                website
            }
        })
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
        } = this._props();

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
                <View style={custom.container}>
                    <NavigationBar
                        title={username}
                    
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
                                source={{ uri: photo }}
                                style={custom.photo}
                            />
                            <View style={custom.profileHeaderText}>
                                <Text style={custom.profileName} numberOfLines={2}>
                                    {name}
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
                                            <View style={[{alignItems: 'flex-start'}]}>
                                                <FollowButton />
                                            </View>
                                            
                                        )
                                }

                            </View>
                        </View>
                        {
                            description &&
                            <Text style={custom.description} numberOfLines={3}>
                                {description}
                            </Text>
                        }
                        {
                            website &&
                            <TouchableOpacity style={custom.websiteContainer}>
                                <Text style={custom.website} numberOfLines={1}>
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

Profile.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
    description: PropTypes.string,
    website: PropTypes.string,
    following: PropTypes.string,
    followers: PropTypes.string,
}

const mapStateToProps = state => ({
    photo: state.profile.photo,
    name: state.profile.name,
    username: state.profile.username,
    description: state.profile.description,
    website: state.profile.website,
    following: state.profile.following,
    followers: state.profile.followers,
});

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)