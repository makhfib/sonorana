import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/Colors'
import Layout from '../../../constants/Layout';

export const custom = StyleSheet.create({
    container: {
        marginTop: 30,
        width: '75%',
        alignSelf: 'center'
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 0,
    },
    optionIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: Colors.antagonist
    },
    optionText: {
        marginHorizontal: 20,
        flex: 1,
        fontSize: 16,
        color: Colors.antagonist
    },
    optionArrow: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        tintColor: Colors.antagonist
    },
    destructiveActionIcon: {
        tintColor: Colors.danger,
    },
    destructiveActionText: {
        color: Colors.danger
    }
})