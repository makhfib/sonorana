import { StyleSheet } from 'react-native'
import TextStyle from '../../constants/TextStyle'
import Layout from '../../constants/Layout'
import { Colors } from '../../constants/Colors'

export const custom = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: Layout.paddingHorizontal,
        height: 60,
        alignItems: 'flex-end',
        paddingBottom: 10,
        backgroundColor: Colors.background,
        alignContent: 'center',
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.inputBackground,
        borderRadius: 20,
    },
    input: {
        color: Colors.tint,
        fontSize: TextStyle.sizeTwo,
        height: 40,
        paddingLeft: 10,
        flex: 1,
    },
})