import React from 'react';
import ReactDOM from 'react-dom';
import Icon from 'components/Icon';
import { icons } from 'components/Icon/config';

console.log('xxx');

class App extends React.Component {
  render() {
    return (
      <div>
        {icons.map((item, i) => (
          <div key={i}>
            <Icon type={item} />
          </div>
        ))}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
