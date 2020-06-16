import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, StyleSheet, Alert, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, layout, random_color } from '../../constants/Styles'
import NavigationBar from '../../components/NavigationBar'
import MultilineInput from '../../components/MultilineInput'
import FloatingActivityIndicator from '../../components/FloatingActivityIndicator'
import Separator from '../../components/Separator';
import * as ImagePicker from 'expo-image-picker'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connectActionSheet } from '@expo/react-native-action-sheet'
import { connect } from 'react-redux';
import * as Permissions from 'expo-permissions';
import PropTypes from 'prop-types'
import { save_changes } from '../../modules/Profile/actions'
import { isEmpty } from '../../functions/input';

class EditProfile extends Component {

    _props() {
        return this.props.route.params
    }

    state = {
        u_name: this._props().item.u_name,
        u_photo: this._props().item.u_photo,
        u_header: this._props().item.u_header,
        u_description: this._props().item.u_description,
        u_website: this._props().item.u_website,
        currentNameLength: this._props().item.u_name.length,
        currentDescriptionLength: this._props().item.u_description.length,
        nameMaxLength: 30,
        descriptionMaxLength: 140,
        emptyName: false,
        randomColor: random_color()
    }

    async _permission(PERMISSION_TYPE) {
        // read more https://docs.expo.io/versions/latest/sdk/permissions/
        const { status } = await Permissions.getAsync(PERMISSION_TYPE);
        console.log(status)
        if (status !== 'granted') {
            const { status } = await Permissions.askAsync(PERMISSION_TYPE)
            console.log(status)
            if (status === 'granted') {
                return true;
            }
        } else {
            return true
        }

    }

