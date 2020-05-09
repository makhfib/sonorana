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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {back &&
                        <TouchableOpacity
                            onPress={this.props.leftIconOnPress}
                            style={{
                                marginRight: 15,
                            }}
                        >
                            <Image
                                source={require('../assets/icons/bold/arrow-left.png')}
                                style={[{ resizeMode: 'contain', tintColor: Colors.tint, height: 30, width: 20 }]}
                            />
                        </TouchableOpacity>
                    }
                    <View style={custom.searchContainer}>
                        <Image
                            source={require('../assets/icons/bold/search.png')}
                            style={[{ width: 20, height: 20, resizeMode: 'contain', alignSelf: 'center', tintColor: Colors.tint }]}
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
                        onPress={() => this.props.navigation.navigate('Trending')}
                        style={{

                        }}
                    >
                        <Image
                            source={require('../assets/icons/bold/fire.png')}
                            style={[{ width: 25, height: 25, resizeMode: 'contain', tintColor: Colors.tint }]}
                        />
                    </TouchableOpacity>

                </View>

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
