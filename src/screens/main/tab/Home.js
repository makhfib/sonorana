import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import Post from '../../../components/Post'
import clipsList from '../../../data/clipsList'
import { colors, layout } from '../../../constants/Styles'

export default class Home extends React.Component {

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
                <View style={{flex: 1, paddingHorizontal: layout.paddingHorizontal}}>
                    <Post />
                </View>
            </SafeAreaView>
        ); 
    }
}