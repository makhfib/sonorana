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
        width: 15,
        height: 15,
        resizeMode: 'contain',
        tintColor: Colors.antagonist
    },
    usersInteractionsText: {
        fontWeight: 'bold',
        color: Colors.antagonist
    },
});