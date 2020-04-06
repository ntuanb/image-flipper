import React from 'react';
import './ImageViewer.scss';

import Button from './Button';

const ROTATE_DEGREES = 60;

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

    this.flipUpLeft = this.flipUpLeft.bind(this);
    this.flipUp = this.flipUp.bind(this);
    this.flipUpRight = this.flipUpRight.bind(this);

    this.flipLeft = this.flipLeft.bind(this);
    this.flipRight = this.flipRight.bind(this);

    this.flipDownLeft = this.flipDownLeft.bind(this);
    this.flipDown = this.flipDown.bind(this);
    this.flipDownRight = this.flipDownRight.bind(this);
  }

  buildStyle(x, y, z) {
    let styles = {
      transform: 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)'
    };

    return styles;
  }

  flipUpLeft() {
    let x = this.state.x - ROTATE_DEGREES;
    let y = this.state.x - ROTATE_DEGREES;

    this.setState({
      x: x,
      style: this.buildStyle(x, y, this.state.z)
    });
  }

  flipUp() {
    let x = this.state.x - ROTATE_DEGREES;

    this.setState({
      x: x,
      style: this.buildStyle(x, this.state.y, this.state.z)
    });
  }

  flipUpRight() {
    let x = this.state.x - ROTATE_DEGREES;
    let y = this.state.x - ROTATE_DEGREES;

    this.setState({
      x: x,
      style: this.buildStyle(x, y, this.state.z)
    });
  }

  flipLeft() {
    let y = this.state.y - ROTATE_DEGREES;

    this.setState({
      y: y,
      style: this.buildStyle(this.state.x, y, this.state.z)
    });
  }


  flipRight() {
    let x = this.state.x;
    let y = this.state.y + ROTATE_DEGREES;
    let z = this.state.z;

    this.setState({
      y: y,
      style: this.buildStyle(x, y, z)
    });
  }

  flipDownLeft() {
    let x = this.state.x - ROTATE_DEGREES;
    let y = this.state.y + ROTATE_DEGREES;

    this.setState({
      x: x,
      style: this.buildStyle(x, y, this.state.z)
    });
  }

  flipDown() {
    let x = this.state.x + ROTATE_DEGREES;

    this.setState({
      x: x,
      style: this.buildStyle(x, this.state.y, this.state.z)
    });
  }

  flipDownRight() {
    let x = this.state.x + ROTATE_DEGREES;
    let y = this.state.y + ROTATE_DEGREES;
    let z = this.state.z;

    this.setState({
      x: x,
      style: this.buildStyle(x, y, z)
    });
  }

  render() {

    return (
      <div className="image-viewer">
        <img style={this.state.style} className="image-viewer__image" src={this.state.image} />
        
        <div className="image-view__buttons">
          {/* <Button className="image-viewer__button image-viewer__button--top-left" icon="top" onClick={this.flipUpLeft} /> */}
          <Button className="image-viewer__button image-viewer__button--top" icon="top" onClick={this.flipUp} />
          {/* <Button className="image-viewer__button image-viewer__button--top-right" icon="top" onClick={this.flipUpRight} /> */}

          <Button className="image-viewer__button image-viewer__button--right" icon="right" onClick={this.flipRight} />
          <Button className="image-viewer__button image-viewer__button--left" icon="left" onClick={this.flipLeft} />

          {/* <Button className="image-viewer__button image-viewer__button--bottom-left" icon="bottom" onClick={this.flipDownLeft} /> */}
          <Button className="image-viewer__button image-viewer__button--bottom" icon="bottom" onClick={this.flipDown} />
          {/* <Button className="image-viewer__button image-viewer__button--bottom-right" icon="bottom" onClick={this.flipDownRight} /> */}
        </div>
      </div>
    );
  }

}

export default ImageViewer;