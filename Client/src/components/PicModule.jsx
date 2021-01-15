import React from 'react';
import axios from 'axios';
import HorizontalScroll from './HorizontalScroll.jsx';

class PicModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      singleDescription: '',
      singlePicture: ''
    };
  }

  componentDidMount() {
    axios.get('/api/')
      .then((data) => {
        this.setState({ pictures: data.data });
        console.log(this.state.pictures[0].description);
        this.setState({ singleDescription: data.data[0].description});
        this.setState({ singlePicture: data.data[0].viewOne_url})
      })
      .catch((err) => err);
  }

  render() {
    return (
      <div>
        <h4>!!Hello from PicModule.jsx!!</h4>
        <p>{this.state.singleDescription}</p>
        <img alt="one picture" src={this.state.singlePicture}/>
      </div>
    );
  }
}

export default PicModule;
