import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import './style.scss';

class Button extends Component {
  static defaultProps = {
    type: 'default', // default warning primary
  }

  state = {
    clicked: false
  }

  clickHandler = (e) => {
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
    const { type, ghost, className, children, icon, ...other } = this.props;
    const { clicked } = this.state;

    console.log(clicked);

    const cls = classnames('button', {
      'button-clicked': clicked,
      [`button-${type}`]: true,
      'button-ghost': ghost,
    }, className);

    const iconNode = icon ? <Icon type={icon} /> : null;
    return (
      <button 
        className={cls}
        onClick={this.clickHandler}
        {...other}
      >
        {iconNode}
        <span>{children}</span>
      </button>
    )
  }
}

export default Button;
