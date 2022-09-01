import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList'
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
]

export default function App({isLoggedIn}) {
  return (
    <>
    <Notifications listNotifications={listNotifications} />
    <div className='App'>
      <Header />
      { !isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} /> }
      <Footer />
    </div>
    </>
  );
}

App.defaultProp = {
  isLoggedIn: false
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};
