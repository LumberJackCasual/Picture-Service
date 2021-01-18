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
    const header = document.createElement('div');
    header.id = 'modalHeader';
    const headerCountBTN = document.createElement('button');
    headerCountBTN.className = 'headerCountBTN';
    headerCountBTN.innerText = `${this.state.currentIndex}/ ${this.state.largePics.length}`;
    const text = document.createElement('h3');
    text.innerText = `${this.state.description}`;
    const closeBTN = document.createElement('button');
    closeBTN.className = 'closeBTN';
    closeBTN.addEventListener('click', this.modalView);
    closeBTN.innerText = 'X';

    if (this.state.modalView === false) {
      this.setState({ modalView: true });
      modalStyle.href = 'modal.css';
      defaultStyle.href = '';
      header.appendChild(headerCountBTN);
      header.appendChild(text);
      header.appendChild(closeBTN);
      document.body.prepend(header);
    } else {
      this.setState({ modalView: false });
      modalStyle.href = '';
      defaultStyle.href = 'styles.css';
      document.body.removeChild(document.body.childNodes[0]);
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
          <div id="flex-container">
              <HorizontalScroll largePics={this.state.largePics} modalView={this.modalView} idxSync={this.idxSync} />
              <VerticalScroll thumbnails={this.state.thumbnails} focus={this.state.currentIndex} />
           </div>
        </div>
        }
      </div>
    );
  }
}

export default PicModule;
