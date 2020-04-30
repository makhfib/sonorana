import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../../components/SearchBar';
import Post from '../../../components/Post'
import SamplePosts from '../../../data/Posts'
import User from '../../../components/User'
import { FlatList } from 'react-native-gesture-handler';
import SampleResults from '../../../data/SearchResults';
// check FlatList component https://reactnative.dev/docs/flatlist

export default class Home extends Component {

    state = {
        search: false,
        searchText: ''
    }

    _handleSearchOnChange(text) {
        this.setState({ searchText: text });
    }

    _handleSearch() {
        this.setState({ search: true });
    }

    render() {
        const { search } = this.state;

        return (
            <SafeAreaView>
                <SearchBar 
                    onChangeText={this._handleSearchOnChange.bind(this)} 
                    onSubmit={this._handleSearch.bind(this)}
                />
                <FlatList
                    data={search ? SampleResults : SamplePosts}
                    renderItem={({ item }) =>
                        item.duration !== undefined ? (
                            <Post
                                photo={item.photo}
                                username={item.username}
                                datetime={item.datetime}
                                description={item.description}
                                duration={item.duration}
                            />
                        ) : (
                            <User
                                photo={item.photo}
                                username={item.username}
                                following={item.following}
                            />
                        )

                    }
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    }
}
