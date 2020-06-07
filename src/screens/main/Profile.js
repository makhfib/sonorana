import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, StyleSheet, FlatList, ScrollView } from 'react-native'
import { colors, layout } from '../../constants/Styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../components/NavigationBar'
import ActionButton from '../../components/ActionButton'
import FollowButton from '../../components/FollowButton'
import Separator from '../../components/Separator';
import SectionHeader from '../../components/SectionHeader';
import Post from '../../components/Post';
import Feed from '../../data/clipsList'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { goToURL } from '../../functions/utils'

export default class Profile extends Component {

    _props() {
        if (this.props.route !== undefined) {
            return this.props.route.params;
        } else {
            return this.props;
        }

    }

    _handleBack() {
        this.props.navigation.goBack()
    }

    _handleEdit() {
        this.props.navigation.navigate('Main', {
            screen: 'EditProfile',
            params: {
                item: this._props().item
            }
        })
    }

    _handleSettings() {
        this.props.navigation.navigate('Main', {
            screen: 'Settings'
        })
    }

    render() {
        const {
            item
        } = this._props();

        // future animations scrollview https://medium.com/hackernoon/react-native-animated-header-using-animated-and-scrollview-9749255c149a

        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: colors.safearea
                }}
            >
                <NavigationBar
                    leftIconOnPress={this.props.route !== undefined ? () => this._handleBack() : undefined} // null gives error, undefined doesn't
                    leftIconImage={this.props.route !== undefined ? require('../../assets/icons/left_arrow.png') : undefined}
                    title={item.u_username}
                />
                <ScrollView
                    // read more https://stackoverflow.com/questions/38581562/sticky-component-inside-scrollview
                    stickyHeaderIndices={[4]}
                    alwaysBounceVertical={true}
                    showsVerticalScrollIndicator={false}
                >
                    <Separator />
                    <View
                        style={[styles.images, {
                            height: item.u_header !== null ? profileHeaderHeight + profilePhotoHeight / 2 : profileHeaderHeight
                        }]}
                    >
                        <ImageBackground
                            style={styles.profileHeader}
                            source={item.u_header !== null ? { uri: item.u_header } : null }
                        >
                        </ImageBackground>
                        <View
                            style={styles.photoContainer}
                        >
                            <Image
                                style={styles.profilePhoto}
                                source={{ uri: item.u_photo }}
                            />
                        </View>
                    </View>
                    <View style={styles.basicInfoContainer}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 10, }}>
                            {item.u_name}
                        </Text>
                        {
                            item.u_description !== undefined && item.u_description !== null
                                ? <Text style={{ marginBottom: 10, }}>
                                    {item.u_description}
                                </Text>
                                : <></>
                        }
                        {
                            item.u_website !== undefined && item.u_website !== null
                                ? <TouchableOpacity
                                    activeOpacity={0.5}
                                    onPress={() => goToURL(item.u_website)}
                                >
                                    <Text style={{ color: colors.blue, marginBottom: 10, }}>
                                        {item.u_website.replace(/https?:\/\//i, "")}
                                    </Text>
                                </TouchableOpacity>
                                : <></>

                        }
                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                {item.u_numFollowing}
                            </Text>
                            <Text style={{ marginRight: 10, }} >
                                {' following'}
                            </Text>
                            <Text style={{ fontWeight: 'bold' }} >
                                {item.u_numFollowers}
                            </Text>
                            <Text style={{}} >
                                {' following'}
                            </Text>
                        </View>
                        <View style={styles.buttonsContainer}>
                            {
                                item.u_username === 'freshlygrounded'
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
                                        u_following={item.u_following}
                                        style={{
                                            marginRight: 10,
                                        }}
                                    />
                            }

                            {
                                item.u_username === 'freshlygrounded'
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
                        data={Feed}
                        renderItem={({ item }) => (
                            <Post
                                item={item}
                                navigation={this.props.navigation}
                            />
                        )}
                        keyExtractor={post => post.p_id}
                    />
                </ScrollView>
            </SafeAreaView>
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