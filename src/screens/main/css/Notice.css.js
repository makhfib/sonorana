import { Colors } from '../../../constants/Colors'
import { StyleSheet } from 'react-native'

export const custom = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.background
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: '10%'
    },
    title: {
        color: Colors.antagonist,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        color: Colors.default,
        fontSize: 16,
        textAlign: 'center'
    }
})