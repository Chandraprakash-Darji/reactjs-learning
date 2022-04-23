import React, { Component } from 'react'

export default class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome Visitor"
        }
    }
    changeMsg(){
        this.setState({
            message:"Thank You for Subscribing"
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMsg()}>Subscribe</button>
            </>
        )
    }
}
