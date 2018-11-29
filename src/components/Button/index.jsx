import React, { Component } from 'react';
import classnames from 'classnames';
import { omit } from 'lodash';
import './style.scss';

class Button extends Component {
  static defaultProps = {
    loading: false,
    type: 'default', // default warning primary 
  }

  render() {
    const { type, ghost, className, children, ...other } = this.props;

    const cls = classnames('button', {
      [`button-${type}`]: true,
      'button-ghost': ghost
    }, className);
    return (
      <button className={cls}>
        {children}
      </button>
    )
  }
}

export default Button;
