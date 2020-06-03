import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import Post from '../../../components/Post'
import { clipsList } from '../../../data/clipsList'
import { usersList } from '../../../data/usersList'
import { colors, layout } from '../../../constants/Styles'

export default class Home extends React.Component {

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
                    <FlatList
                        data={clipsList}
                        renderItem={({ item }) => (
                            <Post
                                duration={item.p_duration}
                                id={item.p_id}
                                user={usersList[item.u_id]}
                                description={item.p_description}
                                date={item.p_date}
                                likes={item.p_numLikes}
                                userId={item.u_id}
                            />
                        )}
                    />
            </SafeAreaView>
        ); 
    }
}