import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../../components/SearchBar';
import Post from '../../../components/Post';
import { FlatList } from 'react-native-gesture-handler';
import SamplePosts from '../../../data/Posts'
import { View, Keyboard } from 'react-native';

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
            <SafeAreaView style={{flex: 1}}>
                <SearchBar
                    back={search}
                    onFocus={this._handleSearchOnFocus.bind(this)}
                    onSubmit={this._handleSearchOnSubmit.bind(this)}
                    onChangeText={this._handleSearchOnChangeText.bind(this)}
                    leftIconOnPress={this._handleSearchLeftIconOnPress.bind(this)}
                    value={value}
                />
                {
                    !search
                        ? (
                                <FlatList
                            data={SamplePosts}
                            renderItem={({ item }) =>
                                <Post
                                    photo={item.photo}
                                    username={item.username}
                                    datetime={item.datetime}
                                    description={item.description}
                                    duration={item.duration}
                                />
                            }
                            keyExtractor={item => item.id}
                        />
                        ) : (
                            <>
                            </>
                        )
                }
            </SafeAreaView>
        )
    }
}
