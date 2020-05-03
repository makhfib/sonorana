import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../constants/Colors'
import { custom } from '../css/Notice.css'
import NavigationBar from '../../../components/NavigationBar';

export default class Create extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
                <NavigationBar 
                    title={'Create'}
                />
                <View style={custom.container}>
                    <View style={custom.imageContainer}>
                        <Image 
                            source={require('../../../assets/icons/navigation/create.png')}
                            style={custom.image}
                        />
                    </View>
                    <View style={custom.textContainer}>
                        <Text style={custom.title}>
                            Create not available
                        </Text>
                        <Text style={custom.description}>
                            Sorry, we haven't built the create module yet. We are working on it!
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
