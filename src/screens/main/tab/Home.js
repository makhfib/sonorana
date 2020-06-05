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

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: colors.safearea}}>
                    <NavigationBar 
                        title={require('../../../assets/brand/Black-Text.png')}
                    />
                    <FlatList
                        data={clipsList}
                        renderItem={({ item }) => (
                            <Post
                                duration={item.p_duration}
                                id={item.id}
                                user={usersList[item.u_id]}
                                description={item.p_description}
                                date={item.p_date}
                                userId={item.u_id}
                            />
                        )}
                        ItemSeparatorComponent={Separator}
                    />
            </SafeAreaView>
        ); 
    }
}