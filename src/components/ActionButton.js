import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Colors } from '../constants/Colors'
import PropTypes from 'prop-types'

export default class ActionButton extends Component {
    

    render() {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, this.props.buttonStyle]}>
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
    buttonStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    textStyle: PropTypes.object,
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
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
        color: Colors.notwhite,
        fontWeight: 'bold',
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: Colors.notwhite,
        resizeMode: 'contain',
        marginRight: 10
    }   
})