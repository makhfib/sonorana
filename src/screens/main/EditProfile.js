import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, layout } from '../../constants/Styles'
import NavigationBar from '../../components/NavigationBar'
import MultilineInput from '../../components/MultilineInput'
import Separator from '../../components/Separator';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class EditProfile extends Component {

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
        allowSave: true,
    }

    _handleBack() {
        this.props.navigation.goBack()
    }

    _handleDone() {
        console.log('Done not handled')
    }

    _changeHeader() {
        console.log('Change header not handled')
    }

    _changePhoto() {
        console.log('Change photo not handled')
    }

    _onChangeText = (text, field) => {
        switch (field) {
            case 'u_name':
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
                        rightIconImage={require('../../assets/icons/done.png')}
                    />
                <KeyboardAwareScrollView contentContainerStyle={{flex: 1,}}>
                    <Separator />
                    <View
                        style={styles.images}
                    >
                        <ImageBackground
                            style={styles.profileHeader}
                            source={{ uri: u_header }}
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
                                placeholder={'Your name'}
                                value={u_name}
                                onChangeText={(text) => this._onChangeText(text, 'u_name')}
                                clear={this.state.clear}
                            />
                            <Text
                                style={[styles.counter, { alignSelf: 'center' }]}
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
                                style={[styles.textInput, { textAlignVertical: 'center', justifyContent: 'center'}]}
                                maxLength={30}
                                placeholder={'Your website'}
                                value={u_website}
                                onChangeText={(text) => this._onChangeText(text, 'u_website')}
                                clear={this.state.clear}
                            />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
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
        minHeight: layout.paddingHorizontal*2,
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