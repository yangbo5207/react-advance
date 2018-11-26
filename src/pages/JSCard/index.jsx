import React from 'react';
import { info } from './config';
import './style.scss';

class JSCard extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="header">
            <div className="left">
              <img className="avatar" src={info.jianshuAvator} alt="" />
              <div className="nickname">{info.jianshuNickname}</div>
            </div>
            <div className="right">公众号: {info.weixin}</div>
          </div>
          <div className="content">
            <img src={info.thumb} alt="" className="thumb"/>
            <div className="title">{info.title}</div>
          </div>
          <div className="desc">{info.desc}</div>
        </div>
      </div>
    );
  }
}

export default JSCard;
