import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { getLibbyProfile } from '../api/api_index';

class Login extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            libby: ""
        }
        this.saveLibby = this.saveLibby.bind(this)
    }

    componentDidMount(){
        getLibbyProfile(this.saveLibby)
    }

    saveLibby(err, libby) {
        this.setState({
            error: err,
            libby: libby
        })
}


render () {
    return (
            <React.Fragment>
            <h3> TIPSY</h3>
                <center>
                    <h4> Who are you? </h4>
                    <div><Link to='/profiles/1'><h4>{this.state.libby.firstname}</h4>
                    <p><img src ={this.state.libby.profilepic} width="200px" /></p></Link></div>

                    <div><Link to='/user/new/'><button>Add new user</button></Link><br/></div>

                </center>
            </React.Fragment>
        )
}
}

export default Login
   
