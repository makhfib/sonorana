import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../constants/Colors'
import { custom } from '../css/Notice.css'
import NavigationBar from '../../../components/NavigationBar';

export default class About extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
                <NavigationBar 
                    title={'About'}
                    
                    leftIcon={require('../../../assets/icons/bold/arrow-left.png')}
                    leftIconTintColor={Colors.tint}
                    leftIconOnPress={() => this.props.navigation.goBack()}
                />
                <View style={custom.container}>
                    <View style={custom.imageContainer}>
                        <Image 
                            source={require('../../../assets/illustrations/laptop-information.png')}
                            style={custom.image}
                        />
                    </View>
                    <View style={custom.textContainer}>
                        <Text style={custom.title}>
                            Information not available
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
