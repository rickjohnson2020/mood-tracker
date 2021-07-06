import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Top } from './Top';
import { Detail } from './Detail';

import './App.css'


export const App = () => {
  return(
    <div>
      <Router>
        <Header />
          <div className='whole-body'>
            <Switch>
                <Route exact path='/' component={Top} />
                <Route exact path='/mood/:id' component={Detail} />
                <Route render={() => <h4>not found...</h4>} />
            </Switch>
          </div>
      </Router>
    </div>
  )
}
















// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
//
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       moods: [],
//     };
//   }
//
//   componentDidMount() {
//     fetch('http://localhost:8000/api/v1/mood/')
//     .then(response => response.json())
//     .then(json => this.setState({ moods: json }))
//     .catch(err => console.log(err));
//   }
//
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.moods.map(mood =>
//             <li key={mood.date}>
//               <h1>{mood.date}</h1>
//               <h2>{mood.mood}</h2>
//             </li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// const Item = props => (
//   <span>
//     {props.mood.date}: {props.mood.mood}
//   </span>
// );



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
