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

        <div className="session">
          <Button icon="add" type="primary">新增</Button>
          <Button icon="check" type="primary">选择</Button>
          <Button icon="count" type="primary">计算</Button>
          <Button icon="volume" type="primary">播放</Button>
        </div>

        <div className="session">
          <Button icon="loading" type="primary">提交</Button>
        </div>
      </div>
    )
  }
}

export default RA10;