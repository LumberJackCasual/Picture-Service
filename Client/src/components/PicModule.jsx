import React from 'react';
import axios from 'axios';
import HorizontalScroll from './HorizontalScroll.jsx';

class PicModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      singleItem: {},
      singleDescription: '',
      singlePicture: '',
      singleThumbnail: ''
    };
  }

  componentDidMount() {
    axios.get('/api/')
      .then((data) => {
        this.setState({ pictures: data.data });
        this.setState({ singleItem: data.data[0] });
      })
      .catch((err) => err);
  }

  render() {
    return (
      <div>
        <h4>!!Hello from PicModule.jsx!!</h4>
        <HorizontalScroll item={this.state.singleItem} />
      </div>
    );
  }
}

export default PicModule;
