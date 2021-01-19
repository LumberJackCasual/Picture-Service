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
    const defaultStyle = document.getElementById('defaultStyle');
    const modalStyle = document.getElementById('modalStyle');
    const { modalView } = this.state;

    if (modalView === false) {
      this.setState({ modalView: true });
      modalStyle.href = 'modal.css';
      defaultStyle.href = '';
    } else {
      this.setState({ modalView: false });
      modalStyle.href = '';
      defaultStyle.href = 'styles.css';
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
      description,
      modalView,
    } = this.state;
    return (
      <div>
        { modalView === false && (
        <div id="flex-container">
          <VerticalScroll
            thumbnails={thumbnails}
            focus={currentIndex}
            idxSync={this.idxSync}
          />
          <HorizontalScroll
            largePics={largePics}
            modalView={this.modalView}
            idxSync={this.idxSync}
            currentIndex= {currentIndex}
          />
        </div>
        )}
        {modalView === true && (
        <div>
          <div id="modalHeader" >
            <button className="headerCountBTN">{currentIndex + 1} / {largePics.length}</button>
            <h3>{description}</h3>
            <button className="closeBTN" onClick={this.modalView} >X</button>
          </div>
          <div id="flex-container">
            <HorizontalScroll
              largePics={largePics}
              modalView={this.modalView}
              idxSync={this.idxSync}
              currentIndex= {currentIndex}
            />
            <VerticalScroll
              thumbnails={thumbnails}
              focus={currentIndex}
              idxSync={this.idxSync}
            />
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default PicModule;
