import React , {Component} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import weather from '../images/weather.png';
import styled from 'styled-components';
import dataa from '../city.list.json';
import Footer from './Footer'

/*initialiser APIKEY*/
const API_KEY="b1578017bd124add823e2634584d09ae";

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};

`;


export default class Map extends Component{
    
    componentDidMount(){
        this.map = L.map('map', {
            center:  [5,16],
            zoom:1,
            zoomControl :true
        });

        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            detectRetina:true,
            maxZoom: 10
        }).addTo(this.map);
        
    }
    getWeather= async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const found = dataa.find(function(element) {
          return element.name.toUpperCase() === city.toUpperCase() && ( element.country === "FR" || element.country === "ES" || element.country === "BE" || element.country === "AL" || element.country === "DE" || element.country === "MC" || element.country === "PT"  );
        });

        /*test de récupération des données*/ 
        if(found){
        console.log(found);
        const api_call =await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${found.id}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        
        /*verifier la data dans la console*/
        console.log(data);
        
        /*recuperer les donnees de la data et cast to string */
        const temp=String(data.main.temp); 
        const humidity=String(data.main.humidity);
        const min=String(data.main.temp_min);
        const max=String(data.main.temp_max);
        var marker = L.marker([found.coord.lat,found.coord.lon]).addTo(this.map);

        /*à la place du marker on utilise circle*/
        const circle = L.circle([found.coord.lat,found.coord.lon], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500,
            
        }).addTo(this.map).bindPopup("Temperature : "+temp +"°C <br />Humidity : "+humidity+"%<br />Minimum temperature : "+min+"°C <br />Maximum  temperatur: "+max+"°C ").openPopup;}
        else{ 
            alert('ville introuvable')
        }
        

      }
      
      
    render(){
        return (
           
            <body id="page-top " >
            <div class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
              <a class="navbar-brand js-scroll-trigger">Weather App</a>
              
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item mx-0 mx-lg-1">
                     <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/logout">Logout</a>
                </li>
                </ul>
              </div>
            </div>
          </div>
        
        
          <header class="masthead bg-primary text-white text-center">
          <form  onSubmit={this.getWeather} class="search">
            <input class="search-box" type="text" name="city" placeholder="Paris,Lisbonne..."/>
            <button class="search-action">Go..</button>
        </form>
            <div class="right">
              <Wrapper width="550px" height="400px" id="map" />
            </div>
            
          </header>
          <Footer />
          </body>
     
        )
        
    }
}