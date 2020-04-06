import React from 'react';

import './Button.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleRight, faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

class Button extends React.Component {
    
    constructor(props) {
      super(props);

      let icons = {
        'top': faAngleUp,
        'right': faAngleRight,
        'bottom': faAngleDown,
        'left': faAngleLeft
      };

      this.state = {
        onClick: props.onClick,
        icon: icons[props.icon]
      }
    }

    render() {
      return (
        <button className={`button ${ this.props.className }`} onClick={this.state.onClick}>
            <FontAwesomeIcon icon={this.state.icon} />
        </button>
      );
    }

}

export default Button;