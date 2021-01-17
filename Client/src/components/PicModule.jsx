import React from 'react';
import axios from 'axios';
import HorizontalScroll from './HorizontalScroll.jsx';

class PicModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 0,
      description: '',
      largePics: [],
      thumbnails: []
    };
  }

  componentDidMount() {
    axios.get('/api/')
      .then((data) => {
        this.setState({ product_id: data.data[0]["product_id"]});
        this.setState({ description: data.data[0]["description"] });
        this.setState({ largePics: data.data[0]["largePics"] });
        this.setState({ thumbnails: data.data[0]["thumbnails"] });
      })
      .catch((err) => err);
  }

  render() {
    return (
      <div>
        <HorizontalScroll largePics={this.state.largePics} />
      </div>
    );
  }
}

export default PicModule;
