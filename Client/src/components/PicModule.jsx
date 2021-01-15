import React from 'react';
import axios from 'axios';
import HorizontalScroll from './HorizontalScroll.jsx';

class PicModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    axios.get('/api/')
      .then((data) => {
        this.setState({ pictures: data.data });
      })
      .catch((err) => err);
  }

  render() {
    return (
      <div>
        <h4>!!Hello from PicModule.jsx!!</h4>
        <HorizontalScroll pictures={this.state.pictures} />
      </div>
    );
  }
}

export default PicModule;
