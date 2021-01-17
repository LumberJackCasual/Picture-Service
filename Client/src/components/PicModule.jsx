import React from 'react';
import axios from 'axios';
import HorizontalScroll from './HorizontalScroll.jsx';
import VerticalScroll from './VerticalScroll.jsx';

class PicModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 0,
      description: '',
      largePics: [],
      thumbnails: [],
      fullView: false,
      currentIndex: 0,
    };
    this.fullView = this.fullView.bind(this);
    this.idxSync = this.idxSync.bind(this);
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

  fullView(boolean) {
    if (boolean === false) {
      this.setState({fullView: true});
    } else {
      this.setState({fullView: false});
    }
  }

  idxSync(index) {
    this.setState({ currentIndex: index });
  }

  render() {
    return (
      <div id="flex-container">
        <VerticalScroll thumbnails={this.state.thumbnails} focus={this.state.currentIndex} />
        <HorizontalScroll largePics={this.state.largePics} fullView={this.fullView} idxSync={this.idxSync} />
      </div>
    );
  }
}

export default PicModule;
