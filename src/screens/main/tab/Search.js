import React from 'react'
import { Text, View, StyleSheet, FlatList, SectionList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../../components/SearchBar'
import Separator from '../../../components/Separator'
import Post from '../../../components/Post'
import Clips from '../../../data/clipsList'
import Users from '../../../data/usersList'
import { colors, layout } from '../../../constants/Styles'
import SectionHeader from '../../../components/SectionHeader';
import Profile from '../../../components/Profile';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Search extends React.Component {

    _onSubmit(text) {
        console.log('Submitted: ' + text)
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.safearea }}>
                    <SearchBar
                        onChangeText={this._onChangeText}
                        onSubmit={this._onSubmit}
                    />
                <KeyboardAwareScrollView  contentContainerStyle={{flex: 1,}}>
                    <ScrollView>
                        <Separator />
                        <SectionHeader
                            icon={require('../../../assets/icons/profile_default.png')}
                            title={'People you may know'}
                        />
                        <FlatList
                            data={Users}
                            renderItem={({ item }) => (
                                <Profile
                                    item={item}
                                    navigation={this.props.navigation}
                                />
                            )}
                            keyExtractor={item => item.u_username}
                        />
                    </ScrollView>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}