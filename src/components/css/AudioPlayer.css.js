import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'
import Layout from '../../constants/Layout';

const MyTintColor = Colors.tint

export const custom = StyleSheet.create({
    playerContainer: {
        height: 160,
        justifyContent: 'space-around',
        paddingHorizontal: Layout.paddingHorizontal,
    },
    slider: {
        
    },
    timeIndicator: {
        color: Colors.antagonist
    },
    playerButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        alignSelf: 'center',
    },
    changeClipIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: MyTintColor
    },
    backwardIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        tintColor: MyTintColor
    },
    playIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: MyTintColor
    },
});