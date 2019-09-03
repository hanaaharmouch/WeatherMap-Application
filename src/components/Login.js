import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom';
import { link , Switch, Route} from 'react-router-dom'
import Welcome from './Welcome'
import Map from './Map'

export default class Login extends Component{
    constructor(props){
        super(props)
        let loggedIn=false
        this.state={
            username:'',
            password:'',
            loggedIn
        }
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e){
        e.preventDefault()
        const {username, password}=this.state//login magic
        if(username==="hanaa" && password==="hanaa"){

            this.setState({
                loggedIn:true
            })
         }
    }

    render(){
        
        if(this.state.loggedIn){
            window.location="/welcome/"+this.state.username;
           /* window.location="/map";*/
        }
        return (
            
        <div className="limiter">
		<div className="container-login100" >
			<div className="wrap-login100 p-t-190 p-b-30">
				<form  onSubmit={this.submitForm} className="login100-form validate-form">
					<span className="login100-form-title p-t-20 p-b-45">
						Weather App
					</span>

					<div className="wrap-input100 validate-input m-b-10" data-validate = "Username is required">
						<input className="input100" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-user"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input m-b-10" data-validate = "Password is required">
						<input className="input100" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock"></i>
						</span>
					</div>

					<div className="container-login100-form-btn p-t-10">
						<button className="login100-form-btn">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
   
           
        );
    }
}
