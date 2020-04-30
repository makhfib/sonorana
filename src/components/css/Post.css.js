import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'
import TextStyle from '../../constants/TextStyle'

const headerHeight = 60;

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
        marginBottom: 20,
    },
    headerTextContainer: {
        flex: 1,
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
        fontSize: TextStyle.sizeOne, 
        fontWeight: 'bold' 
    },
    datetime: { 
        fontSize: TextStyle.sizeTwo, 
        fontWeight: 'normal', 
        color: Colors.default 
    },
    description: { 
        fontSize: TextStyle.sizeOne, 
        color: Colors.antagonist 
    },
    playButton: {
        paddingHorizontal: 15,
    },
    playIcon: {
        width: 15,
        height: 15,
    },
    playText: {
        fontSize: TextStyle.sizeThree
    },
    interactionsContainer: {
        marginTop: 20,
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
        fontSize: TextStyle.sizeThree
    }
});