import React, { Component } from 'react'
import { Text, View, Image, TextInput, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Colors } from '../../constants/Colors'
import { custom } from './css/EditProfile.css'
import NavigationBar from '../../components/NavigationBar';
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-picker';
import InputInvalid from '../../functions/InputInvalid'
import { connect } from 'react-redux'
import { save_changes, cancelChanges } from '../../modules/Profile/actions'
import PropTypes from 'prop-types'

class EditProfile extends Component {

    state = {
        emptyName: false,
        allowSave: true,

        u_username: this.props.route.params.u_username,
        u_photo: this.props.route.params.u_photo,
        u_name: this.props.route.params.u_name,
        u_description: this.props.route.params.u_description,
        u_website: this.props.route.params.u_website,
    }

    _handleTextChange(field, text) {
        switch (field) {
            case 'u_name':
                this.setState({
                    u_name: text,
                    emptyName: InputInvalid.isEmpty(text),
                    allowSave: !InputInvalid.isEmpty(text)
                })
                break
            case 'u_description':
                this.setState({ u_description: text })
                break
            case 'u_website':
                this.setState({ u_website: text })
                break
            default:
                break
        }
    }

    _handleSave() {
        Alert.alert(
            "Save changes",
            "Are you sure you want to save your changes?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Save",
                    onPress: () => this._saveChanges(),
                    style: 'default'
                }
            ],
            { cancelable: false }
        );
    }

    _saveChanges() {
        this.props.save_changes(this.state, this.props.navigation)
    }

    _pickImage() {
        // More info on all the options is below in the API Reference... just some common use cases shown here
        const options = {
            title: 'Select Avatar',
            customButtons: [
                { name: 'Delete', title: 'Remove photo', }
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info in the API Reference)
         */
        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
                // Do something
            } else if (response.error) {
                
            } else if (response.customButton === 'Delete') {
                this.setState({
                    // default u_photo
                    u_photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUXlNfuGfm7C2hlqTgAgkqr3URHctV1-A307SwaXLQCpsjBM6d&usqp=CAU',
                });
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    u_photo: source.uri,
                });
            }
        });
    }

    render() {
        const {
            emptyName,
            allowSave,
            u_photo,
            u_name,
            u_description,
            u_website
        } = this.state;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
                <NavigationBar
                    leftIcon={require('../../assets/icons/bold/cancel.png')}
                    leftIconTintColor={Colors.antagonist}
                    leftIconOnPress={() => this.props.navigation.goBack()}

                    rightIcon={require('../../assets/icons/bold/done.png')}
                    rightIconTintColor={allowSave ? Colors.tint : Colors.default}
                    rightIconOnPress={() => { allowSave ? this._handleSave() : null }}
                />
                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    // for this to work, do NOT set flex to 1
                    contentContainerStyle={custom.container}
                    scrollEnabled={true}
                >
                    <View style={custom.photoContainer}>
                        <Image
                                source={{uri: u_photo}}
                                style={custom.photo}
                        />
                        <TouchableOpacity
                            style={custom.editPhotoButtonContainer}
                            onPress={() => this._pickImage()}
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
                            <Text style={custom.inputLabel}>Name  {emptyName && <Text style={{ color: Colors.danger }}>* required</Text>}  </Text>
                            <View style={custom.field}>
                                <Image
                                    source={require('../../assets/icons/regular/profile.png')}
                                    style={custom.fieldIcon}
                                />
                                <TextInput
                                    style={custom.input}
                                    selectionColor={Colors.antagonist}
                                    onChangeText={(text) => this._handleTextChange('u_name', text)}
                                    defaultValue={u_name}
                                    maxLength={30}
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
                                    defaultValue={u_description}
                                    textAlignVertical={'top'}
                                    multiline={true}
                                    onChangeText={(text) => this._handleTextChange('u_description', text)}
                                    maxLength={140}
                                />
                            </View>
                        </View>
                        <View style={custom.form}>
                            <Text style={custom.inputLabel}>u_website <Text style={{ color: Colors.default, fontWeight: 'normal' }}>defaults to http://</Text></Text>
                            <View style={custom.field}>
                                <Image
                                    source={require('../../assets/icons/regular/hyperlink.png')}
                                    style={custom.fieldIcon}
                                />
                                <TextInput
                                    style={custom.input}
                                    selectionColor={Colors.antagonist}
                                    onChangeText={(text) => this._handleTextChange('u_website', text)}
                                    defaultValue={u_website}
                                />
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}

EditProfile.propTypes = {

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    save_changes,
    cancelChanges
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)