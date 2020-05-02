import React, { Component } from 'react'
import User from '../User'

export default class Profile extends Component {

    render() {
        return (
            <User
                name={'Mohammed Makhfi'}
                username={'makhfib'}
                photo={'https://media-exp1.licdn.com/dms/image/C4D03AQEy3CR_2OAw6Q/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=5gn-IJGPJinVYKlV4gxbQKGxI4jUPSe_TezE_ZBHqiQ'}
                description={'Family First. CEO of VaynerMedia, VaynerSports. Investor in Twitter, Uber, FB. 5X NYTimes best seller! Die hard NYJets fan.'}
                website={'makhfib.com'}
                following={'11.8k'}
                followers={'2.1m'}
            />
        )
    }
}
