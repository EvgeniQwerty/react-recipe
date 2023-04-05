import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

import { Home } from './pages/Home';
import { Meals } from './pages/Meals';
import { Meal } from './pages/Meal';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <Router basename='/react-recipe'>
            <Header />
            <main className='container content'>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/categories/:name' component={Meals}></Route>
                    <Route path='/meals/:id' component={Meal}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
