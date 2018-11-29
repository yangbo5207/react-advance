/**
 * Button组件展示页面
 */
import React, { Component } from 'react';
import Button from 'components/Button';
import './style.scss';

class RA10 extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="session">
          <Button>default</Button>
          <Button type="primary">primary</Button>
          <Button type="warning">warning</Button>
          <Button type="danger">danger</Button>
        </div>
      </div>
    )
  }
}

export default RA10;