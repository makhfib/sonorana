import React, { Component } from 'react'
import { View, Keyboard, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler';
import SearchBar from '../../../components/SearchBar';
import Post from '../../../components/Post';
import SamplePosts from '../../../data/Posts'
import { Colors } from '../../../constants/Colors'
import { custom } from '../css/Notice.css'

export default class Home extends Component {

    state = {
        value: undefined,
        search: false,
        searchText: '',
    }


    componentDidMount() {
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove();
    }

    _resetState() {
        this.setState({ search: false, value: undefined, searchText: '' })
    }

    _keyboardDidHide() {
        const { searchText } = this.state;

        if (searchText.trim().length == 0) {
            this._resetState()
        }

        Keyboard.dismiss()
    }

    _handleSearchOnFocus() {
        this.setState({ search: true })
    }

    _handleSearchOnChangeText(text) {
        this.setState({ searchText: text })
    }

    _handleSearchOnSubmit() {

    }

    _handleSearchLeftIconOnPress() {
        this._resetState()

        Keyboard.dismiss()
    }

    render() {
        const { search, value } = this.state;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
                <SearchBar
                    back={search}
                    onFocus={this._handleSearchOnFocus.bind(this)}
                    onSubmit={this._handleSearchOnSubmit.bind(this)}
                    onChangeText={this._handleSearchOnChangeText.bind(this)}
                    leftIconOnPress={this._handleSearchLeftIconOnPress.bind(this)}
                    value={value}
                    navigation={this.props.navigation}
                />
                {
                    !search
                        ? (
                            <FlatList
                                data={SamplePosts}
                                renderItem={({ item }) =>
                                    <Post
                                        id={item.id}
                                        photo={item.photo}
                                        username={item.username}
                                        name={item.name}
                                        datetime={item.datetime}
                                        description={item.description}
                                        duration={item.duration}
                                        navigation={this.props.navigation}
                                    />
                                }
                                keyExtractor={item => item.id}
                            />
                        ) : (
                            <View style={custom.container}>
                                <View style={custom.imageContainer}>
                                    <Image
                                        source={require('../../../assets/illustrations/binoculars.png')}
                                        style={custom.image}
                                    />
                                </View>
                                <View style={custom.textContainer}>
                                    <Text style={custom.title}>
                                        Search not available
                                    </Text>
                                    <Text style={custom.description}>
                                        Sorry, we haven't built this module yet. We are working on it!
                                    </Text>
                                </View>
                            </View>
                        )
                }
            </SafeAreaView>
        )
    }
}
