import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TextInput, Keyboard } from 'react-native'
import { colors, layout } from '../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PropTypes from 'prop-types';
import { isEmpty } from '../functions/input'

export default class SearchBar extends Component {

    state = {
        text: '',
        clear: false,
    }

    _onSubmitEditting = () => {
        const { text } = this.state;
        if (!isEmpty(text)) {
            this.props.onSubmit(text)
        } else {
            this._onClear()
        }
    }

    _onClear() {
        this.refs['_textInput'].clear()
        this.setState({ clear: false })
        Keyboard.dismiss()
    }

    _onChangeText = (text) => {
        if (text.length > 0 && !this.state.clear) {
            this.setState({ clear: true })
        } else if (text.length === 0) {
            this.setState({ clear: false })
        }
        this.setState({ text: text })
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <View style={styles.itemsContainer}>
                    <View
                        style={styles.leftItemContainer}
                    >
                        <Image
                            style={styles.icon}
                            source={require('../assets/icons/search.png')}
                        />
                    </View>

                    <View
                        style={styles.middleItemContainer}   
                    >
                        <TextInput
                            ref="_textInput"
                            style={styles.input}
                            placeholder={'Find your friends'}
                            onChangeText={this._onChangeText}
                            onSubmitEditing={this._onSubmitEditting}
                        />
                    </View>

                    <View
                        style={styles.rightItemContainer}>
                        {
                            this.state.clear ?

                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => this._onClear()}
                                >
                                    <Image
                                        style={[styles.icon, { tintColor: colors.gray }]}
                                        source={require('../assets/icons/cancel.png')}
                                    />
                                </TouchableOpacity>
                                : <></>
                        }
                    </View>
                </View>
            </View>
        )
    }
}

SearchBar.propTypes = {
    leftIconOnPress: PropTypes.func,
    leftIconImage: PropTypes.any,
    rightIconOnPress: PropTypes.func,
    rightIconImage: PropTypes.any,
    title: PropTypes.any,
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.background,
        paddingHorizontal: layout.paddingHorizontal,
        justifyContent: 'flex-end',
        borderBottomColor: colors.lightgray,
        borderBottomWidth: 1,
    },
    itemsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftItemContainer: {

    },
    middleItemContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        paddingHorizontal: 10,
        height: layout.inputContainerHeight,
    },
    rightItemContainer: {

        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        height: 30,
        width: 30,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    },
})