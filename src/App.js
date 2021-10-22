import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Banner } from './Components/Home/Banners'


import Header from './Components/Home/Header'
import Banners from './Components/Home/Banners'
import Category from './Components/Home/Category'
import Products from './Components/Home/Products'
import Footer from './Components/Home/Footer'
import Login from './Components/Login'
import Dashboard from './Components/AdminPanel/Dashboard'
import Register from './Components/Register'


function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/">
            <Header />
            <Banners />
            <Category />
            <Products />
            <Footer />
          </Route>
          <Route path="/Login">
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path="/SignUp">
            <Header />
            <Register/>
            <Footer />
          </Route>
        </Switch>


        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>

      </div>
  
      

    </Router>





  );
}

export default App;
