import React, { Component } from 'react'
import SingleUser from './singleUser'
import SignedIn from './SignedIn'

export default class Users extends Component {

state = { currentUser: {id: -1, first_name: "", last_name: "", email: ""} }

createUser = () => {
    let a = [];
    a.append(this.props.profiles.map((profile) => {return <singleUser data = {profile}></singleUser>}, this))
    return a;
}

userOnClick = (data) => {
    this.setState({currentUser: data});
}

//this.props.profiles.map(profile => <singleUser data = {profile}></singleUser>)
    render() {
        // return this.props.profiles.map((profile) => {
        //     return <h2>Hi</h2>
        // });

        if (this.state.currentUser.id === -1) {
            return <div>
            <React.Fragment>
            {this.props.profiles.map((profile) => {
                return <SingleUser key={profile.id} data={profile} userOnClick = {this.userOnClick}></SingleUser>
            })}
            </React.Fragment>
            </div>
        } else {
            return <SignedIn data={this.state.currentUser}></SignedIn>
        }

        
    }
}
