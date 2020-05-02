import React, { Component } from 'react'
import { View, Image, TextInput, TouchableHighlightComponent } from 'react-native'
import { Colors } from '../constants/Colors'
import { custom } from './css/Search.css'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {
    render() {
        const { back } = this.props;

        return (
            <View style={custom.container}>
                {back &&
                    <TouchableOpacity
                        onPress={this.props.leftIconOnPress}
                        style={{
                            marginBottom: 5,
                            marginRight: 15,
                        }}
                    >
                        <Image
                            source={require('../assets/icons/navigation/back.png')}
                            style={[{ resizeMode: 'contain',  tintColor: Colors.tint, height: 30, width: 20}]}
                        />
                    </TouchableOpacity>
                }

                <View style={custom.searchContainer}>
                    <Image
                        source={require('../assets/icons/search.png')}
                        style={[{  width: 20, height: 20, resizeMode: 'contain', alignSelf: 'center', tintColor: Colors.tint }]}
                    />
                        <TextInput
                        style={custom.input}
                        textContentType={'name'}
                        selectionColor={Colors.tint}
                        placeholder={'Search...'}
                        placeholderTextColor={Colors.tint}
                        onFocus={() => this.props.onFocus()}
                        onChangeText={(text) => this.props.onChangeText(text)}
                        onSubmitEditing={() => this.props.onSubmit()}
                        value={this.props.value}
                    />
                    
                </View>
                <TouchableOpacity
                    onPress={null}
                    style={{
                        marginBottom: 5,
                    }}
                >
                    <Image
                        source={require('../assets/brand/icon.png')}
                        style={[{  width: 30, height: 30, resizeMode: 'contain', tintColor: Colors.tint }]}
                    />
                </TouchableOpacity>

            </View>
        )
    }
}

SearchBar.propTypes = {
    back: PropTypes.bool,
    value: PropTypes.string,
    onFocus: PropTypes.func,
    onSubmit: PropTypes.func,
    onChangeText: PropTypes.func,
    leftIconOnPress: PropTypes.func,
}
