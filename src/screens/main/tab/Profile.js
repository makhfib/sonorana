import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationBar from '../../../components/NavigationBar'
import { Colors } from '../../../constants/Colors'
import ActionButton from '../../../components/ActionButton'
import TextStyle from '../../../constants/TextStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{
                    backgroundColor: Colors.background
                }}>
                    <NavigationBar
                        title={'makhfib'}
                        rightIcon={require('../../../assets/icons/interaction/more.png')}
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
                            marginBottom: 20,
                        }}>
                            <Image
                                source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQEy3CR_2OAw6Q/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=5gn-IJGPJinVYKlV4gxbQKGxI4jUPSe_TezE_ZBHqiQ' }}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 80 / 2
                                }}
                            />
                            <View style={{
                                marginLeft: 20,
                                justifyContent: 'space-around'
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                }}>
                                    Mohammed Makhfi
                                    </Text>
                                <ActionButton
                                    icon={require('../../../assets/icons/edit.png')}
                                    text={'Edit profile'}
                                    buttonStyle={{
                                        paddingHorizontal: 15,
                                        height: 30,
                                        alignSelf: 'flex-start',
                                        justifyContent: 'center',
                                    }}
                                    iconStyle={{
                                        width: 10,
                                        height: 10,
                                    }}
                                    textStyle={[TextStyle.postInteraction, {
                                        color: Colors.background
                                    }]}
                                />
                            </View>
                        </View>
                        <Text style={{
                            color: Colors.antagonist,
                            marginBottom: 10,
                        }}>
                            Family First. CEO of VaynerMedia, VaynerSports. Investor in Twitter, Uber, FB. 5X NYTimes best seller! Die hard NYJets fan.
                        </Text>
                        <TouchableOpacity style={{
                            marginBottom: 20,
                        }}>
                            <Text style={{
                                color: Colors.tint,
                            }}>
                                makhfib.com
                        </Text>
                        </TouchableOpacity>

                        <View style={{
                            flexDirection: 'row',

                        }}>
                            <View style={{
                                flexDirection: 'row',
                                marginRight: 20,
                            }}>
                                <Text style={{
                                    color: Colors.antagonist,
                                    fontWeight: 'bold'
                                }}>
                                    11.8k
                                </Text>
                                <Text style={{
                                    color: Colors.antagonist,
                                }}>
                                    {' '} following
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginRight: 20,
                            }}>
                                <Text style={{
                                    color: Colors.antagonist,
                                    fontWeight: 'bold'
                                }}>
                                    2.1m
                                </Text>
                                <Text style={{
                                    color: Colors.antagonist,
                                }}>
                                    {' '} followers
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: Colors.background,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    }}>
                        <TouchableOpacity  style={{
                            flexDirection: 'row',
                            height: 50,
                            alignItems:'center'
                        }}>
                            <Image
                                source={require('../../../assets/icons/mic.png')}
                                style={{
                                    width: 20,
                                    height: 20,
                                    resizeMode: 'contain',
                                    marginRight: 50,
                                }}
                            />
                            <Text style={{
                                fontWeight: 'bold'
                            }}>Posts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{
                            flexDirection: 'row',
                            height: 50,
                            alignItems:'center'
                        }}>
                            <Image
                                source={require('../../../assets/icons/playlist.png')}
                                style={{
                                    width: 20,
                                    height: 20,
                                    resizeMode: 'contain',
                                    marginRight: 50,
                                }}
                            />
                            <Text style={{
                                fontWeight: 'bold'
                            }}>Playlists</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        )
    }
}
