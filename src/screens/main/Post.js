import React, { Component } from 'react'
import { Text, View, Image, Slider } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationBar from '../../components/NavigationBar'
import { Colors } from '../../constants/Colors'
import FollowButton from '../../components/FollowButton'
import ActionButton from '../../components/ActionButton'
import TextStyle from '../../constants/TextStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Post extends Component {
    render() {
        const {
            id,
            photo,
            username,
            datetime,
            description,
            duration
        } = this.props.route.params;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    backgroundColor: Colors.background
                }}>
                    <NavigationBar
                        leftIcon={require('../../assets/icons/navigation/back.png')}
                        leftIconTintColor={Colors.tint}
                        leftIconOnPress={null}
                        rightIcon={require('../../assets/icons/interaction/more.png')}
                        rightIconTintColor={Colors.tint}
                        rightIconOnPress={null}
                    />
                    <View style={{
                        paddingTop: 30,
                        paddingHorizontal: 20,
                        paddingBottom: 20,
                        borderBottomColor: Colors.notwhite,
                        borderBottomWidth: 0.5,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}>
                            <Image
                                source={{ uri: photo }}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 80 / 2
                                }}
                            />
                            <View style={{
                                flex: 1,
                                marginHorizontal: 10,
                                height: 60,
                                justifyContent: 'space-around',
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}>
                                    {username}
                                </Text>
                                <Text style={{
                                    fontWeight: 'normal',
                                    color: Colors.default
                                }}>
                                    {datetime}
                                </Text>
                            </View>
                            <FollowButton />
                        </View>

                        <Text style={{
                            fontSize: 18,
                            color: Colors.antagonist
                        }}>
                            {description}
                        </Text>
                        <View style={{
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <ActionButton
                                icon={
                                    true
                                        ? require('../../assets/icons/interaction/heart-filled.png')
                                        : require('../../assets/icons/interaction/heart.png')
                                }
                                text={'Like'}
                                buttonStyle={{
                                    paddingHorizontal: 0,
                                    borderRadius: 0,
                                    backgroundColor: Colors.background
                                }}
                                iconStyle={[{ tintColor: Colors.default }, { tintColor: true ? Colors.like : Colors.default }]}
                                textStyle={[{ color: Colors.default }, { color: true ? Colors.like : Colors.default }]}
                                onPress={() => null}
                            />
                            <ActionButton
                                icon={require('../../assets/icons/interaction/comment.png')}
                                text={'Comment'}
                                buttonStyle={{
                                    paddingHorizontal: 0,
                                    borderRadius: 0,
                                    backgroundColor: Colors.background
                                }}
                                iconStyle={{ tintColor: Colors.default }}
                                textStyle={{ color: Colors.default }}
                                onPress={() => null}
                            />
                            <ActionButton
                                icon={require('../../assets/icons/interaction/echo.png')}
                                text={'Echo'}
                                buttonStyle={{
                                    paddingHorizontal: 0,
                                    borderRadius: 0,
                                    backgroundColor: Colors.background
                                }}
                                iconStyle={[{ tintColor: Colors.default }]}
                                textStyle={[{ color: Colors.default }]}
                                onPress={() => null}
                            />

                        </View>
                    </View>
                    <View style={{
                        paddingTop: 20,
                        paddingHorizontal: 20,
                        paddingBottom: 20,
                        flex: 1,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 10,
                        }}>
                            <Image
                                source={require('../../assets/icons/interaction/heart-filled.png')}
                                style={{
                                    tintColor: Colors.antagonist,
                                    width: 15,
                                    height: 15,
                                    resizeMode: 'contain'
                                }}
                            />
                            <Text style={{
                                fontWeight: 'bold'
                            }}>
                                {' '} makhfib, mike and 272 others
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 20,
                        }}>
                            <Image
                                source={require('../../assets/icons/interaction/comment.png')}
                                style={{
                                    tintColor: Colors.antagonist,
                                    width: 15,
                                    height: 15,
                                    resizeMode: 'contain'
                                }}
                            />
                            <Text style={{
                                fontWeight: 'bold'
                            }}>
                                {' '} View comments
                            </Text>
                        </View>
                    </View>
                    <Slider />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: '75%',
                        marginBottom: 80,
                        alignSelf: 'center',
                    }}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/icons/audio/previous.png')}
                                style={{
                                    tintColor: Colors.antagonist,
                                    width: 12,
                                    height: 12,
                                    resizeMode: 'contain',
                                    tintColor: Colors.tint
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/icons/audio/backward15.png')}
                                style={{
                                    tintColor: Colors.antagonist,
                                    width: 15,
                                    height: 15,
                                    resizeMode: 'contain',
                                    tintColor: Colors.tint
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/icons/audio/play.png')}
                                style={{
                                    tintColor: Colors.antagonist,
                                    width: 20,
                                    height: 20,
                                    resizeMode: 'contain',
                                    tintColor: Colors.tint
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/icons/audio/forward15.png')}
                                style={{
                                    tintColor: Colors.antagonist,
                                    width: 15,
                                    height: 15,
                                    resizeMode: 'contain',
                                    tintColor: Colors.tint
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/icons/audio/next.png')}
                                style={{
                                    tintColor: Colors.antagonist,
                                    width: 12,
                                    height: 12,
                                    resizeMode: 'contain',
                                    tintColor: Colors.tint
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>


        )
    }
}
