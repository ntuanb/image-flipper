import React from 'react';

import './ImageFlipper.scss';

import ImageViewer from './ImageViewer';

class ImageFlipper extends React.Component {
    
  constructor() {
    super();

    this.state = { 
      image: []
    };

    this.onChange = this.onChange.bind(this);
  }
 
  onChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div className="image-flipper">
        <input className="image-flipper__uploader" type="file" value={this.state.value} onChange={this.onChange} />

        <ImageViewer image={this.state.image} key={this.state.image}/>
      </div>
    );
  }

}

export default ImageFlipper;