import React, { Component } from 'react'
import Child from './child'
class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            a: "hi"
        }
        this.change = this.change.bind(this)
    }
    change(ss) {
        this.setState({ a:ss })
    }
    render() {
        return (
            <div >{this.state.a}
            <Child njekkalFunction={this.change}></Child>
            </div>
        )
    }
}
export default Login 