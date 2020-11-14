import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            Email: '',
            Password: ''
        }
        this.changePassword = this.changePassword.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changePassword(e) {
        this.setState({ Password: e.target.value })
    }

    changeEmail(e) {
        this.setState({ Email: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const registered = {
            Password: this.state.Password,
            Email: this.state.Email
        }
        axios.post('http://localhost:5000/fooddose/login', registered)
            .then(response => console.log(response.data))
        this.setState({
            Password: '',
            Email: ''
        })
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text' placeholder='Email' onChange={this.changeEmail} value={this.state.Email} className='form-control form-group' />
                            <input type='password' placeholder='Password' onChange={this.changePassword} value={this.state.Password} className='form-control form-group' />
                            <input type='submit' className='btn btn-danger btn-block' value='Login' />
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}


export default Login;