    _alertPermissionDenied() {
        Alert.alert(
            'Sonorana does not have access to your photos or camera. To enable access, tap Settings and turn on photos and camera.',
            null,
            [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel'
                },
                {
                    text: 'Settings',
                    onPress: () => Linking.openSettings(),
                    style: 'default',
                }
            ],
            { cancelable: false }
        );
    }

    _confirmDelete(isPhoto) {
        let index = Math.floor(Math.random() * 15)
        Alert.alert(
            'Delete photo',
            'Are you sure you want to delete your photo?',
            [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        if (isPhoto) {
                            this.setState({ u_photo: 'https://sonorana-assets-bucket.s3-eu-west-1.amazonaws.com/eggs/' + index + '.png' })
                        } else {
                            this.setState({ u_header: '' })
                        }
                    },
                    style: 'destructive'
                }
            ],
            { cancelable: false }
        );
    }

    _handleBack() {
        this.props.navigation.goBack()
    }

    _handleDone() {
        if (this._allowSave()) {
            this.props.save_changes({
                u_username: this._props().item.u_username,
                u_name: this.state.u_name,
                u_photo: this.state.u_photo,
                u_header: this.state.u_header,
                u_description: this.state.u_description,
                u_website: this.state.u_website,
            }, this.props.navigation)
        } else {
            Alert.alert(
                'Your name is required, you can\'t leave it empty.',
                'This can be the name your parents gave you, or the name your friends call you with.',
                [
                    {
                        text: 'Ok',
                        onPress: () => null,
                        style: 'OK'
                    },
                ],
                { cancelable: false }
            );
        }
    }

    _changeHeader() {
        // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
        const options = ['Delete', 'Take photo', 'Choose from library', 'Cancel'];
        const destructiveButtonIndex = 0;
        const cancelButtonIndex = 3;

        this.props.showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
                destructiveButtonIndex,
            },
            async (buttonIndex) => {
                switch (buttonIndex) {
                    case 0:
                        this._confirmDelete(false)
                        break
                    case 1:
                        try {
                            if (this._permission(Permissions.CAMERA_ROLL)) {
                                if (this._permission(Permissions.CAMERA)) {
                                    let result = await ImagePicker.launchCameraAsync({
                                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                        allowsEditing: false,
                                        //aspect: [4, 3],
                                        quality: 0.5,
                                    })

                                    if (!result.cancelled) {
                                        this.setState({ u_header: result.uri })
                                    }
                                }
                            }
                        } catch (error) {
                            this._alertPermissionDenied()
                        }
                        break;
                    case 2:
                        try {
                            if (this._permission(Permissions.CAMERA_ROLL)) {
                                let result = await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                    allowsEditing: false,
                                    allowsMultipleSelection: false,
                                    quality: 0.5,
                                })

                                if (!result.cancelled) {
                                    this.setState({ u_header: result.uri })
                                }
                            }
                        } catch (error) {
                            this._alertPermissionDenied()
                        }
                        break;
                    default:
                        break;
                }
            },
        );
    }

    _changePhoto() {
        // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
        const options = ['Delete', 'Take photo', 'Choose from library', 'Cancel'];
        const destructiveButtonIndex = 0;
        const cancelButtonIndex = 3;

        this.props.showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
                destructiveButtonIndex,
            },
            async (buttonIndex) => {
                switch (buttonIndex) {
                    case 0:
                        this._confirmDelete(true)
                        break
                    case 1:
                        try {
                            if (this._permission(Permissions.CAMERA_ROLL)) {
                                if (this._permission(Permissions.CAMERA)) {
                                    let result = await ImagePicker.launchCameraAsync({
                                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                        allowsEditing: false,
                                        //aspect: [4, 3],
                                        quality: 0.5,
                                    })

                                    if (!result.cancelled) {
                                        this.setState({ u_photo: result.uri })
                                    }
                                }
                            }
                        } catch (error) {
                            this._alertPermissionDenied()
                        }
                        break;
                    case 2:
                        try {
                            if (this._permission(Permissions.CAMERA_ROLL)) {
                                let result = await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                    allowsEditing: false,
                                    allowsMultipleSelection: false,
                                    quality: 0.5,
                                })

                                if (!result.cancelled) {
                                    this.setState({ u_photo: result.uri })
                                }
                            }
                        } catch (error) {
                            this._alertPermissionDenied()
                        }
                        break;
                    default:
                        break;
                }
            },
        );
    }

    _onChangeText = (text, field) => {
        switch (field) {
            case 'u_name':
                if (isEmpty(text) && !this.state.emptyName) {
                    this.setState({ emptyName: true })
                } else if (this.state.emptyName && !isEmpty(text)) {
                    this.setState({ emptyName: false })
                }
                this.setState({
                    u_name: text,
                    currentNameLength: text.length,
                })
                break
            case 'u_description':
                this.setState({
                    u_description: text,
                    currentDescriptionLength: text.length
                })
                break
            case 'u_website':
                this.setState({
                    u_website: text,
                })
                break
            default:
                break
        }
    }

    _allowSave() {
        if (isEmpty(this.state.u_name)) {
            return false
        } else {
            return true
        }
    }

    render() {
        const {
            u_name,
            u_photo,
            u_header,
            u_description,
            u_website,
        } = this.state;

        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: colors.safearea
                }}
            >
                <NavigationBar
                    leftIconOnPress={() => this._handleBack()}
                    leftIconImage={require('../../assets/icons/cancel.png')}
                    rightIconOnPress={() => this._handleDone()}
                    rightIconStyle={{
                        tintColor: this._allowSave() ? colors.tint : colors.gray
                    }}
                    rightIconImage={require('../../assets/icons/done.png')}
                />
                <KeyboardAwareScrollView>
                    <Separator />
                    <View
                        style={styles.images}
                    >
                        <ImageBackground
                            style={[styles.profileHeader, { backgroundColor: u_header ? null : this.state.randomColor }]}
                            source={u_header ? { uri: u_header } : null}
                        >
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => this._changeHeader()}
                                style={styles.changeHeaderButton}
                            >
                                <Image
                                    style={styles.changeHeaderButtonIcon}
                                    source={require('../../assets/icons/image.png')}
                                />
                                <Text
                                    style={styles.changeHeaderButtonText}
                                >Change header</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                        <View
                            style={styles.photoContainer}
                        >
                            <ImageBackground
                                style={styles.profilePhoto}
                                source={{ uri: u_photo }}
                            >
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    onPress={() => this._changePhoto()}
                                    style={[
                                        styles.profilePhoto,
                                        {
                                            backgroundColor: 'rgba(0,0,0,0.5)',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }
                                    ]}
                                >
                                    <Image
                                        style={styles.changeHeaderButtonIcon}
                                        source={require('../../assets/icons/camera.png')}
                                    />
                                    <Text
                                        style={styles.changeHeaderButtonText}
                                    >Edit photo</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    </View>
                    <Separator />
                    <View
                        style={styles.fieldContainer}
                    >
                        <View
                            style={styles.rowContainer}
                        >
                            <Image
                                style={styles.fieldIcon}
                                source={require('../../assets/icons/profile_selected.png')}
                            />
                            <TextInput
                                style={[styles.textInput, { textAlignVertical: 'center', justifyContent: 'center' }]}
                                maxLength={30}
                                placeholder={'* Your name'}
                                placeholderTextColor={this.state.emptyName ? colors.red : colors.lightgray}
                                value={u_name}
                                onChangeText={(text) => this._onChangeText(text, 'u_name')}
                                clear={this.state.clear}
                            />
                            <Text
                                style={[styles.counter, { alignSelf: 'center', color: this.state.emptyName ? colors.red : null }]}
                            >{this.state.currentNameLength}/{this.state.nameMaxLength}</Text>
                        </View>

                    </View>
                    <Separator />
                    <View
                        style={[styles.fieldContainer, { paddingVertical: 10 }]}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Image
                                style={styles.fieldIcon}
                                source={require('../../assets/icons/quote.png')}
                            />
                            <MultilineInput
                                style={styles.textInput}
                                maxLines={1}
                                maxLength={this.state.descriptionMaxLength}
                                placeholder={'A brief description of your profile'}
                                value={u_description}
                                onChangeText={(text) => this._onChangeText(text, 'u_description')}
                            />
                        </View>

                        <Text
                            style={styles.counter}
                        >{this.state.currentDescriptionLength}/{this.state.descriptionMaxLength}</Text>
                    </View>
                    <Separator />
                    <View
                        style={styles.fieldContainer}
                    >
                        <View
                            style={styles.rowContainer}
                        >
                            <Image
                                style={styles.fieldIcon}
                                source={require('../../assets/icons/link.png')}
                            />
                            <TextInput
                                style={[styles.textInput, { textAlignVertical: 'center', justifyContent: 'center' }]}
                                maxLength={30}
                                placeholder={'Your website'}
                                value={u_website}
                                onChangeText={(text) => this._onChangeText(text, 'u_website')}
                                clear={this.state.clear}
                            />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
                {
                    this.props.loading
                    ?<FloatingActivityIndicator loading={this.props.loading}/>
                    : <></>
                }
            </SafeAreaView>
        )
    }
}

