import { Route, Switch, /* Redirect */ } from 'react-router-dom'

import Layout from '../layouts/Layout'
import HomePage from '../pages/Home'
import TodosPage from '../pages/Todos'

export default function App() { 
	return (
    <Layout>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/todos' component={TodosPage} />
        {/* <Redirect to='/' /> */}
      </Switch>
    </Layout>
  );
}