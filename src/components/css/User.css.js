import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'
import TextStyle from '../../constants/TextStyle'

const headerHeight = 60;

export const custom = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomColor: Colors.notwhite,
        borderBottomWidth: 0.5,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: Colors.background,
        alignItems: 'center',
    },
    headerTextContainer: {
        flex: 1,
        marginHorizontal: 10,
        height: headerHeight,
        justifyContent: 'center'
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
    description: { 
        fontSize: TextStyle.sizeOne, 
        color: Colors.antagonist 
    },
    
});