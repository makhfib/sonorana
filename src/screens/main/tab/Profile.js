import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CognitoProfile from '../Profile'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { load_profile } from '../../../modules/Profile/actions'

class Profile extends React.Component {

    componentDidMount() {
        this.props.load_profile()
    }

    render() {
        return (
            <CognitoProfile
                item={{
                    u_username: this.props.u_username,
                    u_name: this.props.u_name,
                    u_photo: this.props.u_photo,
                    u_header: this.props.u_header,
                    u_description: this.props.u_description,
                    u_website: this.props.u_website,
                    u_numFollowing: this.props.u_numFollowing,
                    u_numFollowers: this.props.u_numFollowers,
                    u_posts: this.props.u_posts,
                }}
                navigation={this.props.navigation}
            />
        );
    }
}

Profile.propTypes = {

}

const mapStateToProps = (state) => ({
    u_username: state.profile.u_username,
    u_name: state.profile.u_name,
    u_photo: state.profile.u_photo,
    u_header: state.profile.u_header,
    u_description: state.profile.u_description,
    u_website: state.profile.u_website,
    u_numFollowing: state.profile.u_numFollowing,
    u_numFollowers: state.profile.u_numFollowers,
    u_posts: state.profile.u_posts
})

const mapDispatchToProps = {
    load_profile,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)