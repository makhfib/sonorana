import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/Colors'
import Layout from '../../../constants/Layout';

export const custom = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    postContainer: {
        paddingTop: 30,
        paddingHorizontal: Layout.paddingHorizontal,
        paddingBottom: 20,
        borderBottomColor: Colors.notwhite,
        borderBottomWidth: 0.5,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    photo: {
        width: 40,
        height: 40,
        borderRadius: 80 / 2
    },
    postHeaderTextContainer: {
        flex: 1,
        height: 40,
        marginHorizontal: 10,
        justifyContent: 'space-around',
    },
    postAuthor: {
        fontWeight: 'bold',
        color: Colors.antagonist
    },
    postDatetime: {
        fontWeight: 'normal',
        color: Colors.default
    },
    postDescription: {
        color: Colors.antagonist
    },
    interactionsContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    interactionButtonStyle: {
        paddingHorizontal: 0,
        borderRadius: 0,
        backgroundColor: Colors.background
    },
    usersInteractionsContainer: {
        paddingTop: 20,
        paddingHorizontal: Layout.paddingHorizontal,
        paddingBottom: 20,
        //flex: 1, // if flex = 1, then push audio player to bottom
    },
    usersInteractionsLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    usersInteractionsIcon: {
        tintColor: Colors.antagonist,
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
    usersInteractionsText: {
        fontWeight: 'bold',
        color: Colors.antagonist
    },
    playerContainer: {
        height: 160,
        justifyContent: 'space-around',
        paddingHorizontal: Layout.paddingHorizontal
    },
    playerButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        alignSelf: 'center',
    },
    changeClipIcon: {
        tintColor: Colors.antagonist,
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: Colors.tint
    },
    backwardIcon: {
        tintColor: Colors.antagonist,
        width: 25,
        height: 25,
        resizeMode: 'contain',
        tintColor: Colors.tint
    },
    playIcon: {
        tintColor: Colors.antagonist,
        width: 35,
        height: 35,
        resizeMode: 'contain',
        tintColor: Colors.tint
    },
});