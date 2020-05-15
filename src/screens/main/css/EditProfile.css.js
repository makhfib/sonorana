import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/Colors'
import Layout from '../../../constants/Layout';

export const custom = StyleSheet.create({
    container: {
        
    },
    photoContainer: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.inputBackground,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.inputBackground
    },
    editPhotoButtonContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 10
    },
    editPhotoButtonIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 10,
        tintColor: Colors.tint
    },
    editPhotoButtonText: {
        color: Colors.tint
    },
    formContainer: {
        flex: 1,
        marginHorizontal: Layout.paddingHorizontal,
        paddingTop: 30,
    },
    form: {
        backgroundColor: Colors.inputBackground,
        height: 60,
        borderRadius: 4,
        marginBottom: 20,
    },
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    fieldIcon: {
        width: 20,
        height: 20,
        tintColor: Colors.default
    },
    inputLabel: {
        marginTop: 5,
        color: Colors.antagonist,
        paddingLeft: 10,
        fontWeight:'bold'
    },
    input: {
        flex: 1,
        color: Colors.antagonist,
        height: 35,
        width: '100%',
        paddingLeft: 10,
    },
});