import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, StyleSheet, FlatList, ScrollView } from 'react-native'
import { colors, layout } from '../../constants/Styles'
import NavigationBar from '../../components/NavigationBar'
import ActionButton from '../../components/ActionButton'
import FollowButton from '../../components/FollowButton'
import Separator from '../../components/Separator';
import SectionHeader from '../../components/SectionHeader';
import Post from '../../components/Post';
import { clipsList } from '../../data/clipsList'
import { usersList } from '../../data/usersList'

export default class Profile extends Component {

    _props() {
        if (this.props.route !== undefined) {
            return this.props.route.params.item;
        } else {
            return this.props;
        }

    }

    _onPostPress(id, liked) {
        this.props.navigation.navigate('Main', {
            screen: 'Post',
            params: {
                id,
                liked,
                users: usersList,
                posts: clipsList,
            }
        })
    }

    _handleBack() {
        this.props.navigation.goBack()
    }

    _handleEdit() {
        this.props.navigation.navigate('Main', {
            screen: 'EditProfile'
        })
    }

    _handleSettings() {
        this.props.navigation.navigate('Main', {
            screen: 'Settings'
        })
    }

    render() {
        const {
            u_username,
            u_name,
            u_photo,
            u_header,
            u_description,
            u_website,
            u_numFollowing,
            u_numFollowers,
            u_following,
        } = this._props();

        // future animations scrollview https://medium.com/hackernoon/react-native-animated-header-using-animated-and-scrollview-9749255c149a

        return (
            <>
                <NavigationBar
                    leftIconOnPress={this.props.route !== undefined ? () => this._handleBack() : undefined} // null gives error, undefined doesn't
                    leftIconImage={this.props.route !== undefined ? require('../../assets/icons/left_arrow.png') : undefined}
                    title={u_username}
                />
                <ScrollView
                    // read more https://stackoverflow.com/questions/38581562/sticky-component-inside-scrollview
                    stickyHeaderIndices={[4]}
                    alwaysBounceVertical={true}
                    showsVerticalScrollIndicator={false}
                >
                    <Separator />
                    <View
                        style={styles.images}
                    >
                        <ImageBackground
                            style={styles.profileHeader}
                            source={{ uri: u_header }}
                        >
                        </ImageBackground>
                        <View
                            style={styles.photoContainer}
                        >
                            <Image
                                style={styles.profilePhoto}
                                source={{ uri: u_photo }}
                            />
                        </View>
                    </View>
                    <View style={styles.basicInfoContainer}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 10, }}>
                            {u_name}
                        </Text>
                        {
                            u_description !== null
                                ? <Text style={{ marginBottom: 10, }}>
                                    {u_description}
                                </Text>
                                : <></>

                        }
                        {
                            u_website !== null
                                ? <Text style={{ color: colors.blue, marginBottom: 10, }}>
                                    {u_website}
                                </Text>
                                : <></>

                        }
                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                {u_numFollowing}
                            </Text>
                            <Text style={{ marginRight: 10, }} >
                                {' following'}
                            </Text>
                            <Text style={{ fontWeight: 'bold' }} >
                                {u_numFollowers}
                            </Text>
                            <Text style={{}} >
                                {' following'}
                            </Text>
                        </View>
                        <View style={styles.buttonsContainer}>
                            {
                                u_username === 'makhfib'
                                    ? <ActionButton
                                        icon={require('../../assets/icons/edit.png')}
                                        title={'Edit profile'}
                                        style={{
                                            backgroundColor: colors.blue,
                                            marginRight: 10,
                                        }}
                                        onPress={() => this._handleEdit()}
                                    />
                                    : <FollowButton
                                        u_following={true}
                                        style={{
                                            marginRight: 10,
                                        }}
                                    />
                            }

                            {
                                u_username === 'makhfib'
                                    ? <ActionButton
                                        icon={require('../../assets/icons/configuration.png')}
                                        title={'Settings'}
                                        style={{
                                            borderWidth: 2,
                                            borderColor: colors.blue,
                                            backgroundColor: colors.background
                                        }}
                                        iconStyle={{
                                            tintColor: colors.blue
                                        }}
                                        textStyle={{
                                            color: colors.blue
                                        }}
                                        onPress={() => this._handleSettings()}
                                    />
                                    : <></>
                            }
                        </View>
                    </View>
                    <Separator />
                    <SectionHeader
                        icon={require('../../assets/icons/feed.png')}
                        title={'Recent posts'}
                    />
                    <FlatList
                        data={clipsList}
                        renderItem={({ item }) => (
                            <Post
                                post={item}
                                user={usersList[item.u_id]}
                                onPostPress={this._onPostPress.bind(this)}
                                navigation={this.props.navigation}
                            />
                        )}
                        keyExtractor={item => item.p_id}
                    />
                </ScrollView>

            </>
        )
    }
}

const profileHeaderHeight = 90
const profilePhotoHeight = 75

const styles = StyleSheet.create({
    images: {
        height: profileHeaderHeight + profilePhotoHeight / 2,
        justifyContent: 'flex-end',
        paddingHorizontal: layout.paddingHorizontal,
        backgroundColor: colors.background
    },
    profileHeader: {
        top: 0,
        position: 'absolute',
        height: profileHeaderHeight,
        width: layout.deviceWidth,
        backgroundColor: colors.background,
        resizeMode: 'cover'
    },
    photoContainer: {
        height: profilePhotoHeight,
        width: profilePhotoHeight,
        borderRadius: profilePhotoHeight / 2,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePhoto: {
        height: profilePhotoHeight - 5,
        width: profilePhotoHeight - 5,
        borderRadius: profilePhotoHeight / 2,
        backgroundColor: colors.background,
    },
    basicInfoContainer: {
        paddingHorizontal: layout.paddingHorizontal,
        paddingVertical: layout.paddingHorizontal / 2,
        backgroundColor: colors.background
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    }
})