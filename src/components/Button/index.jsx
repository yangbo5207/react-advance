import React, { Component } from 'react';
import classnames from 'classnames';
import './style.scss';

class Button extends Component {
  static defaultProps = {
    type: 'default', // default warning primary
  }

  state = {
    clicked: false
  }

  clickHandler = (e) => {
    console.log('xxxx');
    const { onClick } = this.props;
    this.setState({
      clicked: true
    })

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({ clicked: false })
    }, 500);

    onClick && onClick(e);
  }

  render() {
    const { type, ghost, className, children, ...other } = this.props;
    const { clicked } = this.state;

    console.log(clicked);

    const cls = classnames('button', {
      [`button-${type}`]: true,
      'button-ghost': ghost,
      'button-clicked': clicked
    }, className);
    return (
      <button 
        className={cls}
        onClick={this.clickHandler}
        {...other}
      >
        {children}
      </button>
    )
  }
}

export default Button;
