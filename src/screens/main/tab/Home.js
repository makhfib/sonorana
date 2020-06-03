import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import Post from '../../../components/Post'
import clipsList from '../../../data/clipsList'
import Styles from '../../../constants/Styles'

export default class Home extends React.Component {

    render() {
        return (
            <SafeAreaView style={{flex: 1, marginHorizontal: 22, backgroundColor: '#fff'}}>
                <Post />
            </SafeAreaView>
        ); 
    }
}