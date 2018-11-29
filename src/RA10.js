/**
 * Icon组件demo展示
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Icon from 'components/Icon';
import { icons } from 'components/Icon/config';

const container = {
  display: 'flex',
  maxWidth: '300px',
  margin: 'auto',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
}

const itemContainer = {
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

class App extends React.Component {
  render() {
    return (
      <div style={container}>
        <Icon type="add" spin />
        {icons.map((item, i) => (
          <div key={i} style={itemContainer}>
            <Icon type={item} />
          </div>
        ))}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
