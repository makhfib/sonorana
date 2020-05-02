import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'

const headerHeight = 40;

export const custom = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: Colors.background,
        alignItems: 'center',
        marginBottom: 5,
    },
    headerTextContainer: {
        //flex: 1,
        marginHorizontal: 10,
        height: headerHeight,
        justifyContent: 'space-around'
    },
    photo: { 
        width: headerHeight, 
        height: headerHeight, 
        borderRadius: headerHeight / 2 
    },
    username: { 
        fontWeight: 'bold',
        color: Colors.antagonist
    },
    datetime: { 
        fontWeight: 'normal', 
        color: Colors.default 
    },
    description: { 
        color: Colors.antagonist 
    },
    playButton: {
        height: 30,
        borderWidth: 1,
        borderColor: Colors.tint,
        paddingHorizontal: 10,
        backgroundColor: Colors.background,
    },
    playIcon: {
        width: 10,
        height: 10,
        tintColor: Colors.tint,
    },
    playText: {
        color: Colors.tint,
    },
    interactionsContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    interactionButton: {
        paddingHorizontal: 0,
        borderRadius: 0,
        backgroundColor: Colors.background
    },
    interactionIcon: {
        tintColor: Colors.default
    },
    interactionText: {
        color: Colors.default,
    }
});