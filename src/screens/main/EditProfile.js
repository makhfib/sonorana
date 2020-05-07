import React, { Component } from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Colors } from '../../constants/Colors'
import { custom } from './css/EditProfile.css'
import NavigationBar from '../../components/NavigationBar';
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-picker';
import InputInvalid from '../../functions/InputInvalid'
import { connect } from 'react-redux'
import { saveChanges, cancelChanges } from '../../modules/Profile/actions'
import PropTypes from 'prop-types'

class EditProfile extends Component {

    state = {
        allowSave: true,
        photo: this.props.route.params.photo,
        name: this.props.route.params.name,
        bio: this.props.route.params.description,
        website: this.props.route.params.website,
    }

    _handleTextChange(field, text) {
        switch (field) {
            case 'Name':
                this.setState({
                    name: text,
                    allowSave: !InputInvalid.isEmpty(text)
                })
                break
            case 'Description':
                this.setState({ bio: text })
                break
            case 'Website':
                this.setState({ website: text })
                break
            default:
                break
        }
    }

    _handleSave() {
        const {
            photo,
            name,
            bio,
            website
        } = this.state;
        this.props.saveChanges(photo, name, bio, website, this.props.navigation)
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    _pickImage() {
        // More info on all the options is below in the API Reference... just some common use cases shown here
        const options = {
            title: 'Select Avatar',
            customButtons: [
                { name: 'Delete', title: 'Remove Photo',  }
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
            console.log('Response = ', response);

            if (response.didCancel) {
                // Do something
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton === 'Delete') {
                this.setState({
                    // default photo
                    photo: 'https://icon.org.uk/sites/all/themes/iconinstitute/images/avatar-default.jpg',
                });
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    photo: source.uri,
                });
            }
        });
    }
    
    render() {
        const {
            allowSave,
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
                            source={{ uri: photo }}
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
                        <View style={[custom.form, (!allowSave && { borderColor: Colors.danger, borderWidth: 1 })]}>
                            <Text style={custom.inputLabel}>Name</Text>
                            <View style={custom.field}>
                                <Image
                                    source={require('../../assets/icons/regular/profile.png')}
                                    style={custom.fieldIcon}
                                />
                                <TextInput
                                    style={custom.input}
                                    selectionColor={Colors.antagonist}
                                    onChangeText={(text) => this._handleTextChange('Name', text)}
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
                                    onChangeText={(text) => this._handleTextChange('Description', text)}
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
                                    onChangeText={(text) => this._handleTextChange('Website', text)}
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

EditProfile.propTypes = {

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    saveChanges,
    cancelChanges
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)