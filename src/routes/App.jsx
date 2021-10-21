import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../assets/styles/routes/App.scss';
import Layout from "../containers/Layout";
import RickAndMortyAPI from '../containers/RickAndMortyList';
import Filter from '../containers/Filter';
import Home from "../pages/Home";

const App = () => (
    <BrowserRouter>
    <Layout>
      <Switch>
      <Route exact path='/' component={Home}/>
        <Route exact path='/api' component={RickAndMortyAPI}/>
        <Route exact path='/filter' component={Filter}/>
      </Switch>
    </Layout>
    </BrowserRouter>
  );


export default App;
