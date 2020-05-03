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
                
                />
                <View style={custom.container}>
                    <View style={custom.imageContainer}>
                        <Image 
                            source={require('../../../assets/illustrations/egg-media-player.png')}
                            style={custom.image}
                        />
                    </View>
                    <View style={custom.textContainer}>
                        <Text style={custom.title}>
                            Publishing not available
                        </Text>
                        <Text style={custom.description}>
                            Sorry, we haven't built this module yet. We are working on it!
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
