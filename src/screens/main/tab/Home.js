import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../../components/NavigationBar'
import Separator from '../../../components/Separator'
import Post from '../../../components/Post'
import Feed from '../../../data/clipsList'
import { usersList } from '../../../data/usersList'
import { colors, layout } from '../../../constants/Styles'

export default class Home extends React.Component {

    _onPostPress(item) {
        this.props.navigation.navigate('Main', {
            screen: 'Post',
            params: { 
                item,
                feed: Feed
            }
        })
    }

    _onProfilePress(item) {
        this.props.navigation.navigate('Main', {
            screen: 'Profile',
            params: item
        })
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: colors.safearea}}>
                    <NavigationBar 
                        title={require('../../../assets/brand/Black-Text.png')}
                    />
                    <FlatList
                        data={Feed}
                        renderItem={({ item }) => (
                            <Post
                                item={item}
                                onPostPress={this._onPostPress.bind(this)}
                                onProfilePress={this._onProfilePress.bind(this)}
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