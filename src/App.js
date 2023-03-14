import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import  "./App.css"
import Counter from './components/Counter';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      show: false,
    }

  }
  render() {
    return (
      <div className='App'>
        <Button 
        variant='primary'
        onClick={() => this.setState ({show: !this.state.show})}
        >
         Show
        </Button>
        { this.state.show && <Counter/>}
      </div>
    );
  }
}

export default App;
