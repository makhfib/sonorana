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
        fontWeight: 'bold' 
    },
    description: {  
        color: Colors.antagonist 
    },
    
});