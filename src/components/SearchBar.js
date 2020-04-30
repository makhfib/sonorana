import React, { Component } from 'react'
import { View, Image, TextInput } from 'react-native'
import { Colors } from '../constants/Colors'
import { custom } from './css/Search.css'
import Styles from '../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {
    render() {
        return (
            <View style={custom.container}>
                <View style={custom.searchContainer}>
                    <Image
                        source={require('../assets/icons/icon-search.png')}
                        style={[Styles.icon, {alignSelf: 'center', }]}
                    />
                    <TextInput
                        style={custom.input}
                        textContentType={'name'}
                        selectionColor={Colors.tint}
                        placeholder={'Search...'}
                        placeholderTextColor={Colors.tint}
                    />
                </View>
                <TouchableOpacity
                    onPress={this.props.rightIconOnPress}
                    style={{
                        marginBottom: 5,
                    }}
                >
                    <Image
                        source={require('../assets/brand/icon-logo.png')}
                        style={[Styles.icon, { tintColor: Colors.tint, width: 30, height: 30 }]}
                    />
                </TouchableOpacity>

            </View>
        )
    }
}

SearchBar.propTypes = {
    rightIconOnPress: PropTypes.func,
}
