import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './redux/books/books';
import New from './redux/books/new';
import Categories from './redux/categories/categories';
import Nav from './components/nav';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <New />
          <Books />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
