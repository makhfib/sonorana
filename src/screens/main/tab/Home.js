import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../../components/NavigationBar'
import Separator from '../../../components/Separator'
import Post from '../../../components/Post'
import { clipsList } from '../../../data/clipsList'
import { usersList } from '../../../data/usersList'
import { colors, layout } from '../../../constants/Styles'

export default class Home extends React.Component {

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

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: colors.lightgray}}>
                    <NavigationBar 
                        title={require('../../../assets/brand/Black-Text.png')}
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
                        ItemSeparatorComponent={Separator}
                    />
            </SafeAreaView>
        ); 
    }
}