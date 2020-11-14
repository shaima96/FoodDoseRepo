import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import  './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            UserName: '',
            Password: '',
            Email: ''
        }
        this.changeUserName = this.changeUserName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeUserName(e) {
        this.setState({ UserName: e.target.value })
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
            UserName: this.state.UserName,
            Password: this.state.Password,
            Email: this.state.Email
        }
        axios.post('http://localhost:5000/fooddose/signup', registered)
            .then(response => console.log(response.data))
        this.setState({
            UserName: '',
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
                            <input type='text' placeholder='User Name' onChange={this.changeUserName} value={this.state.UserName} className='form-control form-group' />
                            <input type='password' placeholder='Password' onChange={this.changePassword} value={this.state.Password} className='form-control form-group' />
                            <input type='text' placeholder='Email' onChange={this.changeEmail} value={this.state.Email} className='form-control form-group' />
                            <input type='submit' className='btn btn-danger btn-block' id="btn" value='Submit' />
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}


export default App;