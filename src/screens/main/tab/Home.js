import React from 'react'
import { FlatList, Text, View, StyleSheet, Image, ScrollView, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../../components/NavigationBar'
import SimpleActivityIndicator from '../../../components/SimpleActivityIndicator'
import Separator from '../../../components/Separator'
import Post from '../../../components/Post'
import Feed from '../../../data/clipsList'
import { colors, layout } from '../../../constants/Styles'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { get_feed, refresh_feed, load_more } from '../../../modules/Feed/actions'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { goToURL } from '../../../functions/utils'


class Home extends React.Component {

    state = {
        feed: [],
    }

    componentDidMount() {
        this.props.get_feed()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.feed !== this.props.feed) {
            this.setState({ feed: this.props.feed })
        }
    }

    _onRefresh() {
        this.props.refresh_feed()
    }

    _onLoadMore() {
        if (this.props.more) {
            this.props.load_more()
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.safearea }}>
                <NavigationBar
                    title={require('../../../assets/brand/Black-Text.png')}
                />
                {
                    this.props.loading
                        ? <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <SimpleActivityIndicator loading={this.props.loading} />
                        </View>
                        : !this.props.error && this.state.feed.length > 0
                            ? <FlatList
                                data={this.state.feed}
                                renderItem={({ item }) => (
                                    <Post
                                        item={item}
                                        navigation={this.props.navigation}
                                    />
                                )}
                                keyExtractor={item => item.p_id}
                                refreshing={this.props.refreshing}
                                onRefresh={() => this._onRefresh()}
                                onEndReachedThreshold={0.3}
                                onEndReached={() => this._onLoadMore()}
                            />
                            : !this.props.error
                                ? <ScrollView
                                    contentContainerStyle={{
                                        flex: 1,
                                        backgroundColor: colors.background,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingHorizontal: layout.paddingHorizontal * 2,
                                    }}
                                    refreshControl={
                                        <RefreshControl
                                            refreshing={this.props.refreshing}
                                            onRefresh={() => this._onRefresh()}
                                        />
                                    }
                                >
                                    <Image
                                        style={{
                                            height: 150,
                                            width: 150,
                                            resizeMode: 'contain',
                                        }}
                                        source={require('../../../assets/illustrations/avatar-network.png')}
                                    />
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                            marginVertical: 10,
                                            textAlign: 'center',

                                        }}
                                    >
                                        Follow other people to see their latest posts!
                                </Text>
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        onPress={() => this.props.navigation.navigate('Search')}
                                    >
                                        <Text
                                            style={{
                                                color: colors.blue,
                                                fontSize: 15,
                                                marginVertical: 10,
                                                textAlign: 'center',
                                            }}
                                        >
                                            Find your friends
                                    </Text>
                                    </TouchableOpacity>
                                </ScrollView>
                                : <ScrollView
                                    contentContainerStyle={{
                                        flex: 1,
                                        backgroundColor: colors.background,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingHorizontal: layout.paddingHorizontal * 2,
                                    }}
                                    refreshControl={
                                        <RefreshControl
                                            refreshing={this.props.refreshing}
                                            onRefresh={() => this._onRefresh()}
                                        />
                                    }
                                >
                                    <Image
                                        style={{
                                            height: 150,
                                            width: 150,
                                            resizeMode: 'contain',
                                        }}
                                        source={require('../../../assets/illustrations/plug.png')}
                                    />
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                            marginVertical: 10,
                                            textAlign: 'center',

                                        }}
                                    >
                                        Oups, something went wrong!
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            marginVertical: 10,
                                            textAlign: 'center',
                                        }}
                                    >
                                        Check your internet connection. If that's working, then it might be that our servers are down.
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        onPress={() => goToURL('https://instagram.com/sonoranaapp')}
                                    >
                                        <Text
                                            style={{
                                                color: colors.blue,
                                                fontSize: 15,
                                                marginVertical: 10,
                                                textAlign: 'center',
                                            }}
                                        >
                                            Please, notify our team on Instagram.
                                        </Text>
                                    </TouchableOpacity>
                                </ScrollView>
                }
            </SafeAreaView>
        );
    }
}

Home.propTypes = {

}


const mapStateToProps = (state) => ({
    feed: state.feed.feed,
    more: state.feed.more,
    loading: state.feed.loading,
    refreshing: state.feed.refreshing,
    error: state.feed.error
})

const mapDispatchToProps = {
    get_feed,
    refresh_feed,
    load_more
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)