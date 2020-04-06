import React from 'react';

import './ImageFlipper.scss';

import ImageViewer from './ImageViewer';

class ImageFlipper extends React.Component {
    
  constructor() {
    super();

    this.state = { 
      image: null
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
        {
          !this.state.image 
            ? <div>
                <p className="image-flipper__description">Please upload an image and use the arrow keys to flip the image</p>
                <input className="image-flipper__uploader" type="file" value={this.state.value} onChange={this.onChange} />
              </div>
            : <ImageViewer image={this.state.image} key={this.state.image}/>
        }
      </div>
    );
  }

}

export default ImageFlipper;