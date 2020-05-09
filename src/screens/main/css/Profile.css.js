import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/Colors'
import TextStyle from '../../../constants/TextStyle'

export const custom = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    informationContainer: {
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderBottomColor: Colors.notwhite,
        borderBottomWidth: 0.5,
    },
    profileHeaderContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.antagonist
    },
    profileHeaderText: {
        flex:1,
        paddingHorizontal: 20,
        justifyContent: 'space-around',
    },
    profileActionButton: {
        paddingHorizontal: 15,
        height: 30,
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
    profileActionButtonIcon: {
        width: 10,
        height: 10,
    },
    profileActionButtonText: {
        color: Colors.background
    },
    description: {
        color: Colors.antagonist,
        marginBottom: 10,
    },
    websiteContainer: {
        marginBottom: 20,
    },
    website: {
        color: Colors.tint,
    },
    numbersContainer: {
        flexDirection: 'row',
    },
    numbersElementContainer: {
        flexDirection: 'row',
        marginRight: 20,
    },
    number: {
        color: Colors.antagonist,
        fontWeight: 'bold'
    },
    text: {
        color: Colors.antagonist,
    },
    sectionsContainer: {
        backgroundColor: Colors.background,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    section: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    },
    sectionIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 50,
        tintColor: Colors.antagonist
    },
    sectionText: {
        fontWeight: 'bold',
        color: Colors.antagonist
    }
})