import React from 'react';

import './DirectionButtons.scss';

import Button from './Button';

class DirecitonButtons extends React.Component {
    
  constructor() {
    super();
  }

  render() {
    return (
      <div className="direction-buttons">
        <Button className="direction-buttons__button direction-buttons__button--top" name="left"/>
        <Button className="direction-buttons__button direction-buttons__button--right" name="left"/>
        <Button className="direction-buttons__button direction-buttons__button--bottom" name="left"/>
        <Button className="direction-buttons__button direction-buttons__button--left" name="left"/>
      </div>  
    )
  }

}

export default DirecitonButtons;
