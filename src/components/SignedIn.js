import React, { Component } from 'react'

export default class SignedIn extends Component {
    render() {
        return (
            <div>
                <h3>Hello, {this.props.data.first_name}</h3>
            </div>
        )
    }
}
