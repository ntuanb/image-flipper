import React from 'react';
import './ImageViewer.scss';

import Button from './Button';

class ImageViewer extends React.Component {
    
  constructor(props) {
    super(props);

    this.state = {
      image: props.image
    }
  }

  render() {
    return (
      <div class="image-viewer">
        <img class="image-viewer__image" src={this.state.image} />

        {
          this.state.image
            ? <div>
                <Button className="direction-buttons__button direction-buttons__button--top" name="left"/>
                <Button className="direction-buttons__button direction-buttons__button--right" name="left"/>
                <Button className="direction-buttons__button direction-buttons__button--bottom" name="left"/>
                <Button className="direction-buttons__button direction-buttons__button--left" name="left"/>
              </div>
            : ''

        }
      </div>
    );
  }

}

export default ImageViewer;