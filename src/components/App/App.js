import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import Edit from '../Edit/Edit';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      
        <Router>       
          <Route path="/" exact>
            <MovieList />
          </Route>
          
          <Route path="/details/:id">
            <Details />
          </Route>

          <Route path="/add">
            <AddMovie />
          </Route>

          <Route path="/edit/:id">
            <Edit />
          </Route>
        </Router>
      
    </div>
  );
}


export default App;
