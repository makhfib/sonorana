import React, { Component } from 'react'
import { View, Keyboard, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler';
import SearchBar from '../../../components/SearchBar';
import Post from '../../../components/Post';
import SamplePosts from '../../../data/Posts'
import { Colors } from '../../../constants/Colors'
import { custom } from '../css/Notice.css'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { get_feed } from '../../../modules/Feed/actions'
import PropTypes from 'prop-types'

class Home extends Component {

    state = {
        value: undefined,
        search: false,
        searchText: '',
    }

    fetchData() {
        const {
            CognitoUser
        } = this.props;

        this.props.get_feed({
            u_username: CognitoUser['username']
        })
    }

    componentDidMount() {
        this.fetchData()
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
        const { feed } = this.props;

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
                                data={feed}
                                renderItem={({ item }) =>
                                    <Post
                                        item={item}
                                        navigation={this.props.navigation}
                                    />
                                }
                                keyExtractor={item => item.p_id}
                            />
                        ) : (
                            <KeyboardAwareScrollView
                                scrollEnabled={false}
                                style={custom.container}
                            >
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
                            </KeyboardAwareScrollView>
                        )
                }
            </SafeAreaView>
        )
    }
}

Home.propTypes = {

}

const mapStateToProps = state => ({
    feed: state.feed.feed,
    CognitoUser: state.auth.CognitoUser
});

const mapDispatchToProps = {
    get_feed
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)