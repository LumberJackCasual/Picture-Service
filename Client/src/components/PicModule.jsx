import React from 'react';
import axios from 'axios';

class PicModule extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: []
    }
  }

  componentDidMount(){
    console.log('mounted');
  }

  render(){
    return (
      <h4>!!Hello from PicModule.jsx!!</h4>
    )
  }
}

export default PicModule;