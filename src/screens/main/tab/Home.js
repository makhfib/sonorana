import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../../components/SearchBar';
import Post from '../../../components/Post'
import {  FlatList } from 'react-native-gesture-handler';
// check FlatList component https://reactnative.dev/docs/flatlist

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView>
                <SearchBar />
                <Post />
            </SafeAreaView>
        )
    }
}
