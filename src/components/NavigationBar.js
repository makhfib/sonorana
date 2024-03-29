import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { colors, layout } from '../constants/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PropTypes from 'prop-types';

export default class NavigationBar extends Component {
    _handleGoBack() {
        this.props.navigation.goBack()
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
                        {
                            this.props.leftIconImage !== undefined ?

                                <TouchableOpacity
                                    onPress={() => this.props.leftIconOnPress()}
                                >
                                    <Image
                                        style={styles.icon}
                                        source={this.props.leftIconImage}
                                    />
                                </TouchableOpacity>
                                : <></>
                        }
                    </View>

                    <View
                        style={styles.middleItemContainer}>
                        {
                            this.props.title ?
                                <>
                                    {
                                        // read more https://stackoverflow.com/questions/332422/get-the-name-of-an-objects-type
                                        this.props.title.constructor === String
                                            ?
                                            <TouchableOpacity
                                                activeOpacity={1}
                                                onPress={this.props.titleOnPress}
                                            >
                                                <Text
                                                    style={styles.text}
                                                    numberOfLines={1}
                                                >
                                                    {this.props.title}
                                                    </Text>
                                            </TouchableOpacity>
                                : <Image
                                    style={[{ height: 40, resizeMode: 'contain' }]}
                                    source={this.props.title}
                                />
                        }
                                </> : <></>
                        }
                    </View>

                <View
                    style={styles.rightItemContainer}>
                    {
                        this.props.rightIconImage !== undefined ?

                            <TouchableOpacity
                                onPress={() => this.props.rightIconOnPress()}
                            >
                                <Image
                                    style={[styles.icon, this.props.rightIconStyle]}
                                    source={this.props.rightIconImage}
                                />
                            </TouchableOpacity>
                            : <></>
                    }
                </View>
            </View>
            </View >
        )
    }
}

NavigationBar.propTypes = {
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
        paddingBottom: 10,
        paddingHorizontal: layout.paddingHorizontal,
        justifyContent: 'flex-end',
        borderBottomColor: colors.lightgray,
        borderBottomWidth: 1,
    },
    itemsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftItemContainer: {
        flex: 0.25,
    },
    middleItemContainer: {
        flex: 1,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightItemContainer: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        height: 30,
        width: 30,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
})