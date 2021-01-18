import React from 'react';
import axios from 'axios';
import HorizontalScroll from './HorizontalScroll.jsx';
import VerticalScroll from './VerticalScroll.jsx';

class PicModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        this.setState({ description: data.data[0].description });
        this.setState({ largePics: data.data[0].largePics });
        this.setState({ thumbnails: data.data[0].thumbnails });
      })
      .catch((err) => err);
  }

  modalView() {
    const {
      largePics,
      currentIndex,
      description,
      modalView,
    } = this.state;
    const defaultStyle = document.getElementById('defaultStyle');
    const modalStyle = document.getElementById('modalStyle');
    const header = document.createElement('div');
    header.id = 'modalHeader';
    const headerCountBTN = document.createElement('button');
    headerCountBTN.className = 'headerCountBTN';
    headerCountBTN.innerText = `${currentIndex}/ ${largePics.length}`;
    const text = document.createElement('h3');
    text.innerText = `${description}`;
    const closeBTN = document.createElement('button');
    closeBTN.className = 'closeBTN';
    closeBTN.addEventListener('click', this.modalView);
    closeBTN.innerText = 'X';

    if (modalView === false) {
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
    const {
      largePics,
      thumbnails,
      currentIndex,
      modalView,
    } = this.state;
    return (
      <div>
        { modalView === false && (
        <div id="flex-container">
          <VerticalScroll
            thumbnails={thumbnails}
            focus={currentIndex}
          />
          <HorizontalScroll
            largePics={largePics}
            modalView={this.modalView}
            idxSync={this.idxSync}
          />
        </div>
        )}
        {modalView === true && (
        <div>
          <div id="flex-container">
            <HorizontalScroll
              largePics={largePics}
              modalView={this.modalView}
              idxSync={this.idxSync}
            />
            <VerticalScroll
              thumbnails={thumbnails}
              focus={currentIndex}
            />
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default PicModule;
