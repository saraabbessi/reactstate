import React, { Component } from 'react'
import { Button, FormControl} from 'react-bootstrap'
import "./Counter.css";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count : 0,
            timer : 0,
            text : "",
        };
        console.log("constructor")
       // this.increment = this.increment.bind(this);
   }
   increment = () => {
    this.setState({count:this.state.count+1});
   }
   decrement = () => {
    this.state.count>0 && this.setState({count:this.state.count-1});
   }
   //Component didmount
   componentDidMount(){
    this.timerId= setInterval(()=> {
        this.setState({timer:this.state.timer +1});
    },1000);
   }
   //component didupdate
   componentDidUpdate(){
    console.log("component did updated");
   }
   //component willUnmount 
   componentWillUnmount(){
    console.log("component will unmount ");
   }
  render() {
    console.log("render")
    return (
    <div >
        <div className='counter' >
         <Button variant = "danger" onClick={this.increment}>+</Button> 
      {this.state.count}
      <Button variant = "danger" onClick={this.decrement}>-</Button> 
        </div>

       <div>{this.state.timer}</div>

      <div>
        <FormControl
          type="text" 
          placeholder="Enter your name..."
          style={{width:"250px", margin:"auto", marginTop:"50px" }}
          onChange={(e)=>this.setState({text: e.target.value})}
          />
         <p>{this.state.text}</p> 
      </div>
    </div>
    );
  }
}

export default Counter;