const profileHeaderHeight = 90
const profilePhotoHeight = 75

const styles = StyleSheet.create({
    images: {
        height: 10 + profileHeaderHeight + profilePhotoHeight / 2,
        justifyContent: 'flex-end',
        paddingHorizontal: layout.paddingHorizontal,
        backgroundColor: colors.background,
        paddingBottom: 10,
    },
    profileHeader: {
        top: 0,
        position: 'absolute',
        height: profileHeaderHeight,
        width: layout.deviceWidth,
        backgroundColor: colors.background,
        resizeMode: 'cover',
        paddingTop: layout.paddingHorizontal / 2,
        paddingRight: layout.paddingHorizontal
    },
    photoContainer: {
        height: profilePhotoHeight,
        width: profilePhotoHeight,
        borderRadius: profilePhotoHeight / 2,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePhoto: {
        height: profilePhotoHeight - 5,
        width: profilePhotoHeight - 5,
        borderRadius: profilePhotoHeight / 2,
        backgroundColor: colors.background,
        overflow: 'hidden'
    },
    fieldContainer: {
        paddingHorizontal: layout.paddingHorizontal,
        backgroundColor: colors.background,
    },
    textInput: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        textAlignVertical: "top",
        paddingLeft: 10,
        minHeight: layout.paddingHorizontal * 2,
    },
    counter: {
        color: colors.gray,
        alignSelf: 'flex-end'
    },
    changeHeaderButton: {
        height: 35,
        borderRadius: 5,
        flexDirection: 'row',
        paddingHorizontal: layout.paddingHorizontal / 2,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignSelf: 'flex-end',
        alignItems: 'center'
    },
    changeHeaderButtonIcon: {
        width: 25,
        height: 25,
        tintColor: 'white',
    },
    changeHeaderButtonText: {
        color: 'white',
        marginHorizontal: 10,
        fontSize: 12,
        textAlign: 'center'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    fieldIcon: {
        width: 25,
        height: 25,
        tintColor: colors.gray,
    }
})

EditProfile.propTypes = {

}

const mapStateToProps = (state) => ({
    loading: state.profile.loading,
    error: state.profile.error,
    errorMessage: state.profile.errorMessage
})

const mapDispatchToProps = {
    save_changes,
}
// connect your component which uses showActionSheetWithOptions
// read more https://github.com/expo/react-native-action-sheet
export default connect(mapStateToProps, mapDispatchToProps)(connectActionSheet(EditProfile))