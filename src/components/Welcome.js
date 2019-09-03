import React, {Component} from 'react'
import {Link } from 'react-router-dom'
import weather from '../images/weather.png';
import Footer from './Footer'

export default class Welcome extends Component{
   
    render(){
        return (
            
            <body id="page-top">
            <div className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger">Weather App</a>
              
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" >{this.props.match.params.username}</a>
                </li>
                  
                  <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/logout">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
        
          <header className="masthead bg-primary text-white text-center">
            <div className="container search-action d-flex align-items-center flex-column">
        
              <h1 className="masthead-heading text-uppercase mb-0">Welcome to Weather App</h1>
        
              <img className="masthead-avatar mb-5" src={weather} alt=""/>

              <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="divider-custom-line"></div>
              </div>
              
              <button className="login1000-form-btn">
							<Link to="/map">Click here to see the weather map</Link>
						</button>
            
              
        
            </div>
            <Footer />
          </header>
        
          </body>
     
        )
    }
}