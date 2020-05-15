import React, { Component } from 'react'
import CurrentUser from '../Profile'
import { connect } from 'react-redux'
import { get_profile } from '../../../modules/Profile/actions'
import PropTypes from 'prop-types'

class Profile extends Component {

    componentDidMount() {
        this.props.get_profile({
            u_username: this.props.CognitoUser['username']
        })
    }

    render() {
        const {
            u_username,
            u_name,
            u_photo,
            u_description,
            u_website,
            u_numFollowing,
            u_numFollowers,
        } = this.props;

        return (
            <CurrentUser
                u_username={u_username}
                u_name={u_name}
                u_photo={u_photo}
                u_description={u_description}
                u_website={u_website}
                u_numFollowing={u_numFollowing}
                u_numFollowers={u_numFollowers}
                navigation={this.props.navigation}
            />
        )
    }
}

Profile.propTypes = {
    profile: PropTypes.object,
}

const mapStateToProps = state => ({
    u_username: state.profile.u_username,
    u_name: state.profile.u_name,
    u_photo: state.profile.u_photo,
    u_description: state.profile.u_description,
    u_website: state.profile.u_website,
    u_numFollowing: state.profile.u_numFollowing,
    u_numFollowers: state.profile.u_numFollowers,
    CognitoUser: state.auth.CognitoUser,
});

const mapDispatchToProps = {
    get_profile,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)