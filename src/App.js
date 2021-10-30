import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './components/Home/Home';
import AllTour from './components/AllTour/AllTour';
import TourDetails from './components/TourDetails/TourDetails';
import LogIn from './components/LogIn/LogIn';
import AuthProvider from './context/AuthProvider';
import AddEvent from './components/AddEvent/AddEvent';
import PrivateRoute from './Private/PrivateRoute';
import NotFound from './components/NotFound/NotFound';


import OrderServices from './components/OrderServices/OrderServices';
import Register from './components/Register/Register';
import AdminDashBoard from './components/AdminDashBoard/AdminDashBoard';
import MyBooking from './components/MyBooking/MyBooking';









function App() {





  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" >
              <Home>
              </Home>
            </Route>
            <Route exact path="/home" >
              <Home>
              </Home>
            </Route>

            <PrivateRoute exact path="/alltour" >
              <AllTour></AllTour>
            </PrivateRoute>
            <PrivateRoute exact path="/alltour/:key" >
              <TourDetails

              ></TourDetails>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/tour/:key">
              <OrderServices></OrderServices>
            </Route>
            <PrivateRoute path="/addevent">
              <AddEvent></AddEvent>
            </PrivateRoute>

            <Route exact path="/dashboard">
              <AdminDashBoard></AdminDashBoard>
            </Route>
            <Route exact path="/myCart">
              <MyBooking></MyBooking>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
