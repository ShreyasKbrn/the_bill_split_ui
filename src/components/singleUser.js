import React, { Component } from 'react'

export default class SingleUser extends Component {

    state = {
        id: 1,
        first_name: '',
        last_name: '',
        email: '',
    }

    constructor (props) {
        super(props);
        this.state = {id: this.props.data.id, first_name: this.props.data.first_name, last_name: this.props.data.last_name, email: this.props.data.email};
    }

    boxStyling = () => {
        return {
            height: '3cm',
            width: '10cm',
            background: 'red',
            border: '1px black solid',
            margin: '2px',
            display: 'block'
        }
    }

    

    render() {
        return (
            <button style = {this.boxStyling()} onClick = {this.props.userOnClick.bind(this, this.state)}>
                <p>{this.state.email}</p>
            </button>
        )
    }
}
