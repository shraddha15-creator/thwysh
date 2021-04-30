import { Route, Switch } from 'react-router';
import { Header } from '../components/Header';
import { Home } from './Home';

function App() {
  return (
    <div className="App bg-gray-200">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
