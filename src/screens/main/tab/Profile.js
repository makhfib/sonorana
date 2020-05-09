import React, { Component } from 'react'
import CurrentUser from '../Profile'

export default class Profile extends Component {

    render() {

        return (
            <CurrentUser
                navigation={this.props.navigation}
            />
        )
    }
}
