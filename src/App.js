import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"

export default class App extends React.Component {

  constructor(props){
    
    super(props);
    
    this.state={
      speed:50,
      lighton:false
    }

  }

  sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
}

  speedChange=()=>{
    let s=this.state.speed
    this.setState({speed:s+100})
    console.log('Inside speedchange function')
  }

  initSpeed=()=>{
    this.setState({speed:50})
  }

  changeSpeed =async ()=>{
    this.initSpeed()
    for(let i=0;i<3;i++){
      await this.sleep(2000)
      console.log('Inside for loop')
      this.speedChange()
      console.log('Speed value ',this.state.speed)
    }
    //this.setState({speed:50})
  }

  turnlighton=()=>{
    if(this.state.lighton){
      this.setState({lighton:false})
    }
    else{
      this.setState({lighton:true})
    }
  }

  render(){

    return(
      <div>
        <h1>Hello world!!!</h1>

           
      
        <ReactSpeedometer
        value={this.state.speed}
        />


        <button onClick={this.changeSpeed}>Click to change</button>




        <br/>

        {this.state.lighton?
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sfplPSVcBBGcuoTT58UfVwHaHa%26pid%3DApi%26h%3D160&f=1"/>:
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DHmU7OCheB8l-N-fv61yZgHaIq%26pid%3DApi%26h%3D160&f=1" />
}

        <button onClick={this.turnlighton} >TURN LIGHT ON/OFF</button>


      </div>
    )

  }

}
