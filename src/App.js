import React, { Component } from 'react'
import Form from './Component/Form';
import Wether from './Component/Wether';
export default class App extends Component {

  state={
    temp:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'',
}

  getwether =async (e)=>{
    e.preventDefault();
    const apiKey ="ff7ae32769ba4573539136c0cfec95af";
    const city =e.target.elements.city.value;
    const country =e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${apiKey}`);
    const data = await api.json();
    console.log(data);
    if(city && country){
    this.setState({
      temp:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.temp,
      description:data.weather[0].description,
      error:'',
      
    })
  }

    else{
      this.setState({
        error:'There Is No Data',
        
      })
  
    }
    // console.error(this.state.temp)
    // console.error(this.state.city)
    // console.error(this.state.country)
    // console.error(this.state.humidity)
    // console.error(this.state.description)
    
  }
  render() {
    return (
      <div>
        <Form getwether={this.getwether}/>
        <Wether temp={this.state.temp} error={this.state.error} city={this.state.city} country={this.state.country} humidity={this.state.humidity} description={this.state.description} />
      </div>
    )
  }
}
