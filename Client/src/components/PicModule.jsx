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
      modalView: false,
      currentIndex: 0,
    };
    this.modalView = this.modalView.bind(this);
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

  modalView() {
    const defaultStyle = document.getElementById('defaultStyle');
    const modalStyle = document.getElementById('modalStyle');

    if (this.state.modalView === false) {
      this.setState({modalView: true});
      modalStyle.href = 'modal.css';
      defaultStyle.href = '';
    } else {
      this.setState({modalView: false});
      modalStyle.href = '';
      defaultStyle.href = 'styles.css';
    }
  }

  idxSync(index) {
    this.setState({ currentIndex: index });
  }

  render() {
    return (
      <div>
        { this.state.modalView === false &&
        <div id="flex-container">
          <VerticalScroll thumbnails={this.state.thumbnails} focus={this.state.currentIndex} />
          <HorizontalScroll largePics={this.state.largePics} modalView={this.modalView} idxSync={this.idxSync} />
        </div>
        }
        {this.state.modalView === true &&
        <div>
            <h3>Hi from Modal!</h3>
            <button id="closeModalButton" type="button" onClick={this.modalView}>close</button>
          </div>
        }
      </div>
    );
  }
}

export default PicModule;
