import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../assets/styles/routes/App.scss';
import Layout from "../containers/Layout";
import RickAndMortyAPI from '../containers/RickAndMortyList';
import Contacts from '../containers/Contacts';
import Home from "../pages/Home";
import PageError from "../pages/PageError";

const App = () => (
    <BrowserRouter>
    <Layout>
      <Switch>
      <Route exact path='/FinamigaTest' component={Home}/>
        <Route exact path='/FinamigaTest/api' component={RickAndMortyAPI}/>
        <Route exact path='/FinamigaTest/contacts' component={Contacts}/>
        <Route path="*" component={PageError}/>
      </Switch>
    </Layout>
    </BrowserRouter>
  );


export default App;
