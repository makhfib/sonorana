import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Colors } from '../constants/Colors'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ActionButton extends Component {
    render() {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, this.props.buttonStyle]}
                    onPress={this.props.onPress}
                    >   
                    {
                        this.props.icon &&
                        <Image 
                            source={this.props.icon}
                            style={[styles.icon, this.props.iconStyle]}
                        />
                    }
                    <Text style={[styles.textButton, this.props.textStyle]}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

ActionButton.propTypes = {
    icon: PropTypes.number,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    buttonStyle: PropTypes.any,
    iconStyle: PropTypes.any,
    textStyle: PropTypes.any,
}

const styles = StyleSheet.create({
    buttonContainer: {
    },
    button: {
        height: 40,
        paddingHorizontal: 30,
        backgroundColor: Colors.tint,
        borderRadius: 100,
        alignItems: 'center',
        flexDirection: 'row',
    },
    textButton: {
        color: Colors.background,
        fontWeight: 'bold',
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: Colors.background,
        resizeMode: 'contain',
        marginRight: 10
    }   
})