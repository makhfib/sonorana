import { Colors } from '../../../constants/Colors'
import { StyleSheet } from 'react-native'

export const custom = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.inputBackground
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        tintColor: Colors.notwhite
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