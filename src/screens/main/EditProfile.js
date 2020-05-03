import React, { Component } from 'react'
import { Text, View, Image, TextInput, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Colors } from '../../constants/Colors'
import { custom } from './css/EditProfile.css'
import NavigationBar from '../../components/NavigationBar';
import { TouchableOpacity } from 'react-native-gesture-handler'
import Layout from '../../constants/Layout'

export default class EditProfile extends Component {

    state = {
        save: false,
        newLine: false,
        photo: this.props.route.params.photo,
        name: this.props.route.params.name,
        bio: this.props.route.params.description,
        website: this.props.route.params.website,
    }

    _handleTextChange(field, text) {
        if ('bio') {

        }
    }

    _handleOnKeyPress() {

    }

    _handleFinish() {
        const {
            save
        } = this.state;

        if (save) {
            this.props.navigation.goBack()
        } else {
            console.log('Show red message of error')
        }
    }

    render() {
        const {
            save,
            photo,
            name,
            bio,
            website
        } = this.state;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
                <NavigationBar
                    leftIcon={require('../../assets/icons/bold/cancel.png')}
                    leftIconTintColor={Colors.antagonist}
                    leftIconOnPress={() => this.props.navigation.goBack()}

                    rightIcon={require('../../assets/icons/bold/done.png')}
                    rightIconTintColor={save ? Colors.antagonist : Colors.default}
                    rightIconOnPress={() => this._handleFinish()}
                />
                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    // for this to work, do NOT set flex to 1
                    contentContainerStyle={custom.container}
                    scrollEnabled={true}
                >
                    <View style={custom.photoContainer}>
                        <Image
                            source={{ uri: photo }}
                            style={custom.photo}
                        />
                        <TouchableOpacity
                            style={custom.editPhotoButtonContainer}
                        >
                            <Image
                                source={require('../../assets/icons/regular/face-id.png')}
                                style={custom.editPhotoButtonIcon}
                            />
                            <Text style={custom.editPhotoButtonText}>
                                Edit
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={custom.formContainer}>
                        <View style={custom.form}>
                            <Text style={custom.inputLabel}>Name</Text>
                            <View style={custom.field}>
                                <Image
                                    source={require('../../assets/icons/regular/profile.png')}
                                    style={custom.fieldIcon}
                                />
                                <TextInput
                                    style={custom.input}
                                    selectionColor={Colors.antagonist}

                                    defaultValue={name}
                                />
                            </View>
                        </View>
                        <View style={[custom.form, { height: 100 }]}>
                            <Text style={custom.inputLabel}>Bio</Text>
                            <View style={[custom.field, { alignItems: 'flex-start' }]}>
                                <Image
                                    source={require('../../assets/icons/regular/open-quote.png')}
                                    style={[custom.fieldIcon, { marginTop: 5 }]}
                                />
                                <TextInput
                                    style={[custom.input, { height: 70, paddingTop: 5 }]}
                                    selectionColor={Colors.antagonist}
                                    defaultValue={bio}
                                    textAlignVertical={'top'}
                                    multiline={true}
                                    onChangeText={(text) => this._handleTextChange('bio', text)}
                                    onKeyPress={() => this._handleOnKeyPress()}
                                />
                            </View>
                        </View>
                        <View style={custom.form}>
                            <Text style={custom.inputLabel}>Website</Text>
                            <View style={custom.field}>
                                <Image
                                    source={require('../../assets/icons/regular/hyperlink.png')}
                                    style={custom.fieldIcon}
                                />
                                <TextInput
                                    style={custom.input}
                                    selectionColor={Colors.antagonist}

                                    defaultValue={website}
                                />
                            </View>
                        </View>

                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}

/*
<View style={custom.container}>
    <View style={custom.imageContainer}>
        <Image
            source={require('../../assets/illustrations/avatar-settings.png')}
            style={custom.image}
        />
    </View>
    <View style={custom.textContainer}>
        <Text style={custom.title}>
            Profile settings not available
        </Text>
        <Text style={custom.description}>
            Sorry, we haven't built this module yet. We are working on it!
        </Text>
    </View>
</View>
*/