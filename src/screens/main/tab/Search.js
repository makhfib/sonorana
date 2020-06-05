import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../../components/SearchBar'
import Separator from '../../../components/Separator'
import Post from '../../../components/Post'
import { clipsList } from '../../../data/clipsList'
import { usersList } from '../../../data/usersList'
import { colors, layout } from '../../../constants/Styles'
import SectionHeader from '../../../components/SectionHeader';
import Profile from '../../../components/Profile';

export default class Search extends React.Component {

    _onSubmit(text) {
        console.log('Submitted: ' + text)
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: colors.safearea}}>
                    <SearchBar 
                        onChangeText={this._onChangeText}
                        onSubmit={this._onSubmit}
                    />
                    <Separator />
                    <SectionHeader 
                        icon={require('../../../assets/icons/profile_default.png')}
                        title={'People you may know'}
                    />
                    <Profile 
                        item={{
                            u_photo: {uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQEy3CR_2OAw6Q/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=_YkGI9DUd9QiWFE3xLpVcif1KqOsaHnvZxmgU8WxUDw'},
                            u_username: 'makhfib',
                            u_following: true
                        }}
                    />
            </SafeAreaView>
        ); 
    }
}