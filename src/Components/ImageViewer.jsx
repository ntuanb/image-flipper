import React from 'react';
import './ImageViewer.scss';

import Button from './Button';

class ImageViewer extends React.Component {
    
  constructor(props) {
    super(props);

    this.state = {
      image: props.image,
      x: 0,
      y: 0,
      z: 0,
      style: {}
    }

    this.flipUp = this.flipUp.bind(this);
    this.flipRight = this.flipRight.bind(this);
    this.flipDown = this.flipDown.bind(this);
    this.flipLeft = this.flipLeft.bind(this);
  }

  buildStyle(x, y, z) {
    let styles = {
      transform: 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)'
    };

    return styles;
  }

  flipUp() {
    let x = this.state.x - 180;

    this.setState({
      x: x,
      style: this.buildStyle(x, this.state.y, this.state.z)
    });
  }

  flipRight() {
    let y = this.state.y + 180;

    this.setState({
      y: y,
      style: this.buildStyle(this.state.x, y, this.state.z)
    });
  }

  flipDown() {
    let x = this.state.x + 180;

    this.setState({
      x: x,
      style: this.buildStyle(x, this.state.y, this.state.z)
    });
  }

  flipLeft() {
    let y = this.state.y - 180;

    this.setState({
      y: y,
      style: this.buildStyle(this.state.x, y, this.state.z)
    });
  }

  renderButtons(image) {
    let  buttons = null;

    if (image.length > 0) {
      buttons = <div>
        <Button className="image-viewer__button image-viewer__button--top" icon="top" onClick={this.flipUp} />
        <Button className="image-viewer__button image-viewer__button--right" icon="right" onClick={this.flipRight} />
        <Button className="image-viewer__button image-viewer__button--bottom" icon="bottom" onClick={this.flipDown} />
        <Button className="image-viewer__button image-viewer__button--left" icon="left" onClick={this.flipLeft} />
      </div>
    }

    return buttons;
  }

  render() {

    let buttons = this.renderButtons(this.state.image);

    return (
      <div className="image-viewer">
        <img style={this.state.style} className="image-viewer__image" src={this.state.image} />

        { buttons ? buttons : '' }
      </div>
    );
  }

}

export default ImageViewer;