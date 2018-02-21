import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reduce } from './store/tournament/reducer';
import	App	from	'./components/App';
import logo from './logo.svg';
import './App.css';

let store = createStore( reduce );

render(
  <Provider	store={store}>
      <App	/>
  </Provider>,
  document.getElementById('root')
)

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
