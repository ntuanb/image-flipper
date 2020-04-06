import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleTop, faAngleRight, faAngleBottom, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

class Button extends React.Component {
    
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <button className={`button ${ this.props.className }`}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      );
    }

}

export default Button;