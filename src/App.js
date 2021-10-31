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

import PrivateRoute from './Private/PrivateRoute';
import NotFound from './components/NotFound/NotFound';



import Register from './components/Register/Register';
import AdminDashBoard from './components/AdminDashBoard/AdminDashBoard';
import MyBooking from './components/MyBooking/MyBooking';
import AddBooking from './components/AddEvent/AddEvent';









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

            <Route exact path="/alltour" >
              <AllTour></AllTour>
            </Route>
            <PrivateRoute exact path="/alltour/:_id" >
              <TourDetails
              ></TourDetails>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/tour/:_id">
              <AdminDashBoard></AdminDashBoard>
            </Route>
            <PrivateRoute path="/addbooking">
              <AddBooking></AddBooking>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <AdminDashBoard></AdminDashBoard>
            </PrivateRoute>
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